<script setup lang="ts">
import SocialsAnchor from './SocialsAnchor.vue';

const focus = ["Java", "Spring Boot", "Guidewire", "AWS", "PostgreSQL"]

// Recruiters filter on languages early, and he works inside a German
// insurance group — so this belongs above the fold, not in a footnote.
const languages = [
    { name: 'Polish', level: 'Native · C2' },
    { name: 'English', level: 'Fluent · C1' },
    { name: 'German', level: 'Communicative' },
]
</script>

<template>
    <header class="pt-14 pb-12">
        <div class="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <div class="min-w-0">
                <p class="eyebrow">Backend engineer · Warsaw, Poland</p>

                <h1 class="mt-3 text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.03em] text-[var(--ink-strong)]">
                    Jonasz Sójka
                </h1>

                <p class="mt-4 font-serif text-[1.0625rem] leading-relaxed text-[var(--ink-muted)] max-w-[46ch]">
                    I build the systems insurers run on — policy administration on Guidewire,
                    backed by Java and Spring Boot. Three years in backend, with an analyst's
                    habit of asking what the business actually needs first.
                </p>

                <ul class="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
                    <li v-for="item in focus" :key="item"
                        class="font-mono text-[0.6875rem] text-[var(--accent)] bg-[var(--accent-soft)] px-2 py-1 rounded-sm">
                        {{ item }}
                    </li>
                </ul>

                <dl class="mt-5 flex flex-wrap gap-x-5 gap-y-1.5">
                    <div v-for="lang in languages" :key="lang.name" class="flex items-baseline gap-1.5">
                        <dt class="text-[0.8125rem] text-[var(--ink)]">{{ lang.name }}</dt>
                        <dd class="font-mono text-[0.6875rem] text-[var(--ink-faint)]">{{ lang.level }}</dd>
                    </div>
                </dl>

                <div class="mt-7">
                    <SocialsAnchor />
                </div>
            </div>

            <img :src="useAssetUrl('/profile_picture_js.png')" alt="Jonasz Sójka"
                class="size-24 sm:size-32 shrink-0 rounded-sm object-cover ring-1 ring-[var(--rule)]" />
        </div>
    </header>
</template>
