import { getPrices } from "./api.js";
import { renderPriceCards } from "./ui.js";
import { calculateSilverPrice, calculateVariation } from "./calculator.js";
import { getPreviousPrices } from "./storage.js";

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
    }
];
const previousMetals = getPreviousPrices();
renderPriceCards(metals, formattedDate);
console.log(data)
}
catch (error){
console.error(error);
}


