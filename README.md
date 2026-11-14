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

## Implemented Features

- Fetch gold and silver prices from the API.
- Convert silver prices from USD per ounce to MAD per gram.
- Display prices in dynamically generated cards.
- Show the last update date and time.
- Save and retrieve prices using LocalStorage.
- Calculate price differences and percentage changes.
- Handle API errors using try/catch.

## Upcoming Features

- Display price variations in the cards.
- Add currency selection (MAD, USD, EUR).
- Display historical price charts.
- Build a jewellery price estimator.
- Improve loading and error messages.

## Technical Choices

- Vanilla JavaScript without frameworks.
- ES modules to organize the code.
- Separate API, calculation, storage, and UI logic.
- Use textContent to safely display API data.
- Use LocalStorage to save previous prices.

---

**Project:** Mizan  
**Interface language:** French  
**Project type:** Front-end web application