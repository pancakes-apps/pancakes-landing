<script setup lang="ts">
    import Tap from '~/assets/images/tap.webp'
    import Flashcards from '~/assets/images/flashcards.webp'
</script>

<template>
    <div class="space-y-12 md:space-y-24">
        <section class="w-full flex flex-col md:flex-row items-end justify-between gap-8 md:gap-18">
            <h2 class="font-bold text-5xl">A stack of simple apps, built to help one pancake at a time.</h2>
            <p class="text-lg">Pancakes is a home for small, focused apps born from curiosity and side projects. Each one started as an idea worth exploring and ended up worth sharing.</p>
        </section>

        <section class="w-full lg:w-3xl">
            <section class="col-span-2">
                <h3 class="font-bold text-2xl mb-8">Explore what's live</h3>
                <div class="w-full grid grid-cols-1 sm:grid-cols-2 place-items-between gap-12">
                    <CardTool
                        title="Tap"
                        description="A simple web scraper that taps into any site and extracts the data you need."
                        :image="Tap"
                        cta-label="Star on GitHub"
                        cta="https://github.com/pancakes-apps/Tap"
                    />
                    <CardTool
                        title="Pancakes Flashcards"
                        description="Paste a YT link, upload a file, or type a thought. Your flashcards are ready."
                        :image="Flashcards"
                        cta-label="Start Learning"
                        cta="https://pancakes.fit"
                    />
                </div>
            </section>
        </section>
    </div>
</template>