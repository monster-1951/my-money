import type { ReactNode } from "react";

interface AuthLayoutProps {
    children:ReactNode
}
const AuthLayout = ({children}:AuthLayoutProps) => {
    return (
        <div className="flex flex-col justify-center h-screen bg-gray-900 text-white ">
            {children}
        </div>
    )
}

export default AuthLayout;