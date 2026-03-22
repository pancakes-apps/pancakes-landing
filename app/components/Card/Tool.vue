<script lang="ts" setup>
const { title, description, cta, ctaLabel, image } = defineProps<{title: string, description: string, cta: string, ctaLabel: string, image: string}>()
</script>
<template>
    <div class="min-h-96 border-[.5px] rounded-3xl border-gray-600 overflow-hidden transition hover:scale-102 duration-300 hover:shadow-xl">
        <div class="h-52 rounded-xl overflow-hidden">
            <img :src="image" alt="tap-app" class="w-fit h-auto">
        </div>
        <div class="px-5 py-2">
            <h4 class="font-bold text-xl mt-4 mb-2">{{ title }}</h4>
            <p>{{ description }}</p>
            <UiButton :cta="cta" :cta-label="ctaLabel" />
        </div>
    </div>
</template>