import type { TransactionRecord } from "../types/types";

interface RecordsProps {
  TransactionRecords: TransactionRecord[];
}

const TransactionList = (props: RecordsProps) => {
  const renderTransactionRecord = props.TransactionRecords.map(
    (TransactionRecord: TransactionRecord) => (
      <div
        key={props.TransactionRecords.indexOf(TransactionRecord)}
        className="flex w-[85%] mx-auto py-3 gap-3"
      >
        <img
          src={`/iconsForCategories/${TransactionRecord.CATEGORY}.png`}
          alt="not found"
          className="rounded-full w-fit h-12"
        />
        <div className="flex justify-between w-full border-b">
          <div className="flex flex-col">
            <span>{TransactionRecord.CATEGORY}</span>
            <span>{TransactionRecord.ACCOUNT}</span>
          </div>
          <div className="font-semibold">

          <span className={`${TransactionRecord.TYPE=="(+) Income" ? "text-green-600" : `${TransactionRecord.TYPE == "(-) Expense" ? "text-red-600":"text-blue-500"}`}`} >&#8377;{TransactionRecord.AMOUNT.toPrecision(3)}</span>
          </div>
        </div>
      </div>
    ),
  );
  return <>{renderTransactionRecord}</>;
};

export default TransactionList;
