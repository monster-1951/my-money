import React, { useState } from "react"
import { login } from "../../api/auth"

export const LoginPage = () => {
    const [email,setEmail] = useState("ravan@lanka.com")
    const [password,setPassword] = useState("1")
    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleLogin = async () => {
        console.log({email,password})
        const response = await login({email,password})
        console.log(response)
    }
    return (
        <>
            <div>
                <div>Login</div>
                <input type="text" value={email} onChange={handleEmailChange} />
                <input type="text"  value={password} onChange={handlePasswordChange}/>
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}