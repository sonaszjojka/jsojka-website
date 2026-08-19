<template>
  <div class="min-h-screen flex flex-col bg-[var(--paper)]">
    <AppHeader class="w-full" />

    <main class="flex-1 w-full">
      <UContainer class="px-5 sm:px-6 lg:px-8 max-w-3xl!">
        <slot />
      </UContainer>
    </main>

    <AppFooter class="w-full" />
  </div>
</template>
