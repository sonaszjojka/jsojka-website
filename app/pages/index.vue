<script setup lang="ts">
import FeaturedProjects from '~/components/landing/FeaturedProjects.vue';
import PastExperienceTab from '~/components/landing/PastExperienceTab.vue';
import PersonalInfoCard from '~/components/landing/PersonalInfoCard.vue';



</script>

<template>
    <div class="flex flex-col gap-10">
        <PersonalInfoCard></PersonalInfoCard>

        <PastExperienceTab></PastExperienceTab>

        <h2 class="text-2xl font-bold flex items-center gap-2">
            <UIcon name="mdi:star-outline" class="size-8" />
            <span>Featured Projects</span>
        </h2>
        <FeaturedProjects></FeaturedProjects>
    </div>
</template>

<style></style>
