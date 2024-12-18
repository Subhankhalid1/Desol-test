import * as Yup from "yup";

export const carValidationSchema = Yup.object({
  model: Yup.string().required("Model is required"),

  phoneNumber: Yup.string()
    .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
    .required("Phone number is required"),

  price: Yup.number()
    .typeError("Price must be a valid number")
    .positive("Price must be a positive number")
    .required("Price is required"),

  images: Yup.array()
    .required("Image is required")
    .test("fileSize", "File size must be less than 2MB", (value: any) =>
      value ? value.size <= 2 * 1024 * 1024 : false
    ),
});
