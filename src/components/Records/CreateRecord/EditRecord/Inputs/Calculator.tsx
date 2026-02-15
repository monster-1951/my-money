import { XmarkCircle } from "iconoir-react";
import * as math from "mathjs";
interface CalculatorButton {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface CalculatorProps {
  amount:string
  setAmount: React.Dispatch<React.SetStateAction<string>>
  
}

const Calculator = (props: CalculatorProps) => {
  const NumberClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const value = e.currentTarget.innerText;
    props.setAmount((prev) => {
      if(prev==="Error") prev=""
      return prev + value;
    });
  };

  const evaluate = () => {
    try {
      const result = math.evaluate(props.amount);
      console.log(result);
      props.setAmount(result)
    } catch (error) {
      props.setAmount("Error");
    }
  };

  const handleBackSpace = () => {
    props.setAmount((prev) => {
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
            <span className="font-semibold text-4xl">{props.amount}</span>
            <XmarkCircle
              className="my-auto"
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
