<script setup lang="ts">

const route = useRoute()

const { data: project } = await useAsyncData(`project-${route.params.slug}`, () =>
    queryCollection('content')
        .path(route.path)
        .first()
)
</script>

<template>
    <UCard class="flex m-20 p-20 min-w-xl" variant="subtle">
        <ContentRenderer v-if="project" :value="project" />
    </UCard>
</template>
