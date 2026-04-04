<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col">

    <AppHeader />

    <main class="flex-1">
      <UContainer>
        <slot />
      </UContainer>
    </main>

    <AppFooter />

  </div>
</template>