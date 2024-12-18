"use client";

import { useState } from "react";
import SignInForm from "@/app/components/forms/SignInForm";
import { loginApi } from "@/app/services/authApi";
import useAuthStore from "@/app/store/authStore";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleSignIn = async (values: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    try {
      setLoading(true);
      const { token, user } = await loginApi(values.email, values.password);
      setLoading(false);
      login({ email: user.email }, token);
      router.push("/cars");
    } catch (error: any) {
        setLoading(false);
      console.error("Login error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#093545]">
      <SignInForm onSubmit={handleSignIn} loading={loading}/>
    </div>
  );
};

export default Page;
