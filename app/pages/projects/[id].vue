<script setup lang="ts">
const route = useRoute()

const { data: project } = await useAsyncData(`project-${route.params.id}`, () =>
    queryCollection('content')
        .path(route.path)
        .first()
)

if (!project.value) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

// Frontmatter keys outside the page schema land in `meta`.
const date = computed(() => project.value?.meta?.date as string | undefined)

useHead({ title: `${project.value.title} — Jonasz Sójka` })
</script>

<template>
    <article v-if="project" class="pt-14 pb-24">
        <NuxtLink to="/projects"
            class="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--ink-faint)] transition-colors hover:text-[var(--accent)]">
            ← All projects
        </NuxtLink>

        <p v-if="date" class="eyebrow mt-8">{{ date }}</p>

        <ContentRenderer :value="project" class="project-body mt-3" />
    </article>
</template>

<style scoped>
/* Markdown is rendered by Nuxt UI's prose components; these rules only bring
   its type scale in line with the rest of the site. */
.project-body :deep(h1) {
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: var(--ink-strong);
}

.project-body :deep(h1 + p) {
    margin-top: 1rem;
    max-width: 48ch;
    font-family: var(--font-serif);
    font-size: 1.0625rem;
    line-height: 1.65;
    color: var(--ink-muted);
}

.project-body :deep(h2) {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin: 3rem 0 1.25rem;
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink-faint);
}

/* Same hairline that follows every section title on the home page. */
.project-body :deep(h2)::after {
    content: "";
    height: 1px;
    flex: 1;
    background: var(--rule);
}

.project-body :deep(h2 a) {
    color: inherit;
}

.project-body :deep(p),
.project-body :deep(li) {
    font-family: var(--font-serif);
    font-size: 0.9375rem;
    line-height: 1.7;
    color: var(--ink-muted);
}
</style>
