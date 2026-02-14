
interface AccountsHeaderProps{
    allAccounts:number
}

const AccountsHeader = (props:AccountsHeaderProps) => {
    return <div className="bg-gray-700 text-indigo-200 p-3 text-center text-xl sticky top-0">All Accounts : {props.allAccounts}</div>
}
export default AccountsHeader