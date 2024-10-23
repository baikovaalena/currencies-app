import { useEffect, useState } from "react";
import { getCurrencies, getInfoCurrencies } from "../../api";
import MetalsCard from "../MetalsCard/MetalsCard";

function Metals() {
  const [metals, setMetals] = useState(null);
  const [infoMetals, setInfoMetals] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function handleInfoCurrencies() {
      try {
        const currentMetals = await getCurrencies();
        const informationMetals = await getInfoCurrencies();
        setInfoMetals(informationMetals);
        setMetals(currentMetals);
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

      {metals && infoMetals && (
        <MetalsCard metals={metals} infoMetals={infoMetals} />
      )}
    </>
  );
}

export default Metals;
