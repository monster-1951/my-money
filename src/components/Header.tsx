import { Months } from "../lib/constants";
import type { financialMetric } from "../types/types";

interface HeaderProps {
  Month: number;
  Year: number;
  handlePrevMonth: (month: boolean) => void;
  handleNextMonth: (month: boolean) => void;
  financialMetricsForHeader: financialMetric[];
}
const Header = (props: HeaderProps) => {
  console.log(props.financialMetricsForHeader)
  const renderMetrics = props.financialMetricsForHeader.map(
    (financialMetric: financialMetric) => (
      <div
        className="flex flex-col"
        key={props.financialMetricsForHeader.indexOf(financialMetric)}
      >
        <span>{financialMetric.name}</span>
        <span className={`${financialMetric.name=="EXPENSE" ? "text-red-600" : "text-green-600"}`}>&#8377;{String(financialMetric.value)}</span>
      </div>
    ),
  );

  return (
    <>
      <header className="bg-gray-700 text-indigo-200 p-3 flex flex-col gap-5 pt-4 sticky top-0">
        <div className="flex justify-between">
          <button className="sm:hidden">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <span className="text-3xl font-bold">My Money</span>
          <button className="sm:hidden">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
        <div
          id="currentMonth"
          className="flex text-xl justify-around "
          data-carousel="static"
        >
          <button
            onClick={() => {
              props.handlePrevMonth(props.Month === 0 ? true : false);
            }}
          >
            &lt;
          </button>
          {Months[props.Month]} {props.Year}
          <button
            onClick={() => {
              props.handleNextMonth(props.Month == 11 ? true : false);
            }}
          >
            &gt;
          </button>
        </div>
        <div className="flex justify-around text-center">
          {renderMetrics}
        </div>
      </header>
    </>
  );
};

export default Header;
