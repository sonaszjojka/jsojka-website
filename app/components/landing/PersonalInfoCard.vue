<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';
import SocialsAnchor from './SocialsAnchor.vue';

const links = ref<ButtonProps[]>([
    {
        label: 'Contact me',
        to: '/docs/getting-started',
        icon: 'mdi:email-outline'
    },
    {
        label: 'See my work',
        to: '/docs/getting-started/theme/design-system',
        color: 'neutral',
        variant: 'subtle',
        trailingIcon: 'i-lucide-arrow-right'
    }
])

</script>

<template>
    <UPageHero title="~Hey! I'm Jonasz" description="I create software that matches people needs."
        headline="Need developer?" :links="links" />

</template>
