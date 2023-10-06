import React, { useState, useEffect } from "react";
import axios from "axios";
import PageNav from "./PageNav";
import { BASE_URL } from "../App";
const BitcoinPriceIndexPage = () => {
  const [priceData, setPriceData] = useState({});
  const [refreshInterval, setRefreshInterval] = useState(5);
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState({});
  console.log(priceData);
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, refreshInterval * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [refreshInterval]);

  useEffect(() => {
    filterPrices();
  }, [priceData, selectedCurrencies]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
       BASE_URL
      );
      setPriceData(response.data);
    } catch (error) {
      console.error("Error fetching price data:", error);
    }
  };

  const handleIntervalChange = (event) => {
    setRefreshInterval(event.target.value);
  };

  const handleCurrencyToggle = (currency) => {
    if (selectedCurrencies.includes(currency)) {
      setSelectedCurrencies(selectedCurrencies.filter((c) => c !== currency));
    } else {
      setSelectedCurrencies([...selectedCurrencies, currency]);
    }
  };

  const filterPrices = () => {
    if (selectedCurrencies.length === 0) {
      setFilteredPrices({});
    } else {
      const filteredPrices = {};
      for (const currency of selectedCurrencies) {
        if (priceData.bpi && priceData.bpi[currency]) {
          filteredPrices[currency] = priceData.bpi[currency];
        }
      }
      setFilteredPrices(filteredPrices);
    }
  };

  useEffect(() => {
    // Select all available currencies initially
    setSelectedCurrencies(Object.keys(priceData.bpi || {}));
  }, [priceData]);
  console.log(filteredPrices);
  return (
    <div className="container mx-auto p-4">
      <PageNav />
      <div className="mt-8">
        <div className="text-3xl flex justify-center mx-auto p-2 rounded-md font-bold mb-4">
          <h2 className="bg-clip-text bg-gradient-to-r from-[#f17b85] via-[#fee4a5] to-[#9078d0] text-transparent">
            Bitcoin (BTC) Price Index
          </h2>
        </div>
        <p className="mb-4">Updated at: {priceData.time?.updated}</p>
        <p className="mb-4">{priceData.disclaimer}</p>
        <div className="mb-4">
          <label htmlFor="interval" className="mr-2">
            Refresh Interval (seconds):
          </label>
          <input
            type="number"
            id="interval"
            value={refreshInterval}
            onChange={handleIntervalChange}
            className="p-2 border rounded text-black"
          />
        </div>
        <div className=" mt-8">
          <h2 className="text-2xl font-bold mb-2 bg-clip-text bg-gradient-to-r from-[#f17b85] via-[#fee4a5] to-[#9078d0] text-transparent">
            Currencies
          </h2>
          <div className="flex items-center gap-4">
            {Object.keys(priceData.bpi || {}).map((currency) => (
              <label className="flex items-center" key={currency}>
                <input
                  type="checkbox"
                  checked={selectedCurrencies.includes(currency)}
                  onChange={() => handleCurrencyToggle(currency)}
                  className="mr-2"
                />
                {currency}
              </label>
            ))}
          </div>
        </div>
        <ul className="mt-8">
          {Object.keys(filteredPrices).map((currency) => (
            <li
              key={currency}
              className="mb-4 bg-black opacity-75 p-2 text-2xl rounded-md"
            >
              {currency} - {filteredPrices[currency].rate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BitcoinPriceIndexPage;
