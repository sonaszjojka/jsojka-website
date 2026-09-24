<script setup lang="ts">
// "Warsaw, Poland" with a beacon that invites a hover; the aside it hides would
// otherwise make the eyebrow line too long. The beacon goes quiet once seen.
const hovered = ref(false)
const focused = ref(false)
const pinned = ref(false)
const revealed = computed(() => hovered.value || focused.value || pinned.value)
const seen = ref(false)

watch(revealed, (open) => {
    if (open) seen.value = true
})

// Mouse reveals on hover; touch and pen have no hover, so a tap toggles instead.
function onPointerEnter(event: PointerEvent) {
    if (event.pointerType === 'mouse') hovered.value = true
}
function onPointerLeave(event: PointerEvent) {
    if (event.pointerType === 'mouse') hovered.value = false
}
function onPointerUp(event: PointerEvent) {
    if (event.pointerType !== 'mouse') pinned.value = !pinned.value
}
function onBlur() {
    focused.value = false
    pinned.value = false
}
</script>

<template>
    <span class="loc" :class="{ 'is-open': revealed, 'is-seen': seen }">
        <button type="button" class="loc-trigger" aria-describedby="loc-aside" @pointerenter="onPointerEnter"
            @pointerleave="onPointerLeave" @pointerup="onPointerUp" @focus="focused = true" @blur="onBlur">
            <span class="loc-beacon" aria-hidden="true" />
            <span class="loc-text">Warsaw, Poland</span>
        </button>

        <span id="loc-aside" role="tooltip" class="loc-aside">The city itself, not “near” 😉</span>
    </span>
</template>

<style scoped>
.loc {
    position: relative;
    display: inline-flex;
}

.loc-trigger {
    display: inline-flex;
    align-items: center;
    gap: 0.4375rem;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    color: inherit;
    cursor: help;
}

.loc-text {
    text-decoration: underline dotted var(--rule-strong);
    text-decoration-thickness: 1px;
    text-underline-offset: 0.3em;
    transition: color 180ms ease, text-decoration-color 180ms ease;
}

.is-open .loc-text {
    color: var(--accent);
    text-decoration-color: var(--accent);
}

/* A map-pin style ping: steady dot, expanding ring. */
.loc-beacon {
    position: relative;
    width: 5px;
    height: 5px;
    flex: none;
    border-radius: 999px;
    background: var(--accent);
}

.loc-beacon::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--accent);
    animation: loc-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.is-seen .loc-beacon::after {
    animation: none;
    opacity: 0;
}

@keyframes loc-ping {
    75%,
    100% {
        transform: scale(2.8);
        opacity: 0;
    }
}

.loc-aside {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    z-index: 10;
    padding: 0.375rem 0.625rem;
    border: 1px solid var(--rule);
    border-radius: var(--ui-radius);
    background: var(--paper-raised);
    box-shadow: 0 6px 18px -8px rgb(0 0 0 / 0.18);
    font-family: var(--font-serif);
    font-size: 0.8125rem;
    font-style: italic;
    letter-spacing: normal;
    text-transform: none;
    white-space: nowrap;
    color: var(--ink-muted);
    opacity: 0;
    transform: translateY(-0.25rem);
    transition: opacity 180ms ease, transform 180ms ease;
    pointer-events: none;
}

/* Small caret pointing back at the beacon. */
.loc-aside::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 0.75rem;
    width: 7px;
    height: 7px;
    border-top: 1px solid var(--rule);
    border-left: 1px solid var(--rule);
    background: var(--paper-raised);
    transform: rotate(45deg);
}

.is-open .loc-aside {
    opacity: 1;
    transform: none;
}

@media print {
    .loc-beacon,
    .loc-aside {
        display: none;
    }

    .loc-text {
        text-decoration: none;
    }
}
</style>
