<script setup lang="ts">
const projects = [
    {
        id: '1',
        period: '2025.10 — 2026.02',
        title: 'GamiLife',
        kind: 'Engineering thesis',
        summary: 'Task and habit management for groups, with gamification, shared budgets and collaboration built in.',
        stack: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL'],
        image: '/gamilife_logo.png',
        to: '/projects/1',
    },
]
</script>

<template>
    <div class="rail">
        <NuxtLink v-for="project in projects" :key="project.id" :to="project.to" class="rail-row group contents">
            <div class="rail-date">{{ project.period }}</div>

            <div class="rail-body relative">
                <span class="rail-marker hidden sm:block" aria-hidden="true" />

                <div class="flex items-start gap-4">
                    <img :src="useAssetUrl(project.image)" :alt="`${project.title} logo`" loading="lazy"
                        class="size-12 shrink-0 rounded-sm object-cover ring-1 ring-[var(--rule)]" />

                    <div class="min-w-0">
                        <div class="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                            <h3
                                class="font-semibold tracking-tight text-[var(--ink-strong)] transition-colors group-hover:text-[var(--accent)]">
                                {{ project.title }}
                            </h3>
                            <span class="eyebrow">{{ project.kind }}</span>
                        </div>

                        <p class="mt-1.5 font-serif text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
                            {{ project.summary }}
                        </p>

                        <ul class="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                            <li v-for="tech in project.stack" :key="tech"
                                class="font-mono text-[0.6875rem] text-[var(--ink-faint)] before:mr-3 before:content-['·'] first:before:mr-0 first:before:content-['']">
                                {{ tech }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
