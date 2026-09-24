<script setup lang="ts">
import RailDate from '~/components/shared/RailDate.vue';

type Cert = {
    date: string
    note?: string
    name: string
    issuer: string
    credential?: string
    verify?: string
}

const certs: Cert[] = [
    {
        date: '2026.09',
        name: 'Software Architecture & Design of Modern Large Scale Systems',
        issuer: 'Udemy',
        credential: 'UC-d5198844-907e-46f2-951b-77460e0da641',
        verify: 'https://www.udemy.com/certificate/UC-d5198844-907e-46f2-951b-77460e0da641/',
    },
    {
        date: '2026.09',
        name: 'Docker Mastery: with Kubernetes +Swarm from a Docker Captain',
        issuer: 'Udemy',
        credential: 'UC-bcab476d-f120-491c-8c60-a2b06762199c',
        verify: 'https://www.udemy.com/certificate/UC-bcab476d-f120-491c-8c60-a2b06762199c/',
    },
    {
        date: '2026.09',
        name: 'Apache Kafka Series — Learn Apache Kafka for Beginners v3',
        issuer: 'Udemy',
        credential: 'UC-04df7aa2-3013-4da4-a5a8-fed1bfde958e',
        verify: 'https://www.udemy.com/certificate/UC-04df7aa2-3013-4da4-a5a8-fed1bfde958e/',
    },
    {
        date: '2026.07',
        note: 'valid to 2029.07',
        name: 'AWS Certified Cloud Practitioner (CLF-C02)',
        issuer: 'Amazon Web Services',
        credential: 'd3b88d60dacb4a19b481df96b8482955',
        verify: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/d3b88d60dacb4a19b481df96b8482955',
    },
    {
        date: '2025.11',
        name: 'InsuranceSuite Developer Fundamentals',
        issuer: 'Guidewire Software',
    },
    {
        date: '2025.11',
        name: 'PolicyCenter Configuration',
        issuer: 'Guidewire Software',
    },
]

const courses = {
    from: '2026.07',
    to: '2026.08',
    issuer: 'Anthropic',
    items: [
        { name: 'Building with the Claude API', verify: 'https://verify.skilljar.com/c/fj7mcgconsyx' },
        { name: 'Model Context Protocol: Advanced Topics', verify: 'https://verify.skilljar.com/c/e2oxtzd2936q' },
        { name: 'Claude Code in Action', verify: 'https://verify.skilljar.com/c/u7ge75q4oe5p' },
        { name: 'Introduction to Model Context Protocol', verify: 'https://verify.skilljar.com/c/eu42eok92qht' },
        { name: 'Introduction to subagents', verify: 'https://verify.skilljar.com/c/qm4sss5dspox' },
        { name: 'Introduction to agent skills', verify: 'https://verify.skilljar.com/c/cfevg6kcfkb8' },
        { name: 'Introduction to Claude Cowork', verify: 'https://verify.skilljar.com/c/cnzdkmxynqbg' },
        { name: 'Claude Platform 101', verify: 'https://verify.skilljar.com/c/b7g8fgris7h4' },
        { name: 'Claude Code 101', verify: 'https://verify.skilljar.com/c/ddd5metryd22' },
        { name: 'Claude 101', verify: 'https://verify.skilljar.com/c/5ez59zemraks' },
    ],
}

// The course bundle sits in the timeline by when it finished, so it lands
// between the certificates on either side of that month.
const coursesAt = certs.findIndex(cert => cert.date <= courses.to)
const split = coursesAt === -1 ? certs.length : coursesAt
const timeline = [
    ...certs.slice(0, split),
    courses,
    ...certs.slice(split),
]

const { copy, isCopied } = useCopyToClipboard()
</script>

<template>
    <div class="rail">
        <div v-for="entry in timeline" :key="'items' in entry ? entry.issuer : entry.name" class="rail-row contents">
            <template v-if="'items' in entry">
                <div class="rail-date">
                    <RailDate :from="entry.from" :to="entry.to" />
                </div>

                <div class="rail-body relative">
                    <span class="rail-marker is-done" aria-hidden="true" />

                    <h3 class="font-semibold tracking-tight text-[var(--ink-strong)]">
                        Claude &amp; agentic development
                        <span class="eyebrow ml-1.5">{{ entry.items.length }} courses</span>
                    </h3>
                    <p class="mt-1 text-[0.9375rem] text-[var(--ink-muted)]">{{ entry.issuer }}</p>

                    <ul class="mt-2.5 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                        <li v-for="item in entry.items" :key="item.name">
                            <a :href="item.verify" target="_blank" rel="noopener"
                                class="verify-course font-mono text-[0.6875rem] text-[var(--ink-faint)]">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </template>

            <template v-else>
                <div class="rail-date">
                    <div>{{ entry.date }}</div>
                    <div v-if="entry.note" class="text-[0.625rem] leading-tight">{{ entry.note }}</div>
                </div>

                <div class="rail-body relative">
                    <span class="rail-marker is-done" aria-hidden="true" />

                    <h3 class="font-semibold tracking-tight text-[var(--ink-strong)]">{{ entry.name }}</h3>
                    <p class="mt-1 text-[0.9375rem] text-[var(--ink-muted)]">{{ entry.issuer }}</p>
                    <div v-if="entry.credential || entry.verify" class="mt-1.5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <button v-if="entry.credential" type="button" class="copy-field font-mono text-[0.6875rem] break-all"
                            :aria-label="`Copy credential ID ${entry.credential}`"
                            @click="copy(entry.credential, entry.name)">
                            <span class="text-[var(--ink-faint)]">ID {{ entry.credential }}</span>
                            <span class="copy-hint print:hidden" :class="{ 'is-copied': isCopied(entry.name) }">
                                {{ isCopied(entry.name) ? 'copied' : 'copy' }}
                            </span>
                        </button>

                        <a v-if="entry.verify" :href="entry.verify" target="_blank" rel="noopener" class="verify-link">
                            Verify
                            <UIcon name="akar-icons:link-out" class="size-3 print:hidden" />
                        </a>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
