import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [amountFrom, setAmountFrom] = useState("usd");
  const [amountTo, setAmountTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(amountFrom);
  // console.log(currencyInfo);
  const options = Object.keys(currencyInfo);

  const onSwap = () => {
    setAmountTo(amountFrom);
    setAmountFrom(amountTo);
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
  };

  const handleConvert = () => {
    setConvertedAmount(amount * currencyInfo[amountTo]);
    // console.log(convertedAmount);
  };

  return (
    <div className="bg-gray-800 min-h-screen w-full flex justify-center items-center flex-wrap">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-md bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={amountFrom}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md  bg-blue-600 text-white px-2 py-1"
                onClick={onSwap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="from"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setAmountTo(currency)}
                selectCurrency={amountTo}
                amountDisbale
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={handleConvert}
            >
              Convert {amountFrom.toUpperCase()} to {amountTo.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
