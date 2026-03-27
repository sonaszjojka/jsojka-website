<script setup lang="ts">
const { sectionTitle, iconName } = defineProps({
    sectionTitle: String,
    iconName: String
})
</script>

<template>
    <h2 class="text-2xl font-bold flex items-center gap-2 mb-3">
        <UIcon :name="iconName" class=" size-8" />
        <span>{{ sectionTitle }}</span>
    </h2>
</template>