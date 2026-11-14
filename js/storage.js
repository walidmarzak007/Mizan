import {getPreviousPrices, savePrices} from "./storage.js";

export function savePrices(metals){
    localStorage.setItem("previousPrices", JSON.stringify(metals));
}

export function getPreviousPrices (){
    const savedPrices = localStorage.getItem("previousPrices");
    if (savedPrices){
        return JSON.parse(savePrices);
    }
    return null

}