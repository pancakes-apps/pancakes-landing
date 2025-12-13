export const useHello = () => {
    const data = ref({})
    const loading = ref(false)
    const error: any = ref(null)

    const greet = async () => {
        loading.value = true

        try {
            const res =  await $fetch('/api/hello')
            data.value = res
            return data
        } catch (e) {
            error.value = e
            console.error('Something went wrong when fetching hello data', error.value)
        } finally {
            loading.value = false
        }
    }

    return {
        greet,
        data, 
        loading, 
        error
    }
}