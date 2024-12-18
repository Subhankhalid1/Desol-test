"use client";

import useAuthStore from "@/app/store/authStore";
import CarList from "@/app/components/cars/CarList";
import AuthGuard from "@/app/components/AuthGuard";
const Page: React.FC = () => {
  const cars = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `Car ${i + 1}`,
    publishYear: `20${10 + (i % 10)}`,
  }));
  const logout = useAuthStore((state) => state.logout);

  return (
    <>
      <AuthGuard>
        <CarList 
          car={cars} 
          onLogout={logout} 
          totalPages={1} 
        />
      </AuthGuard>
    </>
  );
};

export default Page;
