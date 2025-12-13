<script setup lang="ts">
const { greet, data, loading, error } = useHello()

onMounted(() => {
  greet()
})

</script>

<template>
    <div>
        Wassaap Homi
        <br>
        <UiButton> Click Me Homi </UiButton>
        <br>
        Data coming from the server: 
        <p v-if="loading">Greet message loading</p>
        <p v-else-if="error">{{ error }}</p>
        <pre v-else>{{ data }}</pre>
        <p>{{ capitalizeFirstLetter('sup') }}</p>
    </div>
</template>