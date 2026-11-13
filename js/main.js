import { showPriceError, updateGoldPrice, updateSilverPrice } from "./ui.js";
import { getPrices } from "./api.js";
import { calculateSilverPrice } from "./calculator.js";

try{
const data = await getPrices();

updateGoldPrice(data.xau.price);

const calculatedSilverPrice = calculateSilverPrice(data);

updateSilverPrice(calculatedSilverPrice);
}
catch (error){
console.error(error);
showPriceError();
}

