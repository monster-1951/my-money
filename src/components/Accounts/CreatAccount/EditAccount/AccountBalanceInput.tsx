interface AccountBalanceInputProps {
  initialAmount: number;
  setInitialAmount: React.Dispatch<React.SetStateAction<number>>;
}
const AccountBalanceInput = (props: AccountBalanceInputProps) => {
  const handleInitialAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    props.setInitialAmount(Number(e.target.value));
  };
  return (
    <>
      <div className="flex justify-between items-center gap-3">
        <span className="">Initial Amount</span>
        <input
          type="number"
          placeholder="0"
          className="border p-3 focus:border-0"
          value={props.initialAmount}
          onChange={handleInitialAmountChange}
        />
      </div>
      <p className="text-sm font-light">
        *Initial amount will not be reflected in analysis
      </p>
    </>
  );
};

export default AccountBalanceInput;