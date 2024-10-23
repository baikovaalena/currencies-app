import "./CurrenciesCard.css";
import iconDollar from '../images/currency-dollar.png'


function CurrenciesCard({currencies, infoCurrencies}) {
    const currency = ['RUB', 'EUR', 'CNY', 'CHF', 'JPY', 'GBP', 'AUD', 'AUD']
    const currenciesObject = Object.entries(currencies.rates)
    const filteredRates = currenciesObject.filter(rate => {
        return currency.includes(rate[0])
    })

    const objCurrencies = filteredRates.map(rate => {
        return {
            key: rate[0],
            rate: rate[1],
            info: infoCurrencies.supportedCurrenciesMap[rate[0]],
        }
    })

    return (
        <div className='main'>
            <table className="table">
                <thead className='table__head'>
                <tr className='table__line'>
                    <th>Влюта</th>
                    <th>Страна</th>
                    <th>USD</th>
                    <th>Покупка</th>
                </tr>
                </thead>
                <tbody>
                {
                    objCurrencies.map((rate) => {
                        return (
                            <tr className='table__line' key={rate.rate}>
                                <td className='table__cell'>{rate.key}</td>
                                <td className='table__cell'>
                                    <div className='table__cell-flag'>
                                        {rate.info.countryName}
                                        <img src={rate.info.icon} alt="currency-icon" className='currency-icon'/>
                                    </div>
                                </td>
                                <td className='table__cell'>
                                    <img src={iconDollar} alt="Currency Icon" className="currency-dollar"/>
                                </td>
                                <td className='table__cell'>{Math.round(rate.rate * 1000) / 1000}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default CurrenciesCard;