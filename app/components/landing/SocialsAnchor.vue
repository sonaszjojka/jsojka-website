<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui';

const links = ref<PageAnchor[]>([
    {
        label: 'Mail',
        icon: 'material-symbols:mail',
        to: 'mailto:jonasz.sojkaa@gmail.com',
    },
    {
        label: 'Linkedin',
        icon: 'i-simple-icons-linkedin',
        to: 'https://www.linkedin.com/in/jonasz-s%C3%B3jka/',
    },
    {
        label: 'Github',
        icon: 'i-simple-icons-github',
        to: 'https://github.com/sonaszjojka',
    },

])

</script>

<template>
    <div class="flex flex-row">
        <UButton label="Resume" leading-icon="mdi:file-download-outline" variant="outline" color="neutral"
            class="hover:text-primary mr-6" to="/resume.png" target="_blank" />
        <UPageAnchors :links="links" :ui="{ list: 'flex flex-row gap-6' }" />
    </div>
</template>
