import { getPrices } from "./api.js";
import { renderPriceCards } from "./ui.js";
import { calculateSilverPrice, calculateVariation } from "./calculator.js";
import { getPreviousPrices, savePrices } from "./storage.js";

try{
const data = await getPrices();
const updatedAt = new Date(data.price_as_of);
const formattedDate = updatedAt.toLocaleString("fr-FR");
const calculatedSilverPrice = calculateSilverPrice(data);
const metals = [
    {
    name: "Prix de l'or",
    price: data.xau.price,
    currency: data.xau.currency
    },
    {
    name: "Prix de l'argent",
    price: calculatedSilverPrice,
    currency: "MAD"
    }];

const previousMetals = getPreviousPrices();

if (previousMetals){
metals.forEach((metal) => {
const previousMetal = previousMetals.find((item)=> item.name === metal.name);
if (previousMetal){
const variation = calculateVariation(metal.price, previousMetal.price);

console.log ("current price:",metal.price);
console.log ("previous price:", previousMetal.price);
console.log("variation:", variation);

metal.variation = variation;
}
});
}
savePrices(metals);

renderPriceCards(metals, formattedDate);
console.log(data)
}
catch (error){
console.error(error);
}


