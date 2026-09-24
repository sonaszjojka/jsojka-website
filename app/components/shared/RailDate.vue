<script setup lang="ts">
// The date column of a rail: a single month, or a range stacked from over to.
defineProps<{
    from: string
    to?: string
}>()
</script>

<template>
    <div>{{ from }}</div>
    <template v-if="to">
        <div class="hidden sm:block text-[var(--rule-strong)] leading-tight" aria-hidden="true">|</div>
        <div><span class="sm:hidden" aria-hidden="true">— </span>{{ to }}</div>
    </template>
</template>
