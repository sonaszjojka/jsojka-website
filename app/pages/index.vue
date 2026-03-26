<script setup lang="ts">
import FeaturedProjects from '~/components/landing/FeaturedProjects.vue';
import PastExperienceTab from '~/components/landing/PastExperienceTab.vue';
import PersonalInfoCard from '~/components/landing/PersonalInfoCard.vue';
import SectionHeader from '~/components/landing/SectionHeader.vue';
import TechnologyStack from '~/components/landing/TechnologyStack.vue';



</script>

<template>
    <div class="flex flex-col gap-10">
        <PersonalInfoCard></PersonalInfoCard>

        <PastExperienceTab></PastExperienceTab>

        <SectionHeader section-title="Featured Projects" icon-name="ph:star-light""></SectionHeader>
        <FeaturedProjects></FeaturedProjects>

        <SectionHeader section-title=" Technology Stack" icon-name="ph:stack-light""></SectionHeader>
        <TechnologyStack></TechnologyStack>
    </div>
</template>

<style></style>
