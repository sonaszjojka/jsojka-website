<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui';
import ExperienceTimeline from './WorkExperienceTimeline.vue';
import WorkExperienceTimeline from './WorkExperienceTimeline.vue';
import EducationalExperienceTimeline from './EducationalExperienceTimeline.vue';

const items = ref<TabsItem[]>([
    {
        label: 'Work',
        icon: 'mdi:work-outline',
        content: 'This is the work content.',
        slot: 'work' as const
    },
    {
        label: 'Education',
        icon: 'mdi:university-outline',
        content: 'This is the education content.',
        slot: 'education' as const
    }
]
)
</script>

<template>
    <UTabs :items="items">

        <template #work="{ item }">
            <WorkExperienceTimeline></WorkExperienceTimeline>
        </template>

        <template #education="{ item }">
            <EducationalExperienceTimeline></EducationalExperienceTimeline>
        </template>

    </UTabs>
</template>