<script setup lang="ts">
const plan = [
    {
        period: '2022+',
        title: 'Backend depth',
        detail: 'Design patterns, system design, cloud and DevOps fundamentals.',
        state: 'done' as const,
    },
    {
        period: '2025+',
        title: 'Frontend breadth',
        detail: 'Angular through the engineering thesis, now Vue, Nuxt and Tailwind.',
        state: 'done' as const,
    },
    {
        period: '2026—2028',
        title: "Master's — Information Management",
        detail: 'Specialisation in IT systems architecture, from October 2026 through July 2028.',
        state: 'current' as const,
    },
    {
        period: '2026.10—2028',
        title: 'Hands-on projects',
        detail: 'Putting recent learning into practice: event-driven services on Kafka and Spring, containerised with Docker, deployed on AWS and shaped by system design principles, leading up to the master\'s thesis. The stack will grow as I keep learning. Details coming soon.',
        state: 'current' as const,
    },
    {
        period: '2026.12—2027.01',
        title: 'AWS Certified Solutions Architect — Associate',
        detail: 'Estimated for December 2026 or January 2027.',
        state: 'planned' as const,
    },
]
</script>

<template>
    <ol class="rail">
        <li v-for="step in plan" :key="step.title" class="rail-row contents">
            <div class="rail-date" :class="step.state === 'current' && 'text-[var(--accent)]! font-medium'">
                {{ step.period }}
            </div>

            <div class="rail-body relative">
                <span class="rail-marker hidden sm:block" :class="step.state === 'current'
                    ? 'bg-[var(--accent)]! border-[var(--accent)]!'
                    : 'bg-[var(--paper)]! border-[var(--rule-strong)]!'" aria-hidden="true" />

                <h3 class="font-semibold tracking-tight"
                    :class="step.state === 'planned' ? 'text-[var(--ink-muted)]' : 'text-[var(--ink-strong)]'">
                    {{ step.title }}
                </h3>
                <p class="mt-1 font-serif text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
                    {{ step.detail }}
                </p>
            </div>
        </li>
    </ol>
</template>
