<script setup lang="ts">
import type { BlogPostProps } from '@nuxt/ui';
import { type PropType } from 'vue';

const props = defineProps({
    orientation: {
        type: String as PropType<'horizontal' | 'vertical'>,
        default: 'vertical'
    }
})

const posts = ref<BlogPostProps[]>([
    {
        title: 'Gamilife',
        description: 'Web-based task and habit management system with gamification, budgeting, and group collaboration features.',
        image: '/gamilife_logo.png',
        date: 'February 17, 2026',
        to: '/projects/1',
    }
])

</script>

<template>
    <UBlogPosts :orientation="props.orientation" :posts="posts">
    </UBlogPosts>
</template>
