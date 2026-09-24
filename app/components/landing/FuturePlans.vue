<script setup lang="ts">
import SealedTeaser from '~/components/landing/SealedTeaser.vue';
import RailDate from '~/components/shared/RailDate.vue';

const plan = [
    {
        from: '2022.10',
        title: 'Backend depth',
        detail: 'Design patterns, system design, cloud and DevOps fundamentals.',
        state: 'done' as const,
    },
    {
        from: '2025.10',
        title: 'Frontend breadth',
        detail: 'Angular through the engineering thesis, now Vue, Nuxt and Tailwind.',
        state: 'done' as const,
    },
    {
        from: '2026.10',
        to: '2028.07',
        title: "Master's — Information Management",
        detail: 'Specialisation in IT systems architecture, from October 2026 through July 2028.',
        state: 'current' as const,
    },
    {
        from: '2026.10',
        to: '2028.07',
        title: 'Hands-on projects',
        detail: 'Putting recent learning into practice: event-driven services on Kafka and Spring, containerised with Docker, deployed on AWS and shaped by system design principles, leading up to the master\'s thesis. The stack will grow as I keep learning.',
        state: 'current' as const,
        sealed: true,
    },
    {
        from: '2026.12',
        to: '2027.01',
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
                <RailDate :from="step.from" :to="step.to" />
            </div>

            <div class="rail-body relative">
                <span class="rail-marker" :class="`is-${step.state}`" aria-hidden="true" />

                <h3 class="font-semibold tracking-tight"
                    :class="step.state === 'planned' ? 'text-[var(--ink-muted)]' : 'text-[var(--ink-strong)]'">
                    {{ step.title }}
                    <span v-if="step.state !== 'done'" class="eyebrow ml-1.5"
                        :class="step.state === 'current' && 'text-[var(--accent)]!'">
                        {{ step.state === 'current' ? 'In progress' : 'Planned' }}
                    </span>
                </h3>
                <p class="mt-1 font-serif text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
                    {{ step.detail }}
                </p>
                <SealedTeaser v-if="step.sealed" class="mt-3" />
            </div>
        </li>
    </ol>
</template>
