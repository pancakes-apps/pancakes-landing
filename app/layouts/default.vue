<template>
    <div class="min-h-screen px-4 py-4 sm:px-6 sm:py-6 md:py-8 md:px-12 lg:py-8 lg:px-32 space-y-12 sm:space-y-24">
        <LayoutHeader />
        <main class="min-h-[68dvh]">
            <slot />
        </main>
        <LazyLayoutFooter hydrate-on-visible />
    </div>
</template>