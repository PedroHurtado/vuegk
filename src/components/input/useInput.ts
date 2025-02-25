import { ref } from "vue";
export function useInput(){
    
    const value = ref('');    
    
    return {
        value,   
    };
}