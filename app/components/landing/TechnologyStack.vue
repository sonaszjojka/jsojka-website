<script setup lang="ts">
import TechnologyIcon from './TechnologyIcon.vue';

const currentYear = new Date().getFullYear();

const getExp = (startYear: number) => {
    return Math.ceil(currentYear - startYear);
};

const getTooltip = (name: string, startYear: number, commercialStartYear?: number) => {
    const exp = getExp(startYear);

    if (commercialStartYear) {
        const commercialExp = getExp(commercialStartYear);
        return `${name} (${exp}y Exp, ${commercialExp}y Commercial)`;
    }

    return `${name} (${exp}y Exp)`;
};
</script>

<template>
    <div class="flex flex-col md:grid grid-cols-2 grid-rows-2">
        <UPageCard>
            <h3 class="text-center">Backend</h3>
            <div class="flex flex-rows gap-3 items-center justify-center">
                <TechnologyIcon iconName="devicon:java" :iconTooltipText="getTooltip('Java', 2022, 2025)" />
                <TechnologyIcon iconName="logos:spring-icon"
                    :iconTooltipText="getTooltip('Spring Framework', 2025, 2025)" />
                <TechnologyIcon iconName="devicon:postgresql" :iconTooltipText="getTooltip('PostgreSQL', 2025)" />
                <TechnologyIcon iconName="simple-icons:apachekafka" :iconTooltipText="getTooltip('Kafka', 2025)" />
                <TechnologyIcon iconName="devicon:rabbitmq" :iconTooltipText="getTooltip('RabbitMQ', 2025)" />
                <TechnologyIcon iconName="file-icons:gosu" :iconTooltipText="getTooltip('Gosu | Guidewire', 2025)" />
            </div>
        </UPageCard>

        <UPageCard>
            <h3 class="text-center">Frontend</h3>
            <div class="flex flex-rows gap-3 items-center justify-center">
                <TechnologyIcon iconName="logos:vue" :iconTooltipText="getTooltip('Vue', 2025)" />
                <TechnologyIcon iconName="devicon:angular" :iconTooltipText="getTooltip('Angular', 2025)" />
                <TechnologyIcon iconName="logos:typescript-icon" :iconTooltipText="getTooltip('TypeScript', 2025)" />
                <TechnologyIcon iconName="devicon:tailwindcss" :iconTooltipText="getTooltip('Tailwind', 2025)" />
                <TechnologyIcon iconName="devicon:nuxt" :iconTooltipText="getTooltip('Nuxt', 2025)" />
                <TechnologyIcon iconName="logos:javascript" :iconTooltipText="getTooltip('JavaScript', 2025)" />
            </div>
        </UPageCard>

        <UPageCard class="overflow-hidden justify-center align-center md:col-span-2">
            <h3 class="text-center">Other</h3>
            <div class="flex flex-rows flex-wrap gap-3 items-center justify-center">
                <TechnologyIcon iconName="logos:docker-icon" :iconTooltipText="getTooltip('Docker', 2024)" />
                <TechnologyIcon iconName="logos:visual-studio-code"
                    :iconTooltipText="getTooltip('Visual Studio Code', 2023)" />
                <TechnologyIcon iconName="logos:jetbrains" :iconTooltipText="getTooltip('JetBrains', 2022, 2025)" />
                <TechnologyIcon iconName="logos:git-icon" :iconTooltipText="getTooltip('Git', 2023, 2025)" />
                <TechnologyIcon iconName="streamline-logos:github-logo-2-solid"
                    :iconTooltipText="getTooltip('GitHub', 2023)" />
                <TechnologyIcon iconName="logos:bitbucket" :iconTooltipText="getTooltip('Bitbucket', 2025, 2025)" />
                <TechnologyIcon iconName="devicon:microsoftsqlserver"
                    :iconTooltipText="getTooltip('Microsoft SQL Server', 2023, 2025)" />
                <TechnologyIcon iconName="devicon:postman" :iconTooltipText="getTooltip('Postman', 2025, 2025)" />
                <TechnologyIcon iconName="devicon:jira" :iconTooltipText="getTooltip('Jira', 2023, 2023)" />
                <TechnologyIcon iconName="devicon:confluence" :iconTooltipText="getTooltip('Confluence', 2023, 2023)" />
            </div>
        </UPageCard>
    </div>
</template>