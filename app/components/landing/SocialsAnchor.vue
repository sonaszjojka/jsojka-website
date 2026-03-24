<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui';

const links = ref<PageAnchor[]>([
    {
        label: 'Github',
        icon: 'i-simple-icons-github',
        to: '/roadmapa-2025.pdf',
    },
    {
        label: 'Linkedin',
        icon: 'i-simple-icons-linkedin',
        to: 'https://www.linkedin.com/in/jonasz-s%C3%B3jka/',
        target: '_blank'
    },
    {
        label: 'Github',
        icon: 'i-simple-icons-github',
        to: 'https://github.com/sonaszjojka',
        target: '_blank'
    },

])

</script>

<template>
    <UPageAnchors :links="links" />
</template>
