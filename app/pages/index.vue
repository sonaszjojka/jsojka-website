<script setup lang="ts">
import FeaturedProjects from '~/components/landing/FeaturedProjects.vue';
import FuturePlans from '~/components/landing/FuturePlans.vue';
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
            <SectionHeader section-title="Experience" icon-name="mingcute:suitcase-line"></SectionHeader>
            <PastExperienceTab></PastExperienceTab>
        </div>

        <div class="mb-10">
            <SectionHeader section-title="Technology Stack" icon-name="mi:layers"></SectionHeader>
            <TechnologyStack></TechnologyStack>
        </div>

        <div class="mb-10">
            <SectionHeader section-title="My Development Plan" icon-name="mi:calendar"></SectionHeader>
            <FuturePlans></FuturePlans>
        </div>

        <div class="mb-10">
            <div class="flex flex-row items-center justify-between">
                <SectionHeader section-title="Featured Projects" icon-name="mi:favorite"></SectionHeader>
                <UButton label="View more" trailing-icon="mi:arrow-right" variant="ghost" color="neutral"
                    class="hover:bg-transparent hover:text-primary px-0" to="/projects" target="" />
            </div>
            <FeaturedProjects></FeaturedProjects>
        </div>

        <div class="mb-10">
            <SectionHeader section-title="Other" icon-name="cuida:fire-outline"></SectionHeader>
            <OtherFeatures></OtherFeatures>
        </div>
    </div>
</template>

<style></style>
