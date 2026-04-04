<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui';

const links = ref<PageAnchor[]>([
    {
        label: 'Mail',
        icon: 'mi:email',
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
    <div class="flex items-center flex-col-reverse gap-2 md:flex md:flex-row">
        <UButton label="Resume" leading-icon="mi:document-download" variant="outline" color="neutral"
            class="hover:text-primary mr-5" to="/resume.png" target="_blank" />
        <UPageAnchors :links="links" :ui="{ list: 'flex flex-row gap-6' }" />
    </div>
</template>
