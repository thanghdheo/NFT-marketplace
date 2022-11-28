import React, { useState } from "react";
import Identicon from "react-identicons";
import { FaTimes } from "react-icons/fa";
import { setGlobalState, useGlobalState } from "../../store";

const herologo =
  "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";

export const ShowNFT = () => {
  const [modal] = useGlobalState("showmodal");

  const handleSubmit = () => {
    closeModal();
  };

  const closeModal = () => {
    setGlobalState("showmodal", "scale-0");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen
        flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-400">Buy NFT</p>
            <button
              className="border-0 bg-transparent focus:outline-none text-white"
              type="button"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-40 w-40">
              <img
                className="w-full h-full object-cover cursor-pointer"
                src={herologo}
                alt="NFT"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start rounded-xl mt-5">
            <h4 className="text-white font-semibold"> Title</h4>
            <p className="text-gray-400 text-xs my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              assumenda adipisci laudantium aut! Iusto labore dolorum dolor
              recusandae distinctio, sequi molestias, consequatur nihil
              voluptatum ipsam a. Officiis impedit necessitatibus beatae?
            </p>
            <div className="flex justify-between items-center mt-3 text-white">
              <div className="flex justify-start items-center">
                <Identicon
                  className="h-10 w-10 object-contain rounded-full mr-3"
                  string={"thangtggghd"}
                  size={50}
                />
                <div className="flex flex-col justify-center items-start">
                  <small className="text-white font-bold">Owner</small>
                  <small className="text-pink-800 font-semibold">
                    0x31...3234
                  </small>
                </div>
              </div>
              <div className="flex flex-col  text-white">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">0.24 ETH</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-2">
            <button className="shadow-lg  text-white shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] p-2 rounded-full mt-5 w-full">
              Purchase
            </button>
            {/* <button className="shadow-lg  text-white shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] p-2 rounded-full mt-5 w-full">
              Change Price
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
