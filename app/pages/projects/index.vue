<script setup lang="ts">
import SectionHeader from '~/components/landing/SectionHeader.vue';


const route = useRoute()

// const { data: project } = await useAsyncData(route.path, () =>
//     queryCollection('content')
//         .path(route.path)
//         .first()
// )
</script>

<template>
    <!-- :value (edu)-->
    <SectionHeader section-title='My Projects'>
    </SectionHeader>
</template>