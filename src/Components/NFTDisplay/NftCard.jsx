import React from "react";

const NftCard = ({ nft }) => {
  return (
    <div className=" cursor-pointer min-h-[100vh] w-[100%] sm:w-[60%] md:w-[30%] overflow-hidden border-2 mb-6   mx-auto  border-white-100  border-solid rounded-lg">
      {" "}
      <img
        src={nft.meta?.content[0].url}
        alt={nft.meta?.name}
        className="object-cover object-center border-b border-solid w-full h-[50%]  "
      />
      <div className="px-2 h-5 mt-4">
        <h2 className="text-[1.4rem] text-primary font-bold mb-2">
          {nft.meta?.name}
        </h2>
        <div className="text-[1rem] ">
          <p className="mb-2 ">
            {" "}
            <span className="font-bold">Description:</span>{" "}
            {nft.meta?.description}
          </p>
          <p className="mb-2">
            <span className="font-bold">Token ID:</span> {nft.tokenId}
          </p>
          <p className="mb-2">
            <span className="font-bold">Smart Contract Address:</span>{" "}
            {nft.contract}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
