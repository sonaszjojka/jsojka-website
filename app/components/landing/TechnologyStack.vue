<script setup lang="ts">
// Frozen at prerender and carried through the payload. Reading the clock on the
// client too would drift from the baked HTML and trip a hydration mismatch.
const asOf = useState('stack-as-of', () => Date.now())

type Tech = { name: string; icon: string; since?: string; commercialSince?: string }

const groups: { label: string; items: Tech[] }[] = [
    {
        label: 'Backend',
        items: [
            { name: 'Java', icon: 'devicon:java', since: '2022.10', commercialSince: '2025.11' },
            { name: 'Spring Boot', icon: 'logos:spring-icon', since: '2025.10', commercialSince: '2025.11' },
            { name: 'Gosu / Guidewire', icon: 'file-icons:gosu', since: '2025.11', commercialSince: '2025.11' },
            { name: 'REST & SOAP', icon: 'lucide:webhook', since: '2025.10', commercialSince: '2025.11' },
            { name: 'Hibernate / JPA', icon: 'devicon:hibernate', since: '2025.10' },
            { name: 'JUnit 5 / Mockito', icon: 'devicon:junit', since: '2025.10' },
            { name: 'RabbitMQ', icon: 'devicon:rabbitmq', since: '2025.10' },
            { name: 'Kafka', icon: 'simple-icons:apachekafka', since: '2025.10' },
            { name: 'Python', icon: 'devicon:python', since: '2023.10' },
        ],
    },
    {
        label: 'Data & cloud',
        items: [
            { name: 'PostgreSQL', icon: 'devicon:postgresql', since: '2025.10' },
            { name: 'SQL Server', icon: 'devicon:microsoftsqlserver', since: '2023.10', commercialSince: '2025.11' },
            { name: 'AWS', icon: 'simple-icons:amazonwebservices', since: '2025.11', commercialSince: '2025.11' },
        ],
    },
    {
        label: 'Frontend',
        items: [
            { name: 'TypeScript', icon: 'logos:typescript-icon', since: '2025.10' },
            { name: 'Angular', icon: 'devicon:angular', since: '2025.10' },
            { name: 'JavaScript', icon: 'logos:javascript', since: '2025.10' },
            { name: 'Vue', icon: 'logos:vue', since: '2026.03' },
            { name: 'Nuxt', icon: 'devicon:nuxt', since: '2026.03' },
            { name: 'Tailwind', icon: 'devicon:tailwindcss', since: '2026.03' },
        ],
    },
    {
        label: 'Tooling',
        items: [
            { name: 'Git', icon: 'logos:git-icon', since: '2023.10', commercialSince: '2025.11' },
            { name: 'Docker', icon: 'logos:docker-icon', since: '2024.10' },
            { name: 'Maven', icon: 'devicon:maven', since: '2025.10', commercialSince: '2025.11' },
            { name: 'IntelliJ IDEA', icon: 'devicon:intellij', since: '2022.10' },
            { name: 'Postman', icon: 'devicon:postman', since: '2025.10', commercialSince: '2025.11' },
            { name: 'Bitbucket', icon: 'devicon:bitbucket', since: '2025.11', commercialSince: '2025.11' },
            { name: 'Jira', icon: 'devicon:jira', since: '2024.07', commercialSince: '2024.07' },
            { name: 'Confluence', icon: 'devicon:confluence', since: '2024.07', commercialSince: '2024.07' },
            { name: 'Claude Code', icon: 'simple-icons:claude' },
            { name: 'Copilot CLI', icon: 'simple-icons:githubcopilot' },
        ],
    },
]

// Counted in months, not calendar years: subtracting years alone rounds Java's
// 3 years 10 months up to 4 and contradicts the CV.
const yearsSince = (yearMonth: string) => {
    const [year, month] = yearMonth.split('.').map(Number)
    const now = new Date(asOf.value)
    const months = (now.getFullYear() - year!) * 12 + (now.getMonth() + 1 - month!)
    return Math.max(1, Math.floor(months / 12))
}

const years = (t: Tech) => {
    if (!t.since) return 'new'
    return t.commercialSince
        ? `${yearsSince(t.since)}y · ${yearsSince(t.commercialSince)}y comm.`
        : `${yearsSince(t.since)}y`
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
