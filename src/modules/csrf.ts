let csrf_token:string

export const getCSRF_TOKEN = () => {
    return csrf_token
}

export const setCSRF_TOKEN = (tokenValue:string) => {
    csrf_token = tokenValue
}
