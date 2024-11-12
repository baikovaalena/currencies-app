import { useEffect, useState } from "react";
import { getCurrencies, getInfoCurrencies } from "../../../api";
import CurrenciesCard from "./CurrenciesCard/CurrenciesCard";
import "./Currencies.css";
import Loader from "../../shared/Loader/Loader";

const Currencies = () => {
  const [currencies, setCurrencies] = useState(null);
  const [infoCurrencies, setInfoCurrencies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCurrencyData() {
      try {
        const currentCurrencies = await getCurrencies();
        const information = await getInfoCurrencies();
        setInfoCurrencies(information);
        setCurrencies(currentCurrencies);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCurrencyData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {currencies && infoCurrencies && (
        <CurrenciesCard
          rates={currencies}
          infoCurrencies={infoCurrencies.supportedCurrenciesMap}
        />
      )}
    </>
  );
};

export default Currencies;
