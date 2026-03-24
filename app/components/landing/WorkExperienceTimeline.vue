<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui';

const items = ref<TimelineItem[]>([
    {
        date: "Nov 2025 - Present",
        title: "VHV Gruppe - Junior Software Engineer",
        description: "Integration with external services for PolicyCenter | Guidewire ",
        avatar: {
            src: "/vhv_gruppe_logo.jpeg"
            // loading: "lazy" as const
        },
        value: "jsd1"
    },
    {
        date: "Mar 2025 - Nov 2025",
        title: "Omecon - Business Analyst",
        description: "Deposit System for Kaucja.pl (Poland)",
        avatar: {
            src: "/omecon_pl_logo.jpeg"
            // loading: "lazy" as const
        },
        value: "ba2"
    },
    {
        date: "Jul 2024 - Dec 2024",
        title: "Bank Pekao S.A. - Junior Business Analyst",
        description: "Building AI/ML models using Cloud MS Azure and process optimization, customizing solutions to meet specific needs",
        avatar: {
            src: "/bank_pekaosa_logo.jpeg"
            // loading: "lazy" as const
        },
        value: "ba1"
    },

]
)

</script>

<template>
    <UTimeline :items="items" orientation="vertical"></UTimeline>
</template>
