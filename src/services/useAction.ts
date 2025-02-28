type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type HttpHeaders = Record<string, string>;

export interface FetchOptions {
    method: HttpMethod;
    headers?: HttpHeaders;
    body?: any;
}
export const useAction = async (url:string,request:FetchOptions)=>{
    try{
        const  response = await fetch(url,request)        
        if(!response.ok){
            throw new Error("Se ha producido un error")
        }
    }
    catch(err){

    }
    
}