<script setup lang="ts">
const roles = [
    {
        from: "2025.11",
        to: "present",
        org: "VHV Gruppe",
        role: "Junior Software Engineer",
        summary: "REST and SOAP integrations in Java and Spring Boot, insurance features on Guidewire, and batch work across 5M+ records.",
        stack: ["Java", "Spring Boot", "REST & SOAP", "Guidewire", "Gosu", "PostgreSQL", "AWS"],
        logo: "/vhv_gruppe_logo.jpeg",
    },
    {
        from: "2025.03",
        to: "2025.11",
        org: "Omecon",
        role: "IT Business Analyst",
        summary: "Nationwide deposit-return system for Kaucja.pl — requirements modelled in UML, delivery run as Kanban.",
        stack: ["UML", "Enterprise Architect", "Jira", "Confluence", "GitLab"],
        logo: "/omecon_pl_logo.jpeg",
    },
    {
        from: "2024.07",
        to: "2024.12",
        org: "Bank Pekao S.A.",
        role: "Junior Business Analyst",
        summary: "AI/ML models on Azure and process optimisation for internal teams.",
        stack: ["Microsoft Azure", "Excel", "Jira", "Confluence"],
        logo: "/bank_pekaosa_logo.jpeg",
    },
]
</script>

<template>
    <div class="rail">
        <div v-for="role in roles" :key="role.org" class="rail-row contents">
            <div class="rail-date">
                <div>{{ role.from }}</div>
                <div class="hidden sm:block text-[var(--rule-strong)] leading-tight" aria-hidden="true">|</div>
                <div>{{ role.to }}</div>
            </div>

            <div class="rail-body relative">
                <span class="rail-marker hidden sm:block" aria-hidden="true" />

                <div class="flex items-center gap-2.5">
                    <img :src="useAssetUrl(role.logo)" :alt="`${role.org} logo`" loading="lazy"
                        class="size-6 rounded-sm object-contain bg-white ring-1 ring-[var(--rule)]" />
                    <h3 class="font-semibold tracking-tight text-[var(--ink-strong)]">{{ role.org }}</h3>
                </div>

                <p class="mt-1.5 font-medium text-[var(--ink)]">{{ role.role }}</p>
                <p class="mt-1 font-serif text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
                    {{ role.summary }}
                </p>

                <ul class="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                    <li v-for="tech in role.stack" :key="tech"
                        class="font-mono text-[0.6875rem] text-[var(--ink-faint)] before:mr-3 before:content-['·'] first:before:mr-0 first:before:content-['']">
                        {{ tech }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
