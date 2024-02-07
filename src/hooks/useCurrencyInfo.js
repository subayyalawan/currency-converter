import React, { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  const currencyFetch = async () => {
    try {
      await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
        .then((resp) => resp.json())
        .then((resp) => setData(resp[currency]));
    //   console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    currencyFetch();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
