<script setup lang="ts">
const currentYear = new Date().getFullYear()

type Tech = { name: string; icon: string; since: number; commercialSince?: number }

const groups: { label: string; items: Tech[] }[] = [
    {
        label: 'Backend',
        items: [
            { name: 'Java', icon: 'devicon:java', since: 2022, commercialSince: 2025 },
            { name: 'Spring Boot', icon: 'logos:spring-icon', since: 2025, commercialSince: 2025 },
            { name: 'Gosu / Guidewire', icon: 'file-icons:gosu', since: 2025, commercialSince: 2025 },
            { name: 'PostgreSQL', icon: 'devicon:postgresql', since: 2025 },
            { name: 'Kafka', icon: 'simple-icons:apachekafka', since: 2025 },
            { name: 'RabbitMQ', icon: 'devicon:rabbitmq', since: 2025 },
        ],
    },
    {
        label: 'Frontend',
        items: [
            { name: 'TypeScript', icon: 'logos:typescript-icon', since: 2025 },
            { name: 'Angular', icon: 'devicon:angular', since: 2025 },
            { name: 'Vue', icon: 'logos:vue', since: 2025 },
            { name: 'Nuxt', icon: 'devicon:nuxt', since: 2025 },
            { name: 'Tailwind', icon: 'devicon:tailwindcss', since: 2025 },
            { name: 'JavaScript', icon: 'logos:javascript', since: 2025 },
        ],
    },
    {
        label: 'Tooling',
        items: [
            { name: 'Docker', icon: 'logos:docker-icon', since: 2024 },
            { name: 'Git', icon: 'logos:git-icon', since: 2023, commercialSince: 2025 },
            { name: 'SQL Server', icon: 'devicon:microsoftsqlserver', since: 2023, commercialSince: 2025 },
            { name: 'Postman', icon: 'devicon:postman', since: 2025, commercialSince: 2025 },
            { name: 'Jira', icon: 'devicon:jira', since: 2023, commercialSince: 2023 },
            { name: 'Confluence', icon: 'devicon:confluence', since: 2023, commercialSince: 2023 },
        ],
    },
]

// Years were previously hidden behind a hover tooltip — the one number a
// recruiter actually scans for, so it now sits on the page.
const years = (t: Tech) => {
    const total = Math.max(1, currentYear - t.since)
    return t.commercialSince
        ? `${total}y · ${Math.max(1, currentYear - t.commercialSince)}y comm.`
        : `${total}y`
}
</script>

<template>
    <div class="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
        <div v-for="group in groups" :key="group.label" class="grid gap-3 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-0">
            <p class="eyebrow sm:pt-1.5">{{ group.label }}</p>

            <ul class="grid grid-cols-1 gap-x-6 gap-y-2.5 xs:grid-cols-2 sm:pl-6">
                <li v-for="tech in group.items" :key="tech.name" class="flex items-center gap-2.5">
                    <UIcon :name="tech.icon" class="size-4 shrink-0 opacity-90" />
                    <span class="text-sm text-[var(--ink)]">{{ tech.name }}</span>
                    <span class="ml-auto font-mono text-[0.6875rem] tabular-nums text-[var(--ink-faint)]">
                        {{ years(tech) }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
