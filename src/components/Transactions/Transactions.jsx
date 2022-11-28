import React from "react";
import { BiTransfer } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";

const Transaction = ({ tx }) => (
  <div className="flex justify-between items-center border border-pink-500 text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <div className="rounded-md shadow-sm shadow-pink-500 p-2">
      <BiTransfer />
    </div>
    <div>
      <h4 className="text-sm">#{tx} Fund Transfered</h4>
      <div className="flex justify-start items-center">
        <small>
          <span>Receive by </span>
          <a className="text-pink-500 mr-2" href="#" target="_blank">
            0x33...037e
          </a>
          <MdOpenInNew />
        </small>
      </div>
      <p className="text-sm font-medium">0.32 ETH</p>
    </div>
  </div>
);
export const Transactions = () => {
  return (
    <div className="bg-[#151c25]">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          Latest Transaction
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {Array(4)
            .fill()
            .map((nft, i) => (
              <Transaction key={i} tx={i + 1} />
            ))}
        </div>
        <div className="text-center my-5">
          <button className="shadow-lg text-white shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] p-2 rounded-full">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
