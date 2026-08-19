<script setup lang="ts">
import ProjectPosts from '~/components/projects/ProjectPosts.vue';
import SectionHeader from '~/components/landing/SectionHeader.vue';

useHead({ title: 'Projects — Jonasz Sójka' })
</script>

<template>
    <div class="pt-14 pb-24">
        <h1 class="mb-10 text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--ink-strong)]">
            Projects
        </h1>

        <SectionHeader section-title="All work" />
        <ProjectPosts />
    </div>
</template>
