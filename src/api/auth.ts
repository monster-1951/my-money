import { auth } from "./axios"

export const login = async (params:{email:string,password:string}) => {
    const response = await auth.post("/",params)
    return response
}