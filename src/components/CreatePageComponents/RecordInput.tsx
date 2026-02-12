import { CiWallet } from "react-icons/ci";
import type { account, Category, record_type } from "../../types/types";
import { IoAddCircleOutline } from "react-icons/io5";
import { PiBackspace } from "react-icons/pi";
import React, { useState } from "react";
import * as math from "mathjs";
import { mockAccounts, mockCategories } from "../../lib/constants";
import { Link } from "react-router-dom";
import { IconsMap } from "../../lib/iconsMap";
interface RecordInputProps {
  record_type: record_type;
  amount: number;
}

interface CalculatorButton {
  value: string;
  onClick: Function;
}

interface SelectOptionProps {
  accounts?: account[];
  categories?: Category[];
}

const RecordInput = (props: RecordInputProps) => {
  const [amountString, setAmountString] = useState<string>("0");
  const [account, setAccount] = useState<number>(0);
  const [accountName, setAccountName] = useState("Account");
  const [category, setCagetory] = useState<number>(0);
  const [accountIcon, setAccountIcon] = useState(31);
  const [CategoryIcon, setCategoryIcon] = useState(30);
  const [categoryName, setCategoryName] = useState("Category");
  const [selctAccountMenuOpen, setSelectAccountMenuOpen] = useState(false);
  const [selctCategoryMenuOpen, setSelctCategoryMenuOpen] = useState(false);

  const handleAccountChange = (option: number) => {
    const name = mockAccounts.find((a) => a.id === option)?.name;
    const icon_id = mockAccounts.find((c) => c.id === option)?.icon;
    const icon = IconsMap.findIndex((i) => i.icon_id === icon_id);
    setAccountIcon(icon)
    setAccount(Number(option));
    setAccountName(name || "Account");
    setSelectAccountMenuOpen((prev) => !prev);
    console.log(category,account)
  };

  const handleCategoryChange = (option: number) => {
    const name = mockCategories.find((a) => a.id === option)?.name;
    const icon_id = mockCategories.find((c) => c.id === option)?.icon;
    const icon = IconsMap.findIndex((i) => i.icon_id === icon_id);
    setCategoryIcon(icon);
    setCagetory(Number(option));
    setCategoryName(name || "Category");
    setSelctCategoryMenuOpen((prev) => !prev);
  };
  const SelectOptions = (props: SelectOptionProps) => {
    return (
      <>
        <div
          className={`flex-1 z-10 bottom-0 left-0 fixed border bg-white w-full flex flex-col justify-center p-5 gap-5`}
        >
          {props.accounts && (
            <>
              <div className="text-center text-xl">Select an accoount</div>
              <div className="flex flex-col py-5 gap-5 max-h-80 overflow-scroll shadow-inner">
                {props.accounts.map((a) => {
                  return (
                    <button
                      key={a.id}
                      onClick={() => {
                        handleAccountChange(a.id);
                      }}
                      className="mx-auto p-3 w-full flex justify-between"
                    >
                      <span className="flex p-3 gap-2">
                        <span>
                          {IconsMap.find((i) => i.icon_id === a.icon)?.element}
                        </span>
                        <span className="my-auto"> {a.name}</span>
                      </span>
                      <span>{a.balance}</span>
                    </button>
                  );
                })}
              </div>

              <Link to={"/"}>
                <button className="border flex justify-center p-2 gap-3 w-fit mx-auto">
                  <IoAddCircleOutline className="text-2xl" />
                  <span>ADD NEW ACCOUNT</span>
                </button>
              </Link>
            </>
          )}
          {props.categories && (
            <>
              {" "}
              <div className="text-center text-xl">Select a category</div>
              <div className="grid grid-cols-3 max-h-150 overflow-scroll shadow-inner">
                {props.categories.map((category) => (
                  <button
                    key={category.id}
                    className="flex flex-col p-5 gap-3 justify-between"
                    onClick={() => {
                      handleCategoryChange(category.id);
                    }}
                  >
                    <span className="rounded-full border w-fit p-2 mx-auto">
                      {
                        IconsMap.find((icon) => icon.icon_id === category.icon)
                          ?.element
                      }
                    </span>
                    <span className="p-2 text-xl"> {category.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </>
    );
  };

  const NumberClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("clicked", e.currentTarget.innerText);
    const value = e.currentTarget.innerText;
    setAmountString((prev) => prev + value);
    console.log(amountString);
  };
  const handleBackSpace = () => {
    setAmountString((prev) => prev.toString().slice(0, prev.length - 1));
  };
  const evaluate = () => {
    const result = math.evaluate(amountString);
    console.log(result);
    setAmountString(result);
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
    <div className="flex flex-col py-3 flex-1">
      <>
        <div className="flex justify-around">
          <button className="w-full text-xs font-light">Account</button>
          <button className="w-full text-xs font-light">
            {props.record_type !== "Transfer" ? "Category" : "To"}
          </button>
        </div>
        <div className="flex justify-around px-1 py-2 space-x-1 font-semibold">
          <button
            className="w-full border flex justify-center rounded py-2 space-x-1"
            onClick={() => {
              setSelectAccountMenuOpen((prev) => !prev);
            }}
          >
            {IconsMap[accountIcon].element}
            <span className="my-auto text-xl">{accountName}</span>
          </button>
          {selctAccountMenuOpen && (
            <div className="fixed inset-0 bg-black/40">
              <SelectOptions accounts={mockAccounts} />
            </div>
          )}
          {props.record_type !== "Transfer" && (
            <button
              className="w-full border flex justify-center rounded py-2 space-x-1"
              onClick={() => {
                setSelctCategoryMenuOpen((prev) => !prev);
              }}
            >
              {IconsMap[CategoryIcon].element}
              <span className="my-auto text-xl">{categoryName}</span>
            </button>
          )}
          {selctCategoryMenuOpen && (
            <div className="fixed inset-0 bg-black/40">
              <SelectOptions categories={mockCategories} />
            </div>
          )}
          {props.record_type === "Transfer" && (
            <div className="w-full border flex justify-center rounded py-2 space-x-1">
              <CiWallet className="text-2xl" />
              <span>Account</span>
            </div>
          )}
        </div>
      </>

      <>
        <div className="p-1 flex-1 border mx-1">
          <textarea
            className="rounded px-1 w-full h-full min-h-5 resize-none"
            placeholder="Add notes"
          />
        </div>
      </>

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
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                button.onClick(e);
              }}
              key={button.value}
            >
              {button.value}
            </button>
          ))}
        </div>
      </>
    </div>
  );
};

export default RecordInput;
