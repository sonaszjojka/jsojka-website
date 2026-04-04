<script setup lang="ts">
const cards = ref([
    {
        title: "Get to know me better",
        description: "You're not just hiring a specialist — you're choosing a person you'll collaborate with every day.",
        icon: 'bx:wink-smile',
        to: '/about',
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
        title: 'Contact me',
        description: "Let’s connect and explore how we can work together.",
        icon: 'hugeicons:contact-02',
        to: '/contact',
        variant: 'soft' as const,
        reverse: true,
    }
])
</script>

<template>
    <UPageGrid class="grid-cols-1 lg:grid-cols-2 gap-4">
        <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" />
    </UPageGrid>
</template>