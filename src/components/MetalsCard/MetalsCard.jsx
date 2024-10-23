import './MetalsCard.css'
import iconDollar from "../images/currency-dollar.png";

function MetalsCard({infoMetals, metals}) {
    const metalsArray = ['XAU', 'XAG', 'XPT', 'XPD'];
    const metalsObject = Object.entries(metals.rates)
    const metalsFiltered = metalsObject.filter(metal => {
        return metalsArray.includes(metal[0])
    })

    const metalsFavorites = metalsFiltered.map(metal => {
        return {
            key: metal[0],
            rate: metal[1],
            info: infoMetals.supportedCurrenciesMap[metal[0]],
        }
    })

    return (
        <>
            <div className='metals-background'>
                <div className='container'>
                    {
                        metalsFavorites.map(metal => {
                            return (
                                <div className='container__metal' key={metal.rate}>
                                    <p className='container__metal-info'>{metal.info.currencyName}</p>
                                    <p className='container__metal-info'>{metal.info.currencyCode}</p>
                                    <p className='container__metal-info'>
                                        <img src={iconDollar} alt="Currency Icon" className="currency-dollar"/>
                                    </p>
                                    <p className='container__metal-info'>{Math.round(metal.rate * 1e6) / 1e6}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MetalsCard;