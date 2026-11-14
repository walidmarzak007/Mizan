const pricesContainer = document.getElementById("prices-container");

export function renderPriceCards(metals, formattedDate) {
    pricesContainer.textContent = "";

    metals.forEach((metal) => {
         const card = document.createElement("section");
         card.classList.add("price-card");

         const title = document.createElement("h2");
         title.textContent = metal.name;

         card.append(title);

         const price = document.createElement("p");
         price.classList.add("price-value");

         price.textContent = `${metal.price.toFixed(2)} ${metal.currency}`;

         card.append(price);

         if (metal.variation){
         const variationText = document.createElement("p");

         variationText.textContent = `${metal.variation.percentage.toFixed(2)} %`;
         card.append(variationText);

         }else{
         const variationText = document.createElement("p");
         variationText.textContent = "variation indisponible";
         card.append(variationText);
         }

         const date = document.createElement("p");
         date.textContent = `Dernière mise à jour : ${formattedDate}`;

         card.append(date);

         pricesContainer.append(card);
});
}