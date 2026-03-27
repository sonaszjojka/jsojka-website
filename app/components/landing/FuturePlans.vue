<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui';


const items = ref<TimelineItem[]>([
    {
        date: '2022+',
        title: 'Backend Expertise',
        description: "Design patterns, Cloud basics, DevOps basics, System Design...",
        icon: 'eos-icons:master-outlined'
    },
    {
        date: '2025+',
        title: 'Frontend Skills Development',
        description: 'After writing my thesis with Angular, I am heading towards learning Vue, Nuxt and Tailwind.',
        icon: 'qlementine-icons:file-html-16'
    },
    {
        date: 'NOW',
        title: 'I am here!',
        description: "Currently learning Frontend and waiting for the beginning of University.",
        avatar: {
            src: '/profile_picture_js.png',
            // loading: "lazy" as const
        },

    },
    {
        date: '2026-2028',
        title: 'University: Architecture of IT Systems',
        description: "Beginning of Master's studies, Specialty, field of study: System Design, Architecture of IT Systems.",
        icon: 'ri:graduation-cap-line'
    },
])

let interval: any
const active = ref(0)

onMounted(() => {
    interval = setInterval(() => {
        active.value = (active.value + 1) % 3
    }, 3000)
})

onUnmounted(() => {
    clearInterval(interval)
})
</script>

<template>
    <UPageCard>
        <UTimeline orientation="horizontal" :default-value="active" :items="items" class="w-full p-3"
            :ui="{ indicator: 'size-10' }" />
    </UPageCard>
</template>