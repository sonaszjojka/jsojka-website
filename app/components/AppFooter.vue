<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

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
            <UButton icon="material-symbols:mail" color="neutral" variant="ghost" to="mailto:jonasz.sojkaa@gmail.com"
                target="_blank" aria-label="E-mail" />
            <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost"
                to="https://www.linkedin.com/in/jonasz-s%C3%B3jka/" target="_blank" aria-label="Linkedin" />
            <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/sonaszjojka"
                target="_blank" aria-label="GitHub" />
        </template>
    </UFooter>
</template>
