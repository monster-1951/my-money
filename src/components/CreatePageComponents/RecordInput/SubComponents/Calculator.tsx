import { PiBackspace } from "react-icons/pi";
import * as math from "mathjs";
import { useState } from "react";

interface CalculatorButton {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface CalculatorProps {
  amount:number
  setAmount: React.Dispatch<React.SetStateAction<number>>
  
}

const Calculator = (props: CalculatorProps) => {
    const [amountString, setAmountString] = useState<string>(
      props.amount.toString(),
    );
  const NumberClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const value = e.currentTarget.innerText;
    setAmountString((prev) => {
      if(prev==="Error") prev=""
      return prev + value;
    });
  };

  const evaluate = () => {
    try {
      const result = math.evaluate(amountString);
      console.log(result);
      setAmountString(String(result));
      props.setAmount(result)
    } catch (error) {
      setAmountString("Error");
    }
  };

  const handleBackSpace = () => {
    setAmountString((prev) => {
      return prev.toString().slice(0, prev.toString().length - 1) || "0";
    });
  };
  const calculator_buttons: CalculatorButton[] = [
    { value: "+", onClick: NumberClicked },
    { value: "7", onClick: NumberClicked },
    { value: "8", onClick: NumberClicked },
    { value: "9", onClick: NumberClicked },
    { value: "-", onClick: NumberClicked },
    { value: "4", onClick: NumberClicked },
    { value: "5", onClick: NumberClicked },
    { value: "6", onClick: NumberClicked },
    { value: "*", onClick: NumberClicked },
    { value: "1", onClick: NumberClicked },
    { value: "2", onClick: NumberClicked },
    { value: "3", onClick: NumberClicked },
    { value: "/", onClick: NumberClicked },
    { value: "0", onClick: NumberClicked },
    { value: ".", onClick: NumberClicked },
    { value: "=", onClick: evaluate },
  ];
  return (
    <>
      <>
        <div className="p-1">
          <div className="flex rounded border px-1 w-full focus:border-0 justify-end gap-2 py-3">
            <span className="font-semibold text-4xl">{amountString}</span>
            <PiBackspace
              className="text-2xl my-auto"
              onClick={handleBackSpace}
            />
          </div>
        </div>
      </>

      <>
        <div className="p-1 grid grid-cols-4 flex-1 max-h-80">
          {calculator_buttons.map((button) => (
            <button
              className=" rounded border"
              onClick={button.onClick}
              key={button.value}
            >
              {button.value}
            </button>
          ))}
        </div>
      </>
    </>
  );
};

export default Calculator;
