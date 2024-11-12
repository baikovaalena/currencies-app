import "./CurrenciesCard.css";
import iconDollar from "../../../../img/currency-dollar.png";
import CurrencySearch from "./CurrencySearch/CurrencySearch";
import { useState } from "react";

const CurrenciesCard = ({ rates, infoCurrencies }) => {
  const [currenciesCodes, setCurrenciesCodes] = useState([
    "GBP",
    "RUB",
    "JPY",
    "EUR",
    "CHF",
    "CNY",
    "AUD",
    "CAD",
    "NZD",
    "SEK",
  ]);

  const handleSelectCurrencyKey = (currency) => {
    if (!currenciesCodes.includes(currency)) {
      setCurrenciesCodes((prev) => [...prev, currency]);
    }
  };

  const handleDeleteCurrencyKey = (currency) => {
    setCurrenciesCodes((prev) => prev.filter((item) => item !== currency));
    if (currenciesCodes.includes(currency)) {
      setCurrenciesCodes((prev) => prev.filter((item) => item !== currency));
    } else {
      setCurrenciesCodes(currency);
    }
  };

  return (
    <div className="currency-card-input__container">
      <CurrencySearch
        currenciesCodes={currenciesCodes}
        infoCurrencies={infoCurrencies}
        onCurrencyKeySelect={handleSelectCurrencyKey}
      />

      {currenciesCodes.length === 0 ? (
        <p className="add-code-in-table">
          Таблица пуста. Добавьте новую валюту!
        </p>
      ) : (
        <div className="main-table">
          <table className="table">
            <thead className="table__head">
              <tr className="table__line">
                <th>Влюта</th>
                <th>Страна</th>
                <th>USD</th>
                <th>Покупка</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {currenciesCodes.map((currency) => {
                const info = infoCurrencies[currency];
                const rate = rates.rates[currency];

                return (
                  <tr className="table__line" key={currency}>
                    <td className="table__cell">{currency}</td>
                    <td className="table__cell">
                      <div className="table__cell-flag">
                        {info.countryName}
                        <img
                          src={info.icon}
                          alt="currency-icon"
                          className="currency-icon"
                        />
                      </div>
                    </td>
                    <td className="table__cell">
                      <img
                        src={iconDollar}
                        alt="Currency Icon"
                        className="currency-dollar"
                      />
                    </td>
                    <td className="table__cell">
                      {Math.round(rate * 1000) / 1000}
                    </td>
                    <td className="table__cell">
                      <button
                        onClick={() => handleDeleteCurrencyKey(currency)}
                        className="table__cell-button"
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CurrenciesCard;
