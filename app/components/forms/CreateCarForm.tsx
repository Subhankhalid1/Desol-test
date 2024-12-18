"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { carValidationSchema } from "../../validation/carSchema";
import UploadIcon from "../../assets/svgs/FileUploadIcon";
import useAuthStore from "../../store/authStore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { createCarApi } from "@/app/services/carApi";

const CreateMovie: React.FC = () => {
  const token = useAuthStore((state) => state.token);
  const router = useRouter();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      model: "",
      price: "",
      phoneNumber: "",
      images: [] as File[],
    },
    validationSchema: carValidationSchema,
    onSubmit: () => {}
  });

  const handleSubmit = async () => {
    try {
      const values = formik.values;
      const formData = new FormData();
      formData.append("model", values.model);
      formData.append("price", values.price);
      formData.append("phoneNumber", values.phoneNumber);
      values.images.forEach((file: File) => {
        formData.append("images", file);
      });

      const response = await createCarApi(formData, token);
      formik.resetForm(); 
      setSelectedFiles([]);
      router.push("/cars");
    } catch (error: any) {
      console.error("Error creating car:", error);
      toast.error(error.message || "Failed to create Car. Please try again.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
      formik.setFieldValue("images", filesArray);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-5xl ml-12 mb-20">
        <h1 className="lg:text-[48px] md:text-xl sm:text-lg text-xl font-semibold text-[#FFFFFF]">
          Create a new Car
        </h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); 
          handleSubmit();
        }}
        className="flex flex-wrap w-full justify-center max-w-6xl rounded-lg gap-x-28"
      >
        <div className="border border-dashed w-[473px] h-[504px] relative flex items-center justify-center">
          <input
            type="file"
            name="images"
            multiple 
            onChange={handleFileChange}
            className="cursor-pointer absolute opacity-0 w-full h-full"
          />
          <div className="text-center text-white">
            <div className="flex justify-center items-center">
              <UploadIcon />
            </div>
            <p>Drop images here</p>
          </div>
        </div>

        {/* Text Fields */}
        <div className="w-96 space-y-4 mt-5">
          <input
            type="text"
            name="model"
            value={formik.values.model}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Model Name"
            className="block w-[362px] h-[45px] px-3 py-2 rounded-[10px] bg-[#224957]"
          />
          {formik.touched.model && formik.errors.model ? (
            <p className="text-red-500">{formik.errors.model}</p>
          ) : null}

          <input
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Price"
            className="block w-[216px] h-[45px] px-3 py-2 rounded-[10px] bg-[#224957]"
          />
          {formik.touched.price && formik.errors.price ? (
            <p className="text-red-500">{formik.errors.price}</p>
          ) : null}

          <input
            type="text"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Phone Number"
            className="block w-[216px] h-[45px] px-3 py-2 rounded-[10px] bg-[#224957]"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <p className="text-red-500">{formik.errors.phoneNumber}</p>
          ) : null}

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={formik.handleReset}
              className="px-6 py-2 border border-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 rounded text-white"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>

          {/* Display Selected Files */}
          <div className="w-full text-white mt-5">
            <h2 className="text-lg font-semibold">Selected Images:</h2>
            <ul className="mt-2 space-y-2">
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateMovie;
