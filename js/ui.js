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

      if (metal.variation) {
          const variationText = document.createElement("p");

      if (metal.variation.difference > 0) {
         variationText.classList.add("variation-up");
         variationText.textContent = `↑ +${metal.variation.difference.toFixed(2)} ${metal.currency} (+${metal.variation.percentage.toFixed(2)}%)`;

     } else if (metal.variation.difference < 0) {
         variationText.classList.add("variation-down");
         variationText.textContent = `↓ ${metal.variation.difference.toFixed(2)} ${metal.currency} (${metal.variation.percentage.toFixed(2)}%)`;

     } else {
         variationText.classList.add("variation-neutral");
         variationText.textContent = `→ 0.00 ${metal.currency} (0.00%)`;
     }

         card.append(variationText);

     } else {
          const variationText = document.createElement("p");
         variationText.textContent = "Variation indisponible";
         card.append(variationText);
     }

         const date = document.createElement("p");
         date.textContent = `Dernière mise à jour : ${formattedDate}`;

         card.append(date);

         pricesContainer.append(card);
});
}