export async function getPrices (){
try {
const response = await fetch("https://xaus.com/api/v1/spot?currency=MAD&unit=gram&compact=1");
if (!response.ok){
    throw new Error("Failed to fetch prices");
}
const data = await response.json();
return data;
}
catch(error){
console.error(error);
throw error;
}
}