interface AccountNameInputProps {
  accountName: string;
  setAccountName: React.Dispatch<React.SetStateAction<string>>;
}

const AccountNameInput = (props: AccountNameInputProps) => {
  const handleAccountNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setAccountName(e.target.value);
  };
  return (
    <div className="flex justify-between gap-3 items-center">
      <span>Name</span>
      <input
        type="text"
        placeholder="Account name"
        className="border p-3 focus:border-0"
        value={props.accountName}
        onChange={handleAccountNameChange}
      />
    </div>
  );
};

export default AccountNameInput;