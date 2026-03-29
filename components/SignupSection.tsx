"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
};

type ErrorsType = Partial<FormDataType>;

export default function SignupSection() {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validate = (): ErrorsType => {
    const newErrors: ErrorsType = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email";
    }

    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as {
      name: keyof FormDataType;
      value: string;
    };

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
      });

      setTimeout(() => setShowToast(false), 3000);
    }, 2000);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-linear-to-r from-[#5f00ff] to-[#9b8cff] px-6">
      {showToast && (
        <div className="fixed z-50 px-6 py-3 text-white bg-green-600 rounded-lg shadow-lg top-6 right-6">
          Form submitted successfully
        </div>
      )}

      <div className="w-full max-w-5xl text-white">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Sign up for VSAF 2021
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Sign up to reserve your spot for the 2021 TD Virtual South Asian
            Festival!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <label className="block text-xl mb-3">
                First name <span>*</span>
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/50 focus:outline-none focus:border-white py-2 text-lg"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-300">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-xl mb-3">
                Last Name<span>*</span>
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/50 focus:outline-none focus:border-white py-2 text-lg"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-300">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="w-full md:w-2/3">
              <label className="block text-xl mb-3">
                Email <span>*</span>
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/50 focus:outline-none focus:border-white py-2 text-lg"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-300">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-4 text-xl text-white/90 hover:text-white transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"}
              <span className="w-10 h-10 rounded-full border border-white/70 flex items-center justify-center">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
