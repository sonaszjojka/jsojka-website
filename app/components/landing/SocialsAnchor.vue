<script setup lang="ts">
const links = [
    { label: 'Email', icon: 'mi:email', to: 'mailto:jonasz.sojkaa@gmail.com', external: true },
    { label: 'LinkedIn', icon: 'i-simple-icons-linkedin', to: 'https://www.linkedin.com/in/jonasz-s%C3%B3jka/', external: true },
    { label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/sonaszjojka', external: true },
]
</script>

<template>
    <div class="flex flex-wrap items-center gap-x-5 gap-y-3">
        <!-- NOTE: /resume.png is not in public/ — this 404s until the file is added. -->
        <NuxtLink to="/resume.png" target="_blank"
            class="inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]">
            <UIcon name="mi:document-download" class="size-4" />
            Download résumé
        </NuxtLink>

        <div class="flex items-center gap-x-5">
            <NuxtLink v-for="link in links" :key="link.label" :to="link.to" target="_blank" rel="noopener"
                class="inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]">
                <UIcon :name="link.icon" class="size-4" />
                {{ link.label }}
            </NuxtLink>
        </div>
    </div>
</template>
