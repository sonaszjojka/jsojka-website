<script setup lang="ts">
import RailDate from '~/components/shared/RailDate.vue';

const education = [
    {
        from: "2026.10",
        to: "2028.07",
        org: "Polish-Japanese Academy of Information Technology",
        role: "Master's degree — Information Management",
        summary: "Specialisation in IT systems architecture.",
        tags: ["IT systems architecture", "System design"],
        logo: "/pjatk_logo.png",
        current: true,
    },
    {
        from: "2022.10",
        to: "2026.02",
        org: "Polish-Japanese Academy of Information Technology",
        role: "Bachelor of Engineering — Computer Science",
        summary: "Specialisation in databases. Diploma grade: 5.0/5.0.",
        tags: ["Databases", "Engineering thesis", "Web applications"],
        logo: "/pjatk_logo.png",
        current: false,
    },
]
</script>

<template>
    <div class="rail">
        <div v-for="entry in education" :key="entry.org" class="rail-row contents">
            <div class="rail-date">
                <RailDate :from="entry.from" :to="entry.to" />
            </div>

            <div class="rail-body relative">
                <span class="rail-marker" :class="entry.current ? 'is-current' : 'is-done'"
                    aria-hidden="true" />

                <div class="flex items-center gap-2.5">
                    <img :src="useAssetUrl(entry.logo)" :alt="`${entry.org} logo`" loading="lazy"
                        class="size-6 rounded-sm object-contain bg-white ring-1 ring-[var(--rule)]" />
                    <h3 class="font-semibold tracking-tight text-[var(--ink-strong)]">{{ entry.org }}</h3>
                </div>

                <p class="mt-1.5 flex flex-wrap items-baseline gap-x-2 font-medium text-[var(--ink)]">
                    {{ entry.role }}
                    <span v-if="entry.current" class="eyebrow text-[var(--accent)]!">In progress</span>
                </p>
                <p class="mt-1 font-serif text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
                    {{ entry.summary }}
                </p>

                <ul class="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                    <li v-for="tag in entry.tags" :key="tag"
                        class="font-mono text-[0.6875rem] text-[var(--ink-faint)] before:mr-3 before:content-['·'] first:before:mr-0 first:before:content-['']">
                        {{ tag }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
