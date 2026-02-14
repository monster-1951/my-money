
interface AccountsHeaderProps{
    allAccounts:number
}

const AccountsHeader = (props:AccountsHeaderProps) => {
    return <div className="bg-gray-700 text-indigo-200 p-3 text-center text-xl sticky top-0 ">Total of all accounts : <span className="text-green-500">&#8377;{props.allAccounts}</span></div>
}
export default AccountsHeader