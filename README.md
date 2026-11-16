# Mizan — Gold & Silver Price Dashboard

Mizan is a web application developed for **Bijouterie Al Andalous**, a jewellery shop in Nador, Morocco.

Its purpose is to display current gold and silver prices in MAD per gram and help shop staff follow market prices.

## Technologies

- HTML
- CSS
- JavaScript
- Fetch API
- LocalStorage

## API

Mizan currently uses the Xaus API:

`https://xaus.com/api/v1/spot?currency=MAD&unit=gram&compact=1`

It provides gold and silver prices, exchange rates, and update timestamps.

## Project Structure

```text
mizan/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js
    ├── api.js
    ├── calculator.js
    ├── charts.js
    ├── storage.js
    └── ui.js
```

## Implemented Features

- Fetch gold and silver prices from the API.
- Convert silver prices from USD per ounce to price per gram.
- Display prices in dynamically generated cards.
- Show the last update date and time.
- Calculate price differences and percentage changes.
- Display price variations with green, red, and neutral indicators.
- Save daily reference prices using LocalStorage.
- Allow currency selection (MAD, USD, EUR).
- Save the selected currency in LocalStorage.
- Display historical price charts for gold and silver.
- Select historical periods (7 days or 30 days).
- Handle API errors using try/catch.

## Upcoming Features

- Build a jewellery price estimator.
- Improve loading and error messages.
- Add request logging.

## Technical Choices

- Vanilla JavaScript without frameworks.
- ES modules to organize the code.
- Separate API, calculation, storage, chart, and UI logic.
- Use textContent to safely display API data.
- Use LocalStorage to save daily reference prices and currency preferences.
- Generate historical charts dynamically without external chart libraries.

---

**Project:** Mizan  
**Interface language:** French  
**Project type:** Front-end web application