export function savePrices(metals, currency){
localStorage.setItem(`previousPrices-${currency}`, JSON.stringify(metals));
}

export function getPreviousPrices (currency){
const savedPrices = localStorage.getItem(`previousPrices-${currency}`);

    if (savedPrices){
        return JSON.parse(savedPrices);
    }
    return null;
}