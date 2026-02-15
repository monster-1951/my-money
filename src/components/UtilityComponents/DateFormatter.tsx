import { Months } from "../../lib/constants";

interface DateFormatterProps {
  date: string;
}

const DateFormatter = (props: DateFormatterProps) => {
  const date = new Date(props.date);
  return (
    <div className="flex justify-end font-semibold">{`${Months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.toLocaleTimeString(
      "en-US",
      {
        hour12: true,
        minute: "2-digit",
        hour: "2-digit",
      },
    )}`}</div>
  );
};

export default DateFormatter