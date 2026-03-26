<script setup lang="ts">
import FeaturedProjects from '~/components/landing/FeaturedProjects.vue';
import OtherFeatures from '~/components/landing/OtherFeatures.vue';
import PastExperienceTab from '~/components/landing/PastExperienceTab.vue';
import PersonalInfoCard from '~/components/landing/PersonalInfoCard.vue';
import SectionHeader from '~/components/landing/SectionHeader.vue';
import TechnologyStack from '~/components/landing/TechnologyStack.vue';



</script>

<template>
    <div class="flex flex-col">
        <div class="mb-10">
            <PersonalInfoCard></PersonalInfoCard>
        </div>

        <div class="mb-10">
            <PastExperienceTab></PastExperienceTab>
        </div>

        <div class="mb-10">
            <SectionHeader section-title="Featured Projects" icon-name="mi:favorite"></SectionHeader>
            <FeaturedProjects></FeaturedProjects>
        </div>

        <div class=" mb-10">
            <SectionHeader section-title=" Technology Stack" icon-name="mi:layers"></SectionHeader>
            <TechnologyStack></TechnologyStack>
        </div>

        <div class=" mb-10">
            <SectionHeader section-title=" Other" icon-name="mi:layers"></SectionHeader>
            <OtherFeatures></OtherFeatures>
        </div>
    </div>
</template>

<style></style>
