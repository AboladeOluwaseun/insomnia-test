import BitcoinPriceIndexPage from "./Components/BitconPriceIndex";
import NFTListPage from "./Components/NFTDisplay/NFTListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const BASE_URL = import.meta.env.VITE_BASE_URL
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BitcoinPriceIndexPage />} />
        <Route path="nft-list" element={<NFTListPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
