<script setup lang="ts">
const links = [
    { icon: 'material-symbols:mail', to: 'mailto:jonasz.sojkaa@gmail.com', label: 'Email' },
    { icon: 'i-simple-icons-linkedin', to: 'https://www.linkedin.com/in/jonasz-s%C3%B3jka/', label: 'LinkedIn' },
    { icon: 'i-simple-icons-github', to: 'https://github.com/sonaszjojka', label: 'GitHub' },
]
</script>

<template>
    <footer class="border-t border-[var(--rule)]">
        <div
            class="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p class="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--ink-faint)]">
                Jonasz Sójka · {{ new Date().getFullYear() }}
            </p>

            <div class="flex items-center gap-4 print:hidden">
                <NuxtLink v-for="link in links" :key="link.label" :to="link.to" target="_blank" rel="noopener"
                    :aria-label="link.label"
                    class="text-[var(--ink-faint)] transition-colors hover:text-[var(--accent)]">
                    <UIcon :name="link.icon" class="size-4" />
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>
