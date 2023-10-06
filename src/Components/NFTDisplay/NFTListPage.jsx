import React, { useState, useEffect } from "react";
import PageNav from "../PageNav";
import NftCard from "./NftCard";
import { BASE_URL } from "../../App";
const NFTListPage = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [nftList, setNFTList] = useState([]);
  console.log(nftList);
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAddress(accounts[0]);
    }
  };
  const getNftData = async () => {
    if (!walletAddress) return;
    const response = await fetch(
      `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`
    );
    const data = await response.json();
    setNFTList(data.items);
  };

  useEffect(() => {
    getNftData();
  }, [walletAddress]);

  return (
    <div className="container mx-auto p-4">
      <PageNav />
      <div className="mt-8">
        <h1>Wallet Address:{walletAddress}</h1>
        <button onClick={connectWallet} className=" bg-button p-2 rounded-md">
          Connect Wallet & get NFTs
        </button>
        <div className=" flex flex-wrap mt-8 md:gap-4 ">
          {nftList.map((nft) => (
            <NftCard nft={nft} key={nft.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTListPage;
