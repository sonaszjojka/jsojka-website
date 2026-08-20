<script setup lang="ts">
const route = useRoute()

const items = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
]

const isActive = (to: string) =>
    to === '/' ? route.path === '/' : route.path.startsWith(to)

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

// Writing `preference` rather than `value` is what makes the choice stick;
// `value` is the resolved mode and would be recomputed away.
const toggleTheme = () => (colorMode.preference = isDark.value ? 'light' : 'dark')
</script>

<template>
    <header class="sticky top-0 z-50 border-b border-[var(--rule)] bg-[var(--paper)]/85 backdrop-blur">
        <div class="mx-auto flex h-14 max-w-3xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <NuxtLink to="/"
                class="font-mono text-[0.8125rem] tracking-tight text-[var(--ink-strong)] transition-colors hover:text-[var(--accent)]">
                jonasz<span class="text-[var(--ink-faint)]">.sójka</span>
            </NuxtLink>

            <div class="flex items-center gap-5 sm:gap-6">
                <nav class="flex items-center gap-5 sm:gap-6">
                    <NuxtLink v-for="item in items" :key="item.to" :to="item.to"
                        class="relative py-1 text-sm transition-colors" :class="isActive(item.to)
                            ? 'font-medium text-[var(--ink-strong)]'
                            : 'text-[var(--ink-muted)] hover:text-[var(--ink-strong)]'">
                        {{ item.label }}
                        <span v-if="isActive(item.to)" class="absolute -bottom-px left-0 h-px w-full bg-[var(--accent)]"
                            aria-hidden="true" />
                    </NuxtLink>
                </nav>

                <!-- Which icon shows is decided by CSS, not by render state: the
                     server cannot know the visitor's mode, and the color-mode
                     script sets the class before paint. So the right icon is up
                     immediately, with no hydration mismatch and no empty gap. -->
                <button type="button" @click="toggleTheme" aria-label="Toggle colour theme"
                    class="flex items-center text-[var(--ink-faint)] transition-colors hover:text-[var(--accent)] print:hidden">
                    <UIcon name="lucide:moon" class="size-4 dark:hidden" />
                    <UIcon name="lucide:sun" class="hidden size-4 dark:block" />
                </button>
            </div>
        </div>
    </header>
</template>
