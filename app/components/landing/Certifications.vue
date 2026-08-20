<script setup lang="ts">
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
        date: '2026.07',
        note: 'valid to 2029.07',
        name: 'AWS Cloud Practitioner (CLF-C02)',
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
    date: '2026.07',
    note: '— 2026.08',
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

const { copy, isCopied } = useCopyToClipboard()
</script>

<template>
    <div class="rail">
        <div v-for="cert in certs" :key="cert.name" class="rail-row contents">
            <div class="rail-date">
                <div>{{ cert.date }}</div>
                <div v-if="cert.note" class="text-[0.625rem] leading-tight">{{ cert.note }}</div>
            </div>

            <div class="rail-body relative">
                <span class="rail-marker hidden sm:block" aria-hidden="true" />

                <h3 class="font-semibold tracking-tight text-[var(--ink-strong)]">{{ cert.name }}</h3>
                <p class="mt-1 text-[0.9375rem] text-[var(--ink-muted)]">{{ cert.issuer }}</p>
                <div v-if="cert.credential || cert.verify" class="mt-1.5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <button v-if="cert.credential" type="button" class="copy-field font-mono text-[0.6875rem] break-all"
                        :aria-label="`Copy credential ID ${cert.credential}`"
                        @click="copy(cert.credential, cert.name)">
                        <span class="text-[var(--ink-faint)]">ID {{ cert.credential }}</span>
                        <span class="copy-hint print:hidden" :class="{ 'is-copied': isCopied(cert.name) }">
                            {{ isCopied(cert.name) ? 'copied' : 'copy' }}
                        </span>
                    </button>

                    <a v-if="cert.verify" :href="cert.verify" target="_blank" rel="noopener" class="verify-link">
                        Verify
                        <UIcon name="akar-icons:link-out" class="size-3 print:hidden" />
                    </a>
                </div>
            </div>
        </div>

        <div class="rail-row contents">
            <div class="rail-date">
                <div>{{ courses.date }}</div>
                <div class="text-[0.625rem] leading-tight">{{ courses.note }}</div>
            </div>

            <div class="rail-body relative">
                <span class="rail-marker hidden sm:block" aria-hidden="true" />

                <h3 class="font-semibold tracking-tight text-[var(--ink-strong)]">
                    Claude &amp; agentic development
                    <span class="eyebrow ml-1.5">{{ courses.items.length }} courses</span>
                </h3>
                <p class="mt-1 text-[0.9375rem] text-[var(--ink-muted)]">{{ courses.issuer }}</p>

                <ul class="mt-2.5 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    <li v-for="item in courses.items" :key="item.name">
                        <a :href="item.verify" target="_blank" rel="noopener"
                            class="verify-course font-mono text-[0.6875rem] text-[var(--ink-faint)]">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
