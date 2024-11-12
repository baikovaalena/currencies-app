import React, { useEffect, useState } from "react";
import "./CurrencySearch.css";

function getOptions(value, infoCurrencies) {
  const regex = new RegExp(value, "gi");
  return Object.entries(infoCurrencies).filter((rate) => {
    return regex.test(rate[0]);
  });
}

const CurrencySearch = ({
  infoCurrencies,
  onCurrencyKeySelect,
  currenciesCodes,
}) => {
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setValue("");
      }
    };

    const handleMouseClick = () => {
      setValue("");
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleMouseClick);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleMouseClick);
    };
  }, []);

  useEffect(() => {
    if (value && infoCurrencies) {
      const options = getOptions(value, infoCurrencies);
      setFilteredOptions(options);
    } else {
      setFilteredOptions([]);
    }
  }, [value, infoCurrencies]);

  return (
    <div className="container-addition">
      <div className="container-addition__position">
        <input
          type="text"
          className="container-addition__input-add"
          placeholder="Добавить страну (код)"
          value={value}
          onChange={handleChange}
          onClick={(event) => event.stopPropagation()}
        />

        {value.length > 0 && (
          <ul
            className="filteredOptions-list"
            id="list"
            onClick={(event) => event.stopPropagation()}
          >
            {filteredOptions.map((option) => {
              const { currencyCode, countryName, icon } = option[1];

              return (
                <li
                  className={
                    currenciesCodes.includes(currencyCode)
                      ? "select"
                      : "search-list"
                  }
                  key={currencyCode}
                  onClick={() => {
                    onCurrencyKeySelect(currencyCode);
                    setValue("");
                  }}
                >
                  <div className="personal-list__country">
                    <p>{currencyCode}</p>
                    <p>{countryName}</p>
                    <img src={icon} className="personality-flags" alt="flags" />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default CurrencySearch;
