<template>
    <div>
        <LayoutHeader />
        <main>
            <slot />
        </main>
        <LazyLayoutFooter hydrate-on-visible/>
    </div>
</template>