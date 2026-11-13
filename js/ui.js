const goldPriceElement = document.getElementById("gold-price")

export function updateGoldPrice(goldPrice){
goldPriceElement.textContent = goldPrice.toFixed(2);
}

const silverPriceElement = document.getElementById("silver-price")

export function updateSilverPrice(silverPrice){
silverPriceElement.textContent = silverPrice.toFixed(2);
}

export function showPriceError() {
goldPriceElement.textContent = "Impossible de charger les prix";
silverPriceElement.textContent = "Impossible de charger les prix";
}

//import { updateGoldPrice, updateSilverPrice, showPriceError } from "./ui.js";