export async function getPrices(selectedCurrency){
try {
const response = await fetch(`https://xaus.com/api/v1/spot?currency=${selectedCurrency}&unit=gram&compact=1`);
if (!response.ok){
    throw new Error("Failed to fetch prices");
}
const data = await response.json();
return data;
}
catch(error){
console.error(error);
throw error;
}}

export async function getHistoricalPrices(symbol, range){
const response = await fetch(`https://xaus.com/api/v1/chart?symbol=${symbol}&range=${range}&interval=1d`);
if (!response.ok) {
    throw new Error("Failed to fetch historical prices");
}
const data = await response.json();
return data;
}