import type { Record } from "../../types/types";

interface RecordsProps {
  Records: Record[] | undefined;
}

const TransactionList = (props: RecordsProps) => {
  console.log(props.Records);
  const renderTransactionRecord = props.Records?.length ? (
    props.Records.map((TransactionRecord: Record) => (
      <div
        key={TransactionRecord.id}
        className="flex w-[85%] mx-auto py-3 gap-3"
      >
        <img
          src={`/iconsForCategories/${TransactionRecord.category}.png`}
          alt="not found"
          className="rounded-full w-fit h-12"
        />
        <div className="flex justify-between w-full border-b">
          <div className="flex flex-col">
            <span>{TransactionRecord.categories?.name}</span>
            <span>
              {TransactionRecord.accounts_records_accountToaccounts.name}
            </span>
          </div>
          <div className="font-semibold">
            <span
              className={`${TransactionRecord.type == "Income" ? "text-green-600" : `${TransactionRecord.type == "Expense" ? "text-red-600" : "text-blue-500"}`}`}
            >
              &#8377;{TransactionRecord.amount}
            </span>
          </div>
        </div>
      </div>
    ))
  ) : (
    <>No transactions</>
  );
  return <>{renderTransactionRecord}</>;
};

export default TransactionList;
