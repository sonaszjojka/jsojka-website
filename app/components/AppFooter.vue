<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
    {
        label: 'Figma Kit',
        to: 'https://go.nuxt.com/figma-ui',
        target: '_blank'
    },
    {
        label: 'Playground',
        to: 'https://stackblitz.com/edit/nuxt-ui',
        target: '_blank'
    },
    {
        label: 'Releases',
        to: 'https://github.com/nuxt/ui/releases',
        target: '_blank'
    }
]

</script>

<template>
    <UFooter>
        <template #left>
            <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
        </template>

        <p>
            Created by Jonasz Sójka
        </p>

        <template #right>
            <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost"
                to="https://www.linkedin.com/in/jonasz-s%C3%B3jka/" target="_blank" aria-label="Linkedin" />
            <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/nuxt/nuxt"
                target="_blank" aria-label="GitHub" />
        </template>
    </UFooter>
</template>
