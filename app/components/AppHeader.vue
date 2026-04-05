<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Home',
        to: '/',
        active: route.path === '/'
    },
    {
        label: 'Projects',
        to: '/projects',
        active: route.path.startsWith('/projects')
    },
    {
        label: 'Contact',
        to: '/contact',
        active: route.path.startsWith('/contact')
    },
])

const title = computed(() => "~" + route.path)
</script>

<template>
    <UHeader :title="title">
        <!-- desktop -->
        <UNavigationMenu :items="items" />

        <template #right>
            <UUser name='Jonasz Sójka' description="Software Engineer" :avatar="{ src: '/profile_picture_js.png' }"
                target="_blank" />
        </template>

        <template #body>
            <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>
</template>