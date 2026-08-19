<script setup lang="ts">
defineProps<{
    sectionTitle?: string
    /** Kept for call-site compatibility; the eyebrow carries the label instead. */
    iconName?: string
}>()
</script>

<template>
    <div class="flex items-baseline gap-4 mb-6">
        <h2 class="eyebrow shrink-0">{{ sectionTitle }}</h2>
        <span class="h-px flex-1 bg-[var(--rule)]" aria-hidden="true" />
    </div>
</template>
