<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui';

const items = ref<TimelineItem[]>([
    {
        date: "Oct 2022 - Feb 2026",
        title: "Bachelor’s of Engineering - Computer Science",
        description: "Polish-Japanese Academy of Information Technology. Grade: 5. Specialization in databases and web applications.",
        avatar: {
            src: "/pjatk_logo.png",
            loading: "lazy" as const,
        },
        value: "pjatkb",
        slot: "pjatkb" as const
    },
]
)

</script>

<template>
    <UTimeline :items="items" orientation="vertical"></UTimeline>
</template>
