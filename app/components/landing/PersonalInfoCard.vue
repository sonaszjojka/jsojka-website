<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';
import SocialsAnchor from './SocialsAnchor.vue';

const links = ref<ButtonProps[]>([
    {
        label: 'Contact me',
        to: '/docs/getting-started',
        icon: 'mdi:email-outline'
    },
    {
        label: 'See my work',
        to: '/docs/getting-started/theme/design-system',
        color: 'neutral',
        variant: 'subtle',
        trailingIcon: 'i-lucide-arrow-right'
    }
])

</script>

<template>
    <UPageCard>
        <div class="flex justify-between items-center p-2">
            <div class="flex flex-col gap-4 w-2/3 p-2">
                <div class="flex flex-row gap-5">
                    <h2 class="text-3xl pb-2 font-bold">Hi, I'm <span class="text-primary">Jonasz</span></h2>
                    <UBadge icon="emojione-v1:flag-for-poland" label="23 years old" size='lg' color="neutral"
                        variant="outline"></UBadge>
                </div>
                <p class="text-md">
                    Software Engineer since 2024. I do backend by profession,
                    full-stack since
                    AI came up. I build software which matches people needs. I’ve graduated with a Bachelor of
                    Engineering and I am to pursuing master's degree starting in 10.2026. Seeing code I wrote actually
                    help
                    people keeps my drive.
                </p>
                <SocialsAnchor></SocialsAnchor>
            </div>
            <div>
                <img src="/profile_picture_js.png" alt="jonasz_sójka"
                    class="size-70 rounded-full border-primary border-5" />
            </div>
        </div>
    </UPageCard>
</template>
