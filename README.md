This project was bootstrapped with [Vite](https://vitejs.dev/), a fast development build tool for modern web applications.

# Page One
# Bitcoin Price Index Page

This is a React application that displays the current Bitcoin (BTC) price index using data retrieved from the CoinDesk Bitcoin Price Index API. The application allows users to customize the displayed currencies, refresh interval, and toggle the currencies on/off. It also saves the user's preferences for future visits


## Features:
Display of BTC price index in USD, GBP, and EUR currencies
Automatic data refresh at a specified interval
Customizable data refresh interval
User preferences for displayed currencies are saved
Checkbox-based currency selection for filtering displayed prices

## Technologies:
-React.js: JavaScript library for building user interfaces
-Axios: Promise-based HTTP client for API requests
-Tailwind CSS: Utility-first CSS framework for styling

## Getting Started:
-Clone this repository to your local machine.
-Navigate to the bitcoin-price-index directory.
-Install the dependencies using the command npm install.
-Start the application using the command npm run dev.
-Open your browser and access the application at http://localhost:5173.

## Usage:
-The application will initially display the BTC price index in USD, GBP, and EUR currencies.
-The prices will automatically refresh every 5 seconds (configurable).
-To change the data refresh interval, modify the input field labeled "Refresh Interval (seconds)".
-To toggle the display of a specific currency, click on its corresponding checkbox.
-The application will remember your preferences, so when you revisit the page, the selected currencies and refresh interval will be restored.

# Page Two
# NFT List page
This is a React application that lists the NFTs owned by a connected user's wallet. It retrieves the NFT data from the Rarible API and displays it in a responsive layout. The application allows users to connect their wallet using MetaMask and fetches the NFTs associated with their wallet address.

## Features:
-Connects wallet using MetaMask to retrieve the connected user's account
-Display of NFTs owned by the connected wallet
-Retrieval of NFT data from the Rarible API
-Responsive layout to accommodate different screen sizes

## Technologies:
-React.js: JavaScript library for building user interfaces
-Axios: Promise-based HTTP client for API requests
-Tailwind CSS: Utility-first CSS framework for styling

## Getting Started:
-Clone this repository to your local machine.
-Navigate to the nft-list directory.
-Install the dependencies using the command npm install.
-Start the application using the command npm run dev.
-Open your browser and access the application at http://localhost:5173.

## Usage:
-Click the "Connect Wallet" button to connect your MetaMask wallet.
-MetaMask will prompt you to authorize the connection. Grant the necessary permissions.
-The application will retrieve your wallet address and display it on the page.
-The NFTs owned by your wallet will be fetched from the Rarible API and displayed.
-The NFTs are presented in a responsive layout, allowing for easy browsing on different devices.

## Acknowledgments:
This application was developed as part of the Frontend Developer position take-home test for Insomnia Labs.

Live demo [_here_](https://insomnia-test.vercel.app/)

Feel free to explore the code and customize it according to your needs. If you have any questions or need further assistance, please don't hesitate to reach out.

Best regards,
Oluwaseun

