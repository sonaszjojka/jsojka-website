<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
import AppSidebar from './AppSidebar.vue';

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Home',
        to: '/',
        active: route.path === '/'
    },
    {
        label: 'About',
        to: '/about',
        active: route.path.startsWith('/about')
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
        <UNavigationMenu v-bind:items="items"></UNavigationMenu>
        <template #right>
            <UUser name='Jonasz Sójka' description="Software Engineer" :avatar="{
                src: '/profile_picture_js.png'
            }" target="_blank" />
        </template>

        <AppSidebar></AppSidebar>
    </UHeader>
</template>
