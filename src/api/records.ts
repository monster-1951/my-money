import { records } from "./axios"

export const getRecords = async () => {
    const response = await records.get("/")
    return response
}