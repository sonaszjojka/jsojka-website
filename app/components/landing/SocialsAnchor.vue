<script setup lang="ts">
const email = 'jonasz.sojkaa@gmail.com'

const links = [
    { label: 'Email', icon: 'mi:email', to: `mailto:${email}` },
    { label: 'LinkedIn', icon: 'i-simple-icons-linkedin', to: 'https://www.linkedin.com/in/jonasz-s%C3%B3jka/' },
    { label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/sonaszjojka' },
]

const { copy, isCopied } = useCopyToClipboard()

const resume = useAssetUrl('/jonasz_sojka_cv_2026.pdf')
</script>

<template>
    <div class="flex flex-wrap items-center gap-x-5 gap-y-3">
        <a :href="resume" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] print:hidden">
            <UIcon name="mi:document-download" class="size-4" />
            Résumé (PDF)
        </a>

        <div class="flex items-center gap-x-5">
            <NuxtLink v-for="link in links" :key="link.label" :to="link.to" target="_blank" rel="noopener"
                class="inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]">
                <UIcon :name="link.icon" class="size-4" />
                {{ link.label }}
            </NuxtLink>

            <button type="button" class="copy-field text-sm print:hidden" aria-label="Copy email address"
                @click="copy(email, 'hero-email')">
                <span class="copy-hint is-static" :class="{ 'is-copied': isCopied('hero-email') }">
                    {{ isCopied('hero-email') ? 'copied' : 'copy email' }}
                </span>
            </button>
        </div>
    </div>
</template>
