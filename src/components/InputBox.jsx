import React, { useId } from "react";

const InputBox = ({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = ['usd', 'inr', 'pkr'],
  selectCurrency = "usd",
  amountDisbale = false,
  currencyDisble = false,
}) => {

    const amountInputId = useId()
  return (
    <>
      <div className={`bg-white p-3 rounded-lg flex ${className}`}>
        <div className="w-1/2">
          <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block capitalize">
            {label}
          </label>
          <input
            type="number"
            className="outline-none w-full bg-transparent py-1.5"
            placeholder="Amount"
            id={amountInputId}
            disabled={amountDisbale}
            value={amount}

            // the first onAmountChange is just a checker,
            // we used Number(e.target.value) to convert to nmbr because the e.target.value returns a str value not nmbr value
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>

        <div className="w-1/2 flex flex-wrap">
          <p className="text-black/40 mb-2 w-full capitalize">currency Type</p>
          <select
            className="rounded-lg p-1 bg-gray-100 outline-none cursor-pointer"
            disabled={currencyDisble}
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOption.map((option, ind)=>{
                return <option key={ind} value={option}>{option}</option>
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
