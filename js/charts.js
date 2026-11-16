export function renderHistoryChart(points, currency) {
const historyChart = document.getElementById("history-chart");
historyChart.textContent = "";

if (points.length === 0) {
    historyChart.textContent = "Aucune donnée historique disponible.";
    return;
}
const maxPrice = Math.max(...points.map(point => point.price));

const barsContainer = document.createElement("div");
barsContainer.classList.add("chart-bars");

historyChart.append(barsContainer);

points.forEach((point) => {
const bar = document.createElement("div");
bar.classList.add("chart-bar");

const barHeight = (point.price / maxPrice) * 100;
bar.style.height = `${barHeight}%`;

const priceLabel = document.createElement("span");
priceLabel.textContent = `${point.price.toFixed(2)} ${currency}`;
bar.append(priceLabel);

const dateLabel = document.createElement("span");

const date = new Date(point.timestamp * 1000);

dateLabel.textContent = date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit"
});

bar.append(dateLabel);
barsContainer.append(bar);
});
}