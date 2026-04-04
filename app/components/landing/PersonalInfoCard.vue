<script setup lang="ts">
import SocialsAnchor from './SocialsAnchor.vue';

</script>

<template>
    <UPageCard class="mt-5">
        <div
            class="flex flex-col justify-center text-center md:flex-row md:justify-between md:text-left items-center p-2">
            <div class="flex flex-col gap-4 w-2/3 p-2">
                <div class="flex flex-col items-center md:flex md:flex-row gap-5">
                    <h2 class="text-3xl pb-2 font-bold">Hi, I'm <span class="text-primary">Jonasz</span></h2>
                    <UBadge icon="emojione-v1:flag-for-poland" label="23 years old" size='lg' color="neutral"
                        variant="outline"></UBadge>
                </div>
                <p class="text-md">
                    Software Engineer since 2024. I’m a backend developer by profession, and a full-stack developer in
                    my free time. I’ve graduated with a Bachelor of
                    Engineering and I am pursuing master's degree starting in 10.2026. I build software which matches
                    people's needs and seeing code I wrote actually
                    help people keeps my drive.
                </p>
                <SocialsAnchor></SocialsAnchor>
            </div>
            <div>
                <img src="/profile_picture_js.png" alt="jonasz_sójka"
                    class="hidden md:block size-70 rounded-full border-primary border-5" />
            </div>
        </div>
    </UPageCard>
</template>
