<script setup lang="ts">

const { iconName, iconTooltipText } = defineProps({
    iconName: String,
    iconTooltipText: String
})
</script>

<template>
    <UTooltip :text="iconTooltipText" :content="{ side: 'top' }" :delay-duration="100" :ui="{
        content: 'bg-primary text-black px-3 py-2  text-sm'
    }">
        <UIcon :name="iconName" class="size-10" />
    </UTooltip>
</template>
