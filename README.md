# ShopVerse 2

A super simple product showcase built with React. No backend, no admin panel—just static files and a clean UI.

## Features
- Displays a list of products from a static JSON file
- Clean, responsive layout
- Easy to deploy as a static site
- Purchase via SMS button for each product (phone number set in .env)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root of `shopverse_2`:
   ```env
   PORT=3000
   REACT_APP_SMS_PHONE=+1234567890
   ```
3. Start the app:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal)

## Project Structure
- `public/` — Static files, including `index.html`, `products.json`, and images
- `src/` — React components

## Customizing Products
Edit `public/products.json` to add, remove, or update products. Each product should have:
- `id`: unique number
- `name`: product name
- `description`: product description
- `image`: image URL (relative to `public/` or external)

## Changing the SMS Phone Number
Edit the `.env` file and set `REACT_APP_SMS_PHONE` to your desired phone number. Restart the app to apply changes.

## License
MIT 