# Zip codes searcher

## Setup project

```bash
npm install
```

## Development

Run dev server with HMR

```bash
npm start
```

## Building

```bash
npm run build
```

## Linting

Run ESlint check on the entire project with autofix

```bash
npm run lint
```

## Technical requirements

Make an App that has an 

- [x] input field
- [x] button
- [x] list of city, states
- [x] user should be able to enter a zipcode into the field and press the button to save the city and state to the list.

Bonus: 

- [x] input should clear on submit
- [x] Don't allow duplicate records - same zip code wont be stored 2 or more times
- [x] Selecting an item in the list should fill the input with the zip code that was used to look up the city and state
- [x] when a list item is selected it should appear selected
- [x] if the user enters a new zip code while an item is selected and hits the button, the record should be updated (if valid input)
- [x] User should be able to deselect selected item
