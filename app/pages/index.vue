<script setup lang="ts">
import FeaturedProjects from '~/components/landing/FeaturedProjects.vue';
import PastExperienceTab from '~/components/landing/PastExperienceTab.vue';
import PersonalInfoCard from '~/components/landing/PersonalInfoCard.vue';



</script>

<template>
    <PersonalInfoCard></PersonalInfoCard>

    <h2 class="text-2xl font-bold flex items-center gap-2">
        <span>Let's dive in my career</span>
    </h2>

    <PastExperienceTab></PastExperienceTab>
    <FeaturedProjects></FeaturedProjects>
</template>

<style></style>
