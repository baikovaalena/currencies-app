import "./MetalsCard.css";
import iconDollar from "../../../../img/currency-dollar.png";
const metalsArray = ["XAU", "XAG", "XPT", "XPD"];

function MetalsCard({ infoMetals, metals }) {
  const metalsRatesArray = Object.entries(metals.rates);
  const filteredMetalsRates = metalsRatesArray.filter((metal) => {
    return metalsArray.includes(metal[0]);
  });

  const favoriteMetalsData = filteredMetalsRates.map((metal) => {
    return {
      key: metal[0],
      rate: metal[1],
      info: infoMetals.supportedCurrenciesMap[metal[0]],
    };
  });

  return (
    <>
      <div className="metals-background">
        <div className="container-metals">
          {favoriteMetalsData.map((metal) => {
            return (
              <div className="container__metal" key={metal.rate}>
                <p className="container__metal-info">
                  {metal.info.currencyName}
                </p>
                <p className="container__metal-info">
                  {metal.info.currencyCode}
                </p>
                <p className="container__metal-info">
                  <img
                    src={iconDollar}
                    alt="Currency Icon"
                    className="currency-dollar"
                  />
                </p>
                <p className="container__metal-info">
                  {Math.round(metal.rate * 1e6) / 1e6}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MetalsCard;
