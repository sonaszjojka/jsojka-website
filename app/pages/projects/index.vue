<script setup lang="ts">
import SectionHeader from '~/components/landing/SectionHeader.vue';
import ProjectPosts from '~/components/projects/ProjectPosts.vue';


const route = useRoute()

</script>

<template>
    <!-- :value (edu)-->
    <SectionHeader section-title='Projects' class="p-10 items-center" />
    <ProjectPosts orientation="vertical" />
</template>