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
        slot: 'work' as const,
    },
    {
        label: 'Education',
        icon: 'mdi:university-outline',
        content: 'This is the education content.',
        slot: 'education' as const,
    }
]
)
</script>

<template>
    <UPageCard>
        <div class="flex flex-col">
            <UTabs :items="items">
                <template #work="{ item }">
                    <div class="pt-3"></div>
                    <WorkExperienceTimeline></WorkExperienceTimeline>
                </template>

                <template #education="{ item }">
                    <div class="pt-3"></div>
                    <EducationalExperienceTimeline></EducationalExperienceTimeline>
                </template>

            </UTabs>
            <div class="flex justify-end">
                <UButton label="Full details" trailing-icon="i-lucide-arrow-right" variant="ghost" color="neutral"
                    class="hover:bg-transparent hover:text-primary px-0"
                    to="https://www.linkedin.com/in/jonasz-s%C3%B3jka/details/experience/?locale=en-US"
                    target="_blank" />
            </div>
        </div>
    </UPageCard>
</template>