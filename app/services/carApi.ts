import api from "../api/axiosInstance";

// Create Car API function
export const createCarApi = async (carData: any, token: any) => {
  try {
    const response = await api.post("/car/create", carData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error in createCatApi:", error.response || error.message);
    throw new Error(error.response?.data?.message || "Failed to create a car");
  }
};

// Fetch Cars API function
export const fetchCar = async (page: number, limit: number, token: any) => {
  try {
    const response = await api.get(`/car?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    throw new Error("Error fetching cars");
    console.log(error);
  }
};
