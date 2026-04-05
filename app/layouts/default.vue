<script setup lang="ts">
import AnimatedBg from '~/components/shared/AnimatedBg.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AnimatedBg />

    <AppHeader class="relative z-10 w-full" style="isolation: isolate;" />

    <main class="flex-1 w-full">
      <UContainer class="relative z-10 px-4 sm:px-6 lg:px-8" style="isolation: isolate;">
        <slot />
      </UContainer>
    </main>

    <AppFooter class="relative z-10 w-full" style="isolation: isolate;" />
  </div>
</template>