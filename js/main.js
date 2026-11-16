import { getPrices, getHistoricalPrices } from "./api.js";
import { renderPriceCards } from "./ui.js";
import { calculateSilverPrice, calculateVariation, convertHistoricalPrice } from "./calculator.js";
import { getPreviousPrices, savePrices } from "./storage.js";
import { renderHistoryChart } from "./charts.js";

const currencySelect = document.getElementById("currency-select");

const savedCurrency = localStorage.getItem("selectedCurrency") || "MAD";
currencySelect.value = savedCurrency;

let currentExchangeRate;

const metalSelect = document.getElementById("metal-select");
const historyPeriod = document.getElementById("history-period");

currencySelect.addEventListener("change",() =>{
const selectedCurrency = currencySelect.value;

localStorage.setItem("selectedCurrency", selectedCurrency);

loadPrices(selectedCurrency)
});

async function loadPrices(selectedCurrency) {
try{

const data = await getPrices(selectedCurrency);
currentExchangeRate = data.fx_rate;

const updatedAt = new Date(data.price_as_of);

const formattedDate = updatedAt.toLocaleString("fr-FR");

const calculatedSilverPrice = calculateSilverPrice(data);

const metals = 
[{
    name: "Prix de l'or",
    price: data.xau.price,
    currency: selectedCurrency
    },{

    name: "Prix de l'argent",
    price: calculatedSilverPrice,
    currency: selectedCurrency
}];

const previousMetals = getPreviousPrices(selectedCurrency);

metals.forEach((metal) => {
    const previousMetal = previousMetals?.find((item) =>
        item.name === metal.name && item.currency === metal.currency
    );

    if (previousMetal) {
        metal.variation = calculateVariation(
            metal.price,
            previousMetal.price
        );
    } else {
        metal.variation = null;
    }
});

savePrices(metals, selectedCurrency);

renderPriceCards(metals, formattedDate);
await loadHistory();
}
catch (error){
console.error(error);
}
}

async function loadHistory() {
 const symbol = metalSelect.value;

 const range = historyPeriod.value;

 const history = await getHistoricalPrices(symbol, range);

 const points = history.points.map((point) => ({
 price: convertHistoricalPrice(point.c, currentExchangeRate),
 timestamp: point.t
}));
renderHistoryChart(points, currencySelect.value);
}

metalSelect.addEventListener("change", loadHistory);
historyPeriod.addEventListener("change", loadHistory);
loadPrices(savedCurrency);

