import React from "react";
import { useFormik } from "formik";
import { signInSchema } from "../../validation/schema";
import { SignInFormProps } from "../../@types/signInFormTypes";

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit, loading }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-xs p-6 space-y-4"
      >
        <h2 className="text-5xl text-white font-semibold text-center">
          Sign In
        </h2>

        {/* Email Field */}
        <div className="flex flex-col">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className={`mt-1 p-2  rounded bg-[#224957] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              formik.touched.email && formik.errors.email
                ? "border-red-600"
                : "border-gray-300"
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red-600 mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className={`mt-1 p-2  rounded bg-[#224957] focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              formik.touched.password && formik.errors.password
                ? "border-red-600"
                : "border-gray-300"
            }`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm text-red-600 mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>

        {/* Checkbox */}
        <div className="flex items-center justify-center">
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            className="w-4 h-4 appearance-none bg-[#224957] rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 checked:bg-indigo-500 checked:ring-2 checked:ring-white checked:border-white relative"
            checked={formik.values.rememberMe}
            onChange={formik.handleChange}
          />
          <label htmlFor="rememberMe" className="ml-2 text-sm text-white">
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-[#2BD17E] rounded hover:bg-indigo-600 focus:outline-none"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </>
  );
};

export default SignInForm;
