<script setup lang="ts">
import TechnologyIcon from './TechnologyIcon.vue';
</script>

<template>
    <div class="flex flex-col md:grid grid-cols-2 grid-rows-2">
        <UPageCard>
            <h3 class="text-center">Backend</h3>
            <div class="flex flex-rows gap-3 items-center justify-center">
                <TechnologyIcon iconName="devicon:java" iconTooltipText="Java (4y Exp, 1y Commercial)" />
                <TechnologyIcon iconName="logos:spring-icon"
                    iconTooltipText="Spring Framework (1y Exp, 1y Commercial)" />
                <TechnologyIcon iconName="devicon:postgresql" iconTooltipText="PostgreSQL (1y Exp)" />
                <TechnologyIcon iconName="logos:javascript" iconTooltipText="JavaScript (1y Exp)" />
                <TechnologyIcon iconName="logos:typescript-icon" iconTooltipText="TypeScript (1y Exp)" />
                <TechnologyIcon iconName="simple-icons:apachekafka" iconTooltipText="Kafka (1y Exp)" />
                <TechnologyIcon iconName="devicon:rabbitmq" iconTooltipText="RabbitMQ (1y Exp)" />
            </div>
        </UPageCard>

        <UPageCard>
            <h3 class="text-center">Frontend</h3>
            <div class="flex flex-rows gap-3 items-center justify-center">
                <TechnologyIcon iconName="logos:vue" iconTooltipText="Vue (1y Exp)" />
                <TechnologyIcon iconName="devicon:angular" iconTooltipText="Angular (1y Exp)" />
                <TechnologyIcon iconName="devicon:tailwindcss" iconTooltipText="Tailwind (1y Exp)" />
                <TechnologyIcon iconName="devicon:nuxt" iconTooltipText="Nuxt (1y Exp)" />
            </div>
        </UPageCard>

        <UPageCard class="overflow-hidden justify-center align-center md:col-span-2">
            <h3 class="text-center">Other</h3>
            <div class="flex flex-rows flex-wrap gap-3 items-center justify-center">
                <TechnologyIcon iconName="logos:docker-icon" iconTooltipText="Docker (2y Exp)" />
                <TechnologyIcon iconName="logos:visual-studio-code" iconTooltipText="Visual Studio Code (3y Exp)" />
                <TechnologyIcon iconName="logos:jetbrains" iconTooltipText="JetBrains (4y Exp)" />
                <TechnologyIcon iconName="logos:git-icon" iconTooltipText="Git (3y Exp)" />
                <TechnologyIcon iconName="streamline-logos:github-logo-2-solid" iconTooltipText="GitHub (3y Exp)" />
                <TechnologyIcon iconName="logos:bitbucket" iconTooltipText="Bitbucket (1y Exp, 1y Commercial)" />
                <TechnologyIcon iconName="devicon:microsoftsqlserver"
                    iconTooltipText="Microsoft SQL Server (3y Exp, 1y Commercial)" />
                <TechnologyIcon iconName="devicon:postman" iconTooltipText="Postman (1y Exp, 1y Exp)" />
                <TechnologyIcon iconName="devicon:jira" iconTooltipText="Jira (3y Exp, 3y Commercial)" />
                <TechnologyIcon iconName="devicon:confluence" iconTooltipText="Confluence (3y Exp, 3y Commercial)" />
            </div>
        </UPageCard>
    </div>
</template>