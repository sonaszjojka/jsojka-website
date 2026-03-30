<script setup lang="ts">

const route = useRoute()

const { data: project } = await useAsyncData(`project-${route.params.slug}`, () =>
    queryCollection('content')
        .path(route.path)
        .first()
)
</script>

<template>
    <ContentRenderer v-if="project" :value="project" />
</template>
