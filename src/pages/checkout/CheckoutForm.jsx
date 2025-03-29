import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  streetAddress: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City/Town is required"),
  country: z.string().min(1, "Country/Province is required"),
  postalCode: z.string().min(1, "Postal Code is required"),
  email: z.string().email("Invalid email address"),
  notes: z.string().optional(),
});

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="max-w-lg p-6 shadow-xl rounded-lg border-amber-50">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h1 className=" card-title text-xl font-semibold">
          Billing Information
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input {...register("firstName")} className="w-full p-2 border" />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label>Last Name</label>
            <input {...register("lastName")} className="w-full p-2 border" />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div>
          <label>Street Address</label>
          <input {...register("streetAddress")} className="w-full p-2 border" />
          {errors.streetAddress && (
            <p className="text-red-500">{errors.streetAddress.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>City/Town</label>
            <input {...register("city")} className="w-full p-2 border" />
            {errors.city && (
              <p className="text-red-500">{errors.city.message}</p>
            )}
          </div>
          <div>
            <label>Country/Province</label>
            <input {...register("country")} className="w-full p-2 border" />
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Postal Code</label>
            <input {...register("postalCode")} className="w-full p-2 border" />
            {errors.postalCode && (
              <p className="text-red-500">{errors.postalCode.message}</p>
            )}
          </div>
          <div>
            <label>Email Address</label>
            <input {...register("email")} className="w-full p-2 border" />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div>
          <label>Additional Notes</label>
          <textarea
            {...register("notes")}
            className="w-full p-2 border"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="w-full p-2 bg-black text-white">
          Continue
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
