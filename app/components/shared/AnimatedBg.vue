<!-- components/StarfieldBg.vue -->
<template>
    <canvas ref="canvas" class="starfield" />
</template>

<script setup>
const canvas = ref(null)
let animId = null

onMounted(() => {
    const c = canvas.value
    const ctx = c.getContext('2d')

    const resize = () => {
        c.width = window.innerWidth
        c.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array(150).fill(0).map(() => ({
        x: Math.random() * c.width - c.width / 2,
        y: Math.random() * c.height - c.height / 2,
        z: Math.random() * c.width
    }))

    const draw = () => {
        const W = c.width
        const H = c.height

        ctx.fillStyle = 'rgba(24,24,27,0.2)'
        ctx.fillRect(0, 0, W, H)

        stars.forEach(s => {
            s.z -= 1.5
            if (s.z <= 0) {
                s.x = Math.random() * W - W / 2
                s.y = Math.random() * H - H / 2
                s.z = W
            }

            const sx = (s.x / s.z) * W + W / 2
            const sy = (s.y / s.z) * H + H / 2
            const r = Math.max(0.3, (1 - s.z / W) * 2)
            const alpha = (1 - s.z / W) * 0.8

            ctx.beginPath()
            ctx.arc(sx, sy, r, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(167,243,208,${alpha})`
            ctx.fill()
        })

        animId = requestAnimationFrame(draw)
    }

    draw()

    onUnmounted(() => {
        cancelAnimationFrame(animId)
        window.removeEventListener('resize', resize)
    })
})
</script>

<style scoped>
.starfield {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
}
</style>