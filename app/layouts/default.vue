<script setup lang="ts">
import AnimatedBg from '~/components/shared/AnimatedBg.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AnimatedBg />
    <AppHeader />

    <main class="flex-1">
      <UContainer style="isolation: isolate;" class="relative z-10">
        <slot />
      </UContainer>
    </main>

    <AppFooter style="isolation: isolate;" class="relative z-10" />

  </div>
</template>