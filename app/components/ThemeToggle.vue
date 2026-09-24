<script setup lang="ts">
type Side = 'dark' | 'light'

const colorMode = useColorMode()

const MESSAGES: Record<Side, string> = {
    dark: 'Welcome to the dark side.',
    light: 'May the Force be with you.',
}

// The ceremony (reveal + caption) is a greeting, not a feature: each side gets
// it once per session. Every switch after that is instant and silent, so
// someone flipping back and forth to compare is never made to wait.
const SEEN_KEY = 'theme-greeted'
const HOLD_MS = 2600

const readSeen = (): Side[] => {
    try {
        return JSON.parse(sessionStorage.getItem(SEEN_KEY) ?? '[]')
    } catch {
        return []
    }
}

const markSeen = (side: Side) => {
    try {
        sessionStorage.setItem(SEEN_KEY, JSON.stringify([...new Set([...readSeen(), side])]))
    } catch {
        // Storage blocked: the greeting simply repeats, which is harmless.
    }
}

const caption = ref<Side | null>(null)
let hideTimer: ReturnType<typeof setTimeout> | undefined

const dismiss = () => {
    clearTimeout(hideTimer)
    caption.value = null
}

const announce = (side: Side) => {
    clearTimeout(hideTimer)
    caption.value = side
    hideTimer = setTimeout(dismiss, HOLD_MS)
}

const button = ref<HTMLButtonElement>()

// Writing `preference` rather than `value` is what makes the choice stick;
// `value` is the resolved mode and would be recomputed away.
const apply = async (side: Side) => {
    colorMode.preference = side
    // The class on <html> is set by a watcher chain inside the color-mode
    // plugin; one tick lets it land before a view transition snapshots.
    await nextTick()
}

const toggle = async () => {
    const next: Side = colorMode.value === 'dark' ? 'light' : 'dark'

    // Any switch cuts a caption that is still on screen — messages never stack.
    dismiss()

    const greet = !readSeen().includes(next)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!greet || reduceMotion || !document.startViewTransition || !button.value) {
        await apply(next)
        if (greet) {
            markSeen(next)
            announce(next)
        }
        return
    }

    // The new theme spreads out from the button, like the page is being
    // pulled to the other side from the point the visitor touched.
    const rect = button.value.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    const transition = document.startViewTransition(() => apply(next))
    markSeen(next)

    await transition.ready
    document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
    )
    await transition.finished
    announce(next)
}

onBeforeUnmount(() => clearTimeout(hideTimer))
</script>

<template>
    <!-- Which icon shows is decided by CSS, not by render state: the server
         cannot know the visitor's mode, and the color-mode script sets the class
         before paint. The icon names the side you would cross over to, and on
         hover it takes that side's colour as a preview. -->
    <button ref="button" type="button" @click="toggle" aria-label="Toggle colour theme"
        class="group flex items-center text-[var(--ink-faint)] print:hidden">
        <!-- Death Star: the way to the dark side. -->
        <svg class="size-[1.125rem] transition duration-500 group-hover:-rotate-[25deg] group-hover:text-[#d9343b] group-focus-visible:text-[#d9343b] dark:hidden"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M3.3 12.6c5.6 1.4 11.8 1.4 17.4 0" />
            <circle cx="15.2" cy="8" r="2.4" />
            <circle cx="15.2" cy="8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
        <!-- A Jedi lightsaber: the way back to the light. -->
        <svg class="saber hidden size-[1.125rem] transition-colors duration-300 group-hover:text-[var(--ink)] group-focus-visible:text-[var(--ink)] dark:block"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" aria-hidden="true">
            <path class="saber-blade" d="M10.2 13.8 20.5 3.5" stroke-width="1.75" />
            <path d="M4 20l4.6-4.6" stroke-width="3.2" />
            <path d="M7.4 12.6l4 4" stroke-width="1.5" />
        </svg>
    </button>

    <Teleport to="body">
        <!-- Kept mounted so screen readers get the message through the live
             region; only its contents come and go. -->
        <div class="pointer-events-none fixed inset-x-0 top-[4.75rem] z-[60] flex justify-center px-5 print:hidden"
            role="status" aria-live="polite">
            <Transition name="theme-caption">
                <button v-if="caption" type="button" @click="dismiss"
                    class="theme-caption pointer-events-auto flex items-center gap-3 rounded-full border py-2.5 pl-3.5 pr-5"
                    :class="`is-${caption}`">
                    <span class="caption-kicker font-mono text-[0.625rem] uppercase tracking-[0.16em]">
                        {{ caption === 'dark' ? 'Dark side' : 'Light side' }}
                    </span>
                    <span class="h-3.5 w-px bg-current opacity-25" aria-hidden="true" />
                    <span class="font-serif text-base italic sm:text-lg">{{ MESSAGES[caption] }}</span>
                </button>
            </Transition>
        </div>
    </Teleport>
</template>

<style scoped>
/* The light side reads as a plain inverted slip; the dark side is black glass
   lit red from within, the way a saber lights a corridor. */
.theme-caption.is-light {
    border-color: var(--rule-strong);
    background: var(--ink-strong);
    color: var(--paper);
    box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.2);
}

.theme-caption.is-light .caption-kicker {
    opacity: 0.6;
}

.theme-caption.is-dark {
    border-color: color-mix(in srgb, var(--accent) 70%, transparent);
    background: #0a0809;
    color: var(--ink-strong);
    box-shadow:
        0 0 0 1px rgb(255 60 70 / 0.15),
        0 0 28px -4px rgb(255 50 60 / 0.55),
        0 12px 30px -8px rgb(0 0 0 / 0.8);
}

.theme-caption.is-dark .caption-kicker {
    color: var(--accent);
}

/* The blade ignites blue on hover; the hilt stays metal. */
.saber-blade {
    transition: color 300ms ease, filter 300ms ease;
}

.group:hover .saber-blade,
.group:focus-visible .saber-blade {
    color: #7cc4ff;
    filter: drop-shadow(0 0 2px #4aa8ff);
}

.theme-caption-enter-active,
.theme-caption-leave-active {
    transition: opacity 260ms ease, transform 260ms ease;
}

.theme-caption-enter-from,
.theme-caption-leave-to {
    opacity: 0;
    transform: translateY(-0.5rem);
}
</style>

<style>
/* The reveal is driven from script via a clip-path on the new snapshot; the
   browser's default cross-fade would fight it. */
::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}
</style>
