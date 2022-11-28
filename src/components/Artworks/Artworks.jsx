import React from "react";
import { setGlobalState } from "../../store";
const herologo =
  "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";

const Card = ({ nft }) => (
  <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <img
      className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
      src={herologo}
      alt=""
    />
    <h4 className="text-white font-semibold">NFT #{nft}</h4>
    <p className="text-gray-400 text-sm my-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi
      nobis unde, ipsam adipisci earum eaque! Ipsa velit beatae quod maxime,
      ullam omnis odit explicabo sed impedit. Saepe, tempore obcaecati.
    </p>
    <div className="flex justify-between items-center mt-3 text-white">
      <div className="flex flex-col ">
        <small className="text-xs ">Current Price</small>
        <p className="text-sm font-semibold">0.34 ETH</p>
      </div>
      <button onClick={() => setGlobalState('showmodal','scale-100')} className="shadow-lg shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] py-1 px-1.5 rounded-full">
        View Detail
      </button>
    </div>
  </div>
);

export const Artworks = () => {
  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          Lastest Artworks
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gaps-6 md:gaps-4 lg:gaps-3 py-2.5">
          {Array(4)
            .fill()
            .map((nft, i) => (
              <Card key={i} nft={i + 1} />
            ))}
        </div>
        <div className="text-center my-5">
          <button className="shadow-lg  text-white shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] p-2 rounded-full">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
