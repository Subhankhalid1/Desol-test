'use client'

import React, { useState } from "react";
import UploadIcon from "../../assets/svgs/FileUploadIcon";

const UpdateMovie: React.FC = () => {
  const [carData, setCarData] = useState({
    title: "",
    publishYear: "",
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setMovieData((prev) => ({
  //       ...prev,
  //       image: e.target.files[0],
  //     }));
  //   }
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
  };

  const handleCancel = () => {
    setCarData({
      title: "",
      publishYear: "",
      image: null,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-5xl ml-12 mb-10">
          <h1 className=" lg:text-[48px] md:text-xl sm:text-lg text-xl font-semibold text-[#FFFFFF]">
            Edit
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap w-full justify-center max-w-6xl rounded-lg p-8 gap-x-28"
        >
          {/* Left Section */}
          <div className="border border-dashed w-[473px] h-[504px] relative flex items-center justify-center">
            <input
              type="file"
              multiple
              className="cursor-pointer absolute opacity-0 w-full h-full"
            />
            <div className="text-center text-white">
              <div className="flex justify-center items-center">
                <UploadIcon/>
              </div>
              <p>Drop an image here</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-96 space-y-4 mt-5">
            <div>
              <input
                type="text"
                id="title"
                name="title"
                value={carData.title}
                onChange={handleChange}
                placeholder="Model"
                className="block w-[362px] h-[45px] px-3 py-2 rounded-[10px] bg-[#224957]"
              />
            </div>
            <div>
              <input
                type="number"
                id="price"
                name="publishYear"
                value={carData.publishYear}
                onChange={handleChange}
                placeholder="price"
                className="block w-[216px] h-[45px] text-white bg-[#224957] px-3 py-2 rounded-[10px]"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 !mt-16">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 w-[167px] h-[56px] text-white border border-[#FFFFFF] rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 w-[179px] h-[56px] text-white bg-[#2BD17E] rounded-lg hover:bg-green-600"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateMovie;
