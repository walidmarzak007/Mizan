import { getPrices, getHistoricalPrices } from "./api.js";
import { renderPriceCards } from "./ui.js";
import { calculateSilverPrice, calculateVariation } from "./calculator.js";
import { getPreviousPrices, savePrices } from "./storage.js";

const currencySelect = document.getElementById("currency-select");
const savedCurrency = localStorage.getItem("selectedCurrency") || "MAD";
currencySelect.value = savedCurrency;

currencySelect.addEventListener("change",() =>{
const selectedCurrency = currencySelect.value;
localStorage.setItem("selectedCurrency", selectedCurrency);
loadPrices(selectedCurrency)
});

async function loadPrices(selectedCurrency) {
try{
const data = await getPrices(selectedCurrency);

const history = await getHistoricalPrices("xau", "1mo");
console.log(history.points);
console.log("Selected currency:", selectedCurrency);
console.log("Gold data:", data.xau);
console.log("USD per gram:", data.per_gram_usd);
console.log("Exchange rate:", data.fx_rate);

const updatedAt = new Date(data.price_as_of);

const formattedDate = updatedAt.toLocaleString("fr-FR");

const calculatedSilverPrice = calculateSilverPrice(data);

const metals = 
[{
    name: "Prix de l'or",
    price: data.xau.price,
    currency: data.xau.currency
    },{

    name: "Prix de l'argent",
    price: calculatedSilverPrice,
    currency: data.xau.currency
}];

const previousMetals = getPreviousPrices(selectedCurrency);

if (previousMetals){
metals.forEach((metal) => {
const previousMetal = previousMetals.find((item) => item.name === metal.name && item.currency === metal.currency);
if (previousMetal){
const variation = calculateVariation(metal.price, previousMetal.price);

console.log ("current price:",metal.price);
console.log ("previous price:", previousMetal.price);
console.log("variation:", variation);

metal.variation = variation;
}
});
}
savePrices(metals, selectedCurrency);

renderPriceCards(metals, formattedDate);
console.log(data)
}
catch (error){
console.error(error);
}
}
loadPrices(savedCurrency);

