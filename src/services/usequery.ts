import { ref } from "vue";
export async function useQuery<T>(url:string){

    const data = ref<T>();
    const error = ref(null);

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('No data available');
        }
        data.value = await response.json();
        
    }
    catch(err: any){
        error.value = err;
    }
    

    return { data, error};
}