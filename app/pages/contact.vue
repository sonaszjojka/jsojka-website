<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';
import SectionHeader from '~/components/landing/SectionHeader.vue';

const links = ref<ButtonProps[]>([
    {
        label: 'Mail',
        icon: 'mi:email',
        to: 'mailto:jonasz.sojkaa@gmail.com',
        class: 'transition-transform hover:scale-105'
    },
    {
        label: 'Linkedin',
        icon: 'i-simple-icons-linkedin',
        to: 'https://www.linkedin.com/in/jonasz-s%C3%B3jka/',
        class: 'transition-transform hover:scale-105'
    },
])
</script>

<template>
    <div class="flex flex-col min-h-screen">

        <SectionHeader section-title="Contact" class="p-10 items-center" />

        <div class="flex flex-col items-center justify-center flex-1 pb-24">
            <UCard class="relative overflow-hidden bg-transparent">
                <div class="absolute" />
                <div class="relative">
                    <UPageHero title="Let's get in touch 👋"
                        description="Whether you want to collaborate on a project, tackle a challenging problem, or just talk tech — feel free to reach out. Let's build something meaningful together."
                        :links="links" />
                </div>
            </UCard>

            <div class="flex flex-row flex-wrap justify-center gap-10 mt-6">
                <div class="text-sm text-gray-500">🤝 Open to collaboration</div>
                <div class="text-sm text-gray-500">⚡ Fast response</div>
                <div class="text-sm text-gray-500">🤗 Productive and positive attitude</div>
            </div>
        </div>

    </div>
</template>