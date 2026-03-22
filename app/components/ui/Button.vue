<script lang="ts" setup>
    const { cta, ctaLabel } = defineProps<{cta: string, ctaLabel:string}>()
</script>

<template>
    <span class="text-black/50 hover:text-black mt-4 inline-block"><a :href="cta" target="_blank">{{ ctaLabel }}</a></span>
</template>