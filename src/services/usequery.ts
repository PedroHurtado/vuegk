import { ref, watchEffect, type Ref } from "vue";

export function useQuery<T>(url: Ref<string>) {
    const loading = ref(true);
    const data = ref<T | null>(null);
    const error = ref<Error | null>(null);

    const fetchData = async () => {
        data.value = null;
        error.value = null;
        loading.value = true;
        try {
            const response = await fetch(url.value);
            if (!response.ok) {
                throw new Error('No data available');
            }
            data.value = await response.json();
        } catch (err: any) {
            error.value = err;
        }
        finally{
            loading.value = false;
        }
    };

    watchEffect(fetchData); 

    return { data, error, loading };
}
