<script setup lang="ts">
// A locked "file" for plans that are not public yet. Hovering (or focusing, or
// tapping on touch) lifts the shackle and decodes the label into a hint.
const SEALED = 'Classified'
const REVEALED = 'Stay tuned'
const GLYPHS = '▓▒░#/<>_*'
const DURATION = 420

const hovered = ref(false)
const focused = ref(false)
const pinned = ref(false)
const revealed = computed(() => hovered.value || focused.value || pinned.value)
const label = ref(SEALED)

let frame = 0

function scrambleTo(target: string) {
    cancelAnimationFrame(frame)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        label.value = target
        return
    }

    const start = performance.now()
    const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION, 1)
        // Characters settle left to right; the unsettled tail keeps flickering.
        const settled = Math.floor(progress * target.length)
        label.value = [...target]
            .map((char, i) => i < settled || char === ' '
                ? char
                : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])
            .join('')
        if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
}

watch(revealed, (open) => scrambleTo(open ? REVEALED : SEALED))
onBeforeUnmount(() => cancelAnimationFrame(frame))

// Mouse reveals on hover; touch and pen have no hover, so a tap toggles instead.
function onPointerEnter(event: PointerEvent) {
    if (event.pointerType === 'mouse') hovered.value = true
}
function onPointerLeave(event: PointerEvent) {
    if (event.pointerType === 'mouse') hovered.value = false
}
function onPointerUp(event: PointerEvent) {
    if (event.pointerType !== 'mouse') pinned.value = !pinned.value
}
</script>

<template>
    <span class="seal-wrap" :class="revealed && 'is-open'">
        <button type="button" class="seal" aria-label="Project details: coming soon, stay tuned"
            @pointerenter="onPointerEnter" @pointerleave="onPointerLeave" @pointerup="onPointerUp"
            @focus="focused = true" @blur="focused = false">
            <svg class="seal-lock" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path class="seal-shackle" d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round" />
                <rect x="3" y="7" width="10" height="7" rx="1.5" fill="currentColor" />
                <circle class="seal-keyhole" cx="8" cy="10.5" r="1" />
            </svg>

            <span class="seal-label" aria-hidden="true">{{ label }}</span>

            <span class="seal-redacted" aria-hidden="true">
                <span class="w-7" />
                <span class="w-4" />
                <span class="w-9" />
            </span>
        </button>

        <span class="seal-hint" aria-hidden="true">More details soon…</span>
    </span>
</template>

<style scoped>
.seal-wrap {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.375rem 0.75rem;
}

/* Slides out from behind the seal once it opens. */
.seal-hint {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.875rem;
    color: var(--ink-muted);
    opacity: 0;
    transform: translateX(-0.375rem);
    transition: opacity 240ms ease, transform 240ms ease;
    pointer-events: none;
}

.is-open .seal-hint {
    opacity: 1;
    transform: none;
    transition-delay: 180ms;
}

.seal {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.3125rem 0.75rem 0.3125rem 0.625rem;
    border: 1px dashed var(--rule-strong);
    border-radius: var(--ui-radius);
    background: var(--paper-sunken);
    color: var(--ink-faint);
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    cursor: default;
    transition: color 200ms ease, background-color 200ms ease, border-color 200ms ease;
}

.is-open .seal {
    border-style: solid;
    border-color: var(--accent);
    background: var(--accent-soft);
    color: var(--accent);
}

.seal-lock {
    width: 0.875rem;
    height: 0.875rem;
    flex: none;
    overflow: visible;
}

/* The shackle hinges on its right leg and swings up out of the body. */
.seal-shackle {
    transform-box: fill-box;
    transform-origin: 100% 100%;
    transition: transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.is-open .seal-shackle {
    transform: translateY(-2px) rotate(28deg);
}

.seal-keyhole {
    fill: var(--paper-sunken);
    transition: fill 200ms ease;
}

.is-open .seal-keyhole {
    fill: var(--accent-soft);
}

.seal-label {
    white-space: pre;
    font-variant-numeric: tabular-nums;
}

.seal-redacted {
    display: inline-flex;
    gap: 0.25rem;
}

.seal-redacted > span {
    position: relative;
    height: 0.5rem;
    overflow: hidden;
    border-radius: 1px;
    background: var(--rule-strong);
    transition: background-color 200ms ease;
}

.is-open .seal-redacted > span {
    background: color-mix(in srgb, var(--accent) 35%, transparent);
}

/* A light sweep across the blacked-out text, as if something is being decoded. */
.seal-redacted > span::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, var(--paper-raised), transparent);
    opacity: 0.7;
    transform: translateX(-100%);
}

.is-open .seal-redacted > span::after {
    animation: seal-sweep 1.4s ease-in-out infinite;
}

.is-open .seal-redacted > span:nth-child(2)::after {
    animation-delay: 120ms;
}

.is-open .seal-redacted > span:nth-child(3)::after {
    animation-delay: 240ms;
}

@keyframes seal-sweep {
    to {
        transform: translateX(100%);
    }
}
</style>
