<script setup lang="ts">
const education = [
    {
        from: "2022.10",
        to: "2026.02",
        org: "Polish-Japanese Academy of Information Technology",
        role: "Bachelor of Engineering — Computer Science",
        summary: "Specialisation in databases and web applications. Final grade: 5.",
        tags: ["Databases", "Web applications", "Engineering thesis"],
        logo: "/pjatk_logo.png",
    },
]
</script>

<template>
    <div class="rail">
        <div v-for="entry in education" :key="entry.org" class="rail-row contents">
            <div class="rail-date">
                <div>{{ entry.from }}</div>
                <div class="hidden sm:block text-[var(--rule-strong)] leading-tight" aria-hidden="true">|</div>
                <div>{{ entry.to }}</div>
            </div>

            <div class="rail-body relative">
                <span class="rail-marker hidden sm:block" aria-hidden="true" />

                <div class="flex items-center gap-2.5">
                    <img :src="useAssetUrl(entry.logo)" :alt="`${entry.org} logo`" loading="lazy"
                        class="size-6 rounded-sm object-contain bg-white ring-1 ring-[var(--rule)]" />
                    <h3 class="font-semibold tracking-tight text-[var(--ink-strong)]">{{ entry.org }}</h3>
                </div>

                <p class="mt-1.5 font-medium text-[var(--ink)]">{{ entry.role }}</p>
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
