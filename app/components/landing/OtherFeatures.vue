<script setup lang="ts">
const notes = [
    {
        title: 'Reading widely',
        body: 'Learning across disciplines is what keeps my perspective — and my solutions — from narrowing.',
    },
    {
        title: 'The gym, most mornings',
        body: 'Part routine, part discipline practice. It clears my head before the hard problems start.',
    },
    {
        title: 'Open to collaboration',
        body: "Side projects, contract work, or a conversation about something you're building.",
        to: '/contact',
        cta: 'Get in touch',
    },
]
</script>

<template>
    <div class="grid gap-x-8 gap-y-6 sm:grid-cols-3">
        <div v-for="note in notes" :key="note.title" class="border-t border-[var(--rule)] pt-4">
            <h3 class="text-sm font-semibold tracking-tight text-[var(--ink-strong)]">{{ note.title }}</h3>
            <p class="mt-2 font-serif text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">{{ note.body }}</p>
            <NuxtLink v-if="note.to" :to="note.to"
                class="mt-3 inline-block font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--accent)] hover:text-[var(--accent-hover)]">
                {{ note.cta }} →
            </NuxtLink>
        </div>
    </div>
</template>
