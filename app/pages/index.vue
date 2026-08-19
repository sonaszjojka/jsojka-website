<script setup lang="ts">
import Certifications from '~/components/landing/Certifications.vue';
import EducationalExperienceTimeline from '~/components/landing/EducationalExperienceTimeline.vue';
import FeaturedProjects from '~/components/landing/FeaturedProjects.vue';
import FuturePlans from '~/components/landing/FuturePlans.vue';
import OtherFeatures from '~/components/landing/OtherFeatures.vue';
import PersonalInfoCard from '~/components/landing/PersonalInfoCard.vue';
import SectionHeader from '~/components/landing/SectionHeader.vue';
import TechnologyStack from '~/components/landing/TechnologyStack.vue';
import WorkExperienceTimeline from '~/components/landing/WorkExperienceTimeline.vue';

useHead({
    title: 'Jonasz Sójka — Backend engineer',
    meta: [{
        name: 'description',
        content: 'Backend engineer working on insurance policy systems with Guidewire, Java and Spring Boot.',
    }],
})
</script>

<template>
    <div class="pb-24">
        <PersonalInfoCard />

        <section class="mb-14">
            <SectionHeader section-title="Experience" />
            <WorkExperienceTimeline />
            <div class="mt-5 sm:pl-[9rem]">
                <NuxtLink
                    to="https://www.linkedin.com/in/jonasz-s%C3%B3jka/details/experience/?locale=en-US"
                    target="_blank" rel="noopener"
                    class="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--ink-faint)] transition-colors hover:text-[var(--accent)]">
                    Full history on LinkedIn
                    <UIcon name="akar-icons:link-out" class="size-3" />
                </NuxtLink>
            </div>
        </section>

        <section class="mb-14">
            <SectionHeader section-title="Education" />
            <EducationalExperienceTimeline />
        </section>

        <section class="mb-14">
            <SectionHeader section-title="Certifications" />
            <Certifications />
        </section>

        <section class="mb-14">
            <SectionHeader section-title="Stack" />
            <TechnologyStack />
        </section>

        <section class="mb-14">
            <SectionHeader section-title="What's next" />
            <FuturePlans />
        </section>

        <section class="mb-14">
            <div class="flex items-baseline justify-between gap-4">
                <SectionHeader section-title="Selected work" class="flex-1" />
                <NuxtLink to="/projects"
                    class="mb-6 shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--ink-faint)] transition-colors hover:text-[var(--accent)]">
                    All projects →
                </NuxtLink>
            </div>
            <FeaturedProjects />
        </section>

        <section>
            <SectionHeader section-title="Beyond the code" />
            <OtherFeatures />
        </section>
    </div>
</template>
