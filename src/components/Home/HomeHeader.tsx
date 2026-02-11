import { Months } from "../../lib/constants";
import type { financialMetric } from "../../types/types";

interface HomeHeaderProps {
  Month: number;
  Year: number;
  handlePrevMonth: (month: boolean) => void;
  handleNextMonth: (month: boolean) => void;
  financialMetricsForHeader: financialMetric[];
}

const HomeHeader = (props: HomeHeaderProps) => {
  const renderMetrics = props.financialMetricsForHeader.map(
    (financialMetric: financialMetric) => (
      <div
        className="flex flex-col"
        key={props.financialMetricsForHeader.indexOf(financialMetric)}
      >
        <span>{financialMetric.name}</span>
        <span
          className={`${financialMetric.name == "EXPENSE" ? "text-red-600" : "text-green-600"}`}
        >
          &#8377;{String(financialMetric.value)}
        </span>
      </div>
    ),
  );
  return (
    <header className="bg-gray-700 text-indigo-200 gap-5 p-3 flex flex-col sticky top-0">
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
      <div className="flex justify-around text-center">{renderMetrics}</div>
    </header>
  );
};

export default HomeHeader;
