<script setup lang="ts">
const cards = ref([
    {
        title: "Get to know me better",
        description: "You're not just hiring a specialist — you're choosing a person you'll collaborate with every day. Contact me to see if we're a good fit.",
        icon: 'bx:wink-smile',
        to: '/contact',
        variant: 'soft' as const,
    },
    {
        title: 'I love reading books!',
        description: 'I believe that learning across different disciplines expands perspective and fuels creativity.',
        icon: 'tabler:book',
    },
    {
        title: 'Gym',
        icon: 'iconoir:gym',
        description: 'Going to the gym is part of my routine to stay healthy, clear my mind, and build discipline over time.',
    },
    {
        title: "Other collaborations",
        description: "I'm open to various forms of collaboration — feel free to reach out if you have something in mind.",
        icon: 'carbon:collaborate',
        to: '/contact',
        variant: 'soft' as const,
    }
])
</script>

<template>
    <UPageGrid class="grid-cols-1 lg:grid-cols-2 gap-4">
        <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" />
    </UPageGrid>
</template>