export function calculateSilverPrice(data){
return (data.silver_usd_oz * data.fx_rate) / 31.1035;
}

export function calculateVariation(currentPrice, previousPrice){
    if ( previousPrice === 0 ){
        return null;
    }
    const difference = currentPrice - previousPrice;
    const percentage = (difference / previousPrice) *100;

    return {
        difference: difference,
        percentage: percentage
    }
}