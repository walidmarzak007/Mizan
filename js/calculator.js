export function calculateSilverPrice(data){
return (data.silver_usd_oz * data.fx_rate) / 31.1035;
}