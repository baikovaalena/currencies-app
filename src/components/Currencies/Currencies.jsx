import { useEffect, useState } from "react";
import { getCurrencies, getInfoCurrencies } from "../../api";
import CurrenciesCard from "../CurrenciesCard/CurrenciesCard";

function Currencies() {
  const [currencies, setCurrencies] = useState(null);
  const [infoCurrencies, setInfoCurrencies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function handleInfoCurrencies() {
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

    handleInfoCurrencies();
  }, []);

  return (
    <>
      {isLoading && <p>Загрузка...</p>}
      {error && <p>Error: {error}</p>}

      {currencies && infoCurrencies && (
        <CurrenciesCard
          currencies={currencies}
          infoCurrencies={infoCurrencies}
        />
      )}
    </>
  );
}

export default Currencies;
