import {z} from 'zod'

export const envSchema = z.object({
    VITE_URL_FOR_BACKEND : z.string().nonempty()
})

export interface Env extends z.infer<typeof envSchema> {}