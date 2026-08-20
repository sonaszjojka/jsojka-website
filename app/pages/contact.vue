<script setup lang="ts">
useHead({ title: 'Contact — Jonasz Sójka' })

const channels = [
    {
        label: 'Email',
        value: 'jonasz.sojkaa@gmail.com',
        to: 'mailto:jonasz.sojkaa@gmail.com',
        icon: 'mi:email',
        copyValue: 'jonasz.sojkaa@gmail.com',
    },
    {
        label: 'LinkedIn',
        value: 'jonasz-sójka',
        to: 'https://www.linkedin.com/in/jonasz-s%C3%B3jka/',
        icon: 'i-simple-icons-linkedin',
        copyValue: 'https://www.linkedin.com/in/jonasz-s%C3%B3jka/',
    },
    {
        label: 'GitHub',
        value: 'sonaszjojka',
        to: 'https://github.com/sonaszjojka',
        icon: 'i-simple-icons-github',
        copyValue: 'https://github.com/sonaszjojka',
    },
]

const { copy, isCopied } = useCopyToClipboard()
</script>

<template>
    <div class="pt-14 pb-24">
        <h1 class="text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--ink-strong)]">
            Get in touch
        </h1>

        <p class="mt-4 max-w-[48ch] font-serif text-[1.0625rem] leading-relaxed text-[var(--ink-muted)]">
            Whether it's a role, a project worth building, or a problem you'd rather
            talk through than write down — I read everything that arrives.
        </p>

        <div class="mt-10 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            <div v-for="channel in channels" :key="channel.label"
                class="grid items-center gap-1 py-4 sm:grid-cols-[7.5rem_1fr_auto] sm:gap-0">
                <span class="eyebrow">{{ channel.label }}</span>

                <NuxtLink :to="channel.to" target="_blank" rel="noopener"
                    class="group flex items-center gap-2.5 sm:pl-6">
                    <UIcon :name="channel.icon" class="size-4 shrink-0 text-[var(--ink-faint)]" />
                    <span class="text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                        {{ channel.value }}
                    </span>
                    <UIcon name="akar-icons:link-out"
                        class="hidden size-3.5 text-[var(--ink-faint)] transition-colors group-hover:text-[var(--accent)] sm:block print:hidden" />
                </NuxtLink>

                <button type="button" class="copy-field justify-self-start text-sm sm:justify-self-end print:hidden"
                    :aria-label="`Copy ${channel.label}`" @click="copy(channel.copyValue, channel.label)">
                    <span class="copy-hint is-static" :class="{ 'is-copied': isCopied(channel.label) }">
                        {{ isCopied(channel.label) ? 'copied' : 'copy' }}
                    </span>
                </button>
            </div>
        </div>

        <p class="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--ink-faint)]">
            Open to collaboration · Fast response
        </p>
    </div>
</template>
