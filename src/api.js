const API_KEY = "6acd4e1f9fd8409ea697c64e85e15ab2";

export async function getCurrencies() {
  const response = await fetch(
    `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}

export async function getInfoCurrencies() {
  const response = await fetch(
    "https://api.currencyfreaks.com/v2.0/supported-currencies",
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}

export async function getSearchRates(value) {
  const response = await fetch(
    `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}&symbols=${value}`,
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}
