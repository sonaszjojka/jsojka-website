<script setup lang="ts">
import SocialsAnchor from './SocialsAnchor.vue';

const focus = ["Java", "Spring Boot", "Guidewire", "PostgreSQL"]
</script>

<template>
    <header class="pt-14 pb-12">
        <div class="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <div class="min-w-0">
                <p class="eyebrow">Backend engineer · Insurance systems</p>

                <h1 class="mt-3 text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.03em] text-[var(--ink-strong)]">
                    Jonasz Sójka
                </h1>

                <p class="mt-4 font-serif text-[1.0625rem] leading-relaxed text-[var(--ink-muted)] max-w-[46ch]">
                    I build the systems insurers run on — policy administration on Guidewire,
                    backed by Java and Spring Boot. Backend by profession, full-stack by
                    curiosity, and an engineering degree behind both.
                </p>

                <ul class="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
                    <li v-for="item in focus" :key="item"
                        class="font-mono text-[0.6875rem] text-[var(--accent)] bg-[var(--accent-soft)] px-2 py-1 rounded-sm">
                        {{ item }}
                    </li>
                </ul>

                <div class="mt-7">
                    <SocialsAnchor />
                </div>
            </div>

            <img :src="useAssetUrl('/profile_picture_js.png')" alt="Jonasz Sójka"
                class="size-24 sm:size-32 shrink-0 rounded-sm object-cover ring-1 ring-[var(--rule)]" />
        </div>
    </header>
</template>
