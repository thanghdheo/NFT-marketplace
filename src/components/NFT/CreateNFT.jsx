import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { setGlobalState, useGlobalState } from "../../store";
const herologo =
  "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";

export const CreateNFT = () => {
  const [modal] = useGlobalState("modal");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileUrl, setUrl] = useState("");
  const [imgBase64, setImageBase64] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !price) return;

    console.log("Minting...");

    closeModal();
  };

  const closeModal = () => {
    setGlobalState("modal", "scale-0");
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setImageBase64(null);
    setUrl("");
    setDescription("");
    setPrice("");
  };
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen
      flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-400">Add NFT</p>
            <button
              className="border-0 bg-transparent focus:outline-none text-white"
              type="button"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
              <img
                className="w-full h-full object-cover cursor-pointer"
                src={imgBase64 || herologo}
                alt="NFT"
              />
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <label htmlFor="" className="block">
              <span className="sr-only">Choose Profile Photo</span>
              <input
                type="file"
                accept="image/png,image/gif, image/jpeg, image/webp, image/jpg"
                required
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none cursor-pointer focus:ring-0"
              />
            </label>
          </div>
          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              type="text"
              className="block w-full text-sm text-slate-500 file:mr-4  focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0"
              placeholder="Tile"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              type="number"
              className="block w-full text-sm text-slate-500 file:mr-4  focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0"
              placeholder="Price (ETH)"
              name="price"
              min={0.01}
              step={0.01}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              type="text"
              className="block w-full text-sm text-slate-500 file:mr-4  focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0 h-20 resize-none"
              placeholder="Desctiption"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="shadow-lg  text-white shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] p-2 rounded-full mt-5">
            Mint now
          </button>
        </form>
      </div>
    </div>
  );
};
