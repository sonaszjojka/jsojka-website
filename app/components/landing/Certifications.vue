<script setup lang="ts">
// Ordered by weight in the job market rather than by date: a proctored vendor
// exam first, then the domain credentials that match the work he actually
// does, then course completions.
const certs = [
    {
        date: '2026.07',
        note: 'valid to 2029.07',
        name: 'AWS Cloud Practitioner (CLF-C02)',
        issuer: 'Amazon Web Services',
        credential: 'd3b88d60dacb4a19b481df96b8482955',
    },
    {
        date: '2025.11',
        name: 'InsuranceSuite Developer Fundamentals',
        issuer: 'Guidewire Software',
    },
    {
        date: '2025.11',
        name: 'PolicyCenter Configuration',
        issuer: 'Guidewire Software',
    },
]

// Ten short courses; listed in full but grouped, so they read as a body of
// study rather than ten separate credentials.
const courses = {
    date: '2026.07',
    note: '— 2026.08',
    issuer: 'Anthropic',
    items: [
        'Building with the Claude API',
        'Model Context Protocol: Advanced Topics',
        'Claude Code in Action',
        'Introduction to Model Context Protocol',
        'Introduction to subagents',
        'Introduction to agent skills',
        'Introduction to Claude Cowork',
        'Claude Platform 101',
        'Claude Code 101',
        'Claude 101',
    ],
}
</script>

<template>
    <div class="rail">
        <div v-for="cert in certs" :key="cert.name" class="rail-row contents">
            <div class="rail-date">
                <div>{{ cert.date }}</div>
                <div v-if="cert.note" class="text-[0.625rem] leading-tight">{{ cert.note }}</div>
            </div>

            <div class="rail-body relative">
                <span class="rail-marker hidden sm:block" aria-hidden="true" />

                <h3 class="font-semibold tracking-tight text-[var(--ink-strong)]">{{ cert.name }}</h3>
                <p class="mt-1 text-[0.9375rem] text-[var(--ink-muted)]">{{ cert.issuer }}</p>
                <p v-if="cert.credential" class="mt-1.5 font-mono text-[0.6875rem] break-all text-[var(--ink-faint)]">
                    ID {{ cert.credential }}
                </p>
            </div>
        </div>

        <div class="rail-row contents">
            <div class="rail-date">
                <div>{{ courses.date }}</div>
                <div class="text-[0.625rem] leading-tight">{{ courses.note }}</div>
            </div>

            <div class="rail-body relative">
                <span class="rail-marker hidden sm:block" aria-hidden="true" />

                <h3 class="font-semibold tracking-tight text-[var(--ink-strong)]">
                    Claude &amp; agentic development
                    <span class="eyebrow ml-1.5">{{ courses.items.length }} courses</span>
                </h3>
                <p class="mt-1 text-[0.9375rem] text-[var(--ink-muted)]">{{ courses.issuer }}</p>

                <ul class="mt-2.5 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    <li v-for="item in courses.items" :key="item"
                        class="font-mono text-[0.6875rem] text-[var(--ink-faint)]">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
