<script setup lang="ts">
const route = useRoute()

const items = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
]

const isActive = (to: string) =>
    to === '/' ? route.path === '/' : route.path.startsWith(to)
</script>

<template>
    <header class="sticky top-0 z-50 border-b border-[var(--rule)] bg-[var(--paper)]/85 backdrop-blur">
        <div class="mx-auto flex h-14 max-w-3xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <NuxtLink to="/"
                class="font-mono text-[0.8125rem] tracking-tight text-[var(--ink-strong)] transition-colors hover:text-[var(--accent)]">
                jonasz<span class="text-[var(--ink-faint)]">.sójka</span>
            </NuxtLink>

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
        </div>
    </header>
</template>
