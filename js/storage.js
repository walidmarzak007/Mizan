
export function savePrices(metals, currency) {
    const today = new Date().toLocaleDateString("en-CA");
    const key = `dailyReference-${currency}-${today}`;

    // Keep the first prices saved today.
    if (localStorage.getItem(key)) {
        return;
    }

    const pricesToSave = metals.map((metal) => ({
        name: metal.name,
        price: metal.price,
        currency: metal.currency
    }));

    localStorage.setItem(key, JSON.stringify(pricesToSave));
}

export function getPreviousPrices(currency) {
    const today = new Date().toLocaleDateString("en-CA");
    const key = `dailyReference-${currency}-${today}`;

    const savedPrices = localStorage.getItem(key);

    return savedPrices ? JSON.parse(savedPrices) : null;
}
