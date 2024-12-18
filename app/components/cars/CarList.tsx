"use client";

import React, { useEffect } from "react";
import Pagination from "./common/Pagination";
import { CarsListProps } from "../../@types/carTypes";
import CarsListHeader from "./common/CarListHeader";
import EmptyState from "./common/EmptyState";
import useCarStore from "../../store/carStore";
import OverlayLoader from "./common/Loader";
import useAuthStore from "../../store/authStore";
import { useRouter } from "next/navigation";

const MoviesList: React.FC<CarsListProps> = ({ onLogout }) => {
  const token = useAuthStore((state) => state.token);
  const router = useRouter();
  const { cars, loading, totalPages, fetchCars, page, limit } = useCarStore(
    (state) => state
  );

  useEffect(() => {
    fetchCars(page, limit, token);
  }, [page, limit, fetchCars, token]);

  const handlePageChange = (page: number) => {
    useCarStore.setState({ page });
  };

  const handleCreateCar = () => {
    router.push("/createCar");
  };

  const BASE_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5001";

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen flex flex-col">
      {cars?.length > 0 ? (
        <CarsListHeader handleCreateCar={handleCreateCar} logout={onLogout} />
      ) : null}

      {cars?.length === 0 && !loading ? (
        <EmptyState handleCreateCar={handleCreateCar} />
      ) : (
        <div className="py-10 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-grow">
            {loading ? (
              <OverlayLoader />
            ) : (
              cars?.map((car) => (
                <div
                  key={car._id}
                  className="bg-[#07242e] rounded-lg overflow-hidden"
                >
                  <img
                    src={`${BASE_URL}/${car?.images[0]}`}
                    alt={car?.title}
                    width={400}
                    height={600}
                    className="w-full h-96 object-cover p-1 rounded-xl"
                  />
                  <div className="p-1 mt-2">
                    <h2 className="text-md font-medium text-white mb-1 px-2">
                      {car.model}
                    </h2>
                    <p className="text-white px-2 py-2">{car.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="py-10">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesList;
