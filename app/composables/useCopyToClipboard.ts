export function useCopyToClipboard(resetAfter = 1600) {
    const copiedKey = ref<string | null>(null);
    let timer: ReturnType<typeof setTimeout> | undefined;

    async function copy(text: string, key: string = text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            return;
        }

        copiedKey.value = key;
        clearTimeout(timer);
        timer = setTimeout(() => (copiedKey.value = null), resetAfter);
    }

    onScopeDispose(() => clearTimeout(timer));

    return { copy, isCopied: (key: string) => copiedKey.value === key };
}
