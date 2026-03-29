/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

type FormDataType = {
  firstName: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
};

type ErrorsType = Partial<FormDataType>;

const Input = ({
  label,
  name,
  value,
  onChange,
  error,
}: {
  label: string;
  name: keyof FormDataType;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) => (
  <div>
    <label className="block mb-2 text-sm md:text-base text-purple-600">
      {label}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-full py-2 bg-transparent border-b border-gray-400 focus:outline-none"
    />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

const InputGrid = ({
  fields,
  formData,
  handleChange,
  errors,
}: {
  fields: { label: string; name: keyof FormDataType }[];
  formData: FormDataType;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: ErrorsType;
}) => (
  <div className="grid gap-10 text-black md:grid-cols-2">
    {fields.map((field) => (
      <Input
        key={field.name}
        label={field.label}
        name={field.name}
        value={formData[field.name]}
        onChange={handleChange}
        error={errors[field.name]}
      />
    ))}
  </div>
);

const NavLinks = () => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base">
    {navItems.map((item, i) => (
      <div key={item.label} className="flex items-center">
        <a href={item.href} className="cursor-pointer hover:underline">
          {item.label}
        </a>
        {i !== navItems.length - 1 && (
          <span className="mx-3 opacity-50">|</span>
        )}
      </div>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="flex gap-3">
    {socialIcons.map((item, i) => (
      <a
        key={i}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 text-sm text-orange-400 border border-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition"
      >
        {item.icon}
      </a>
    ))}
  </div>
);

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "VSAF 2021", href: "/vsaf-2021" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "SAF 2019", href: "/saf-2019" },
  { label: "FAQs", href: "/faqs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socialIcons = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/southasianfest/" },
  { icon: <FaTwitter />, href: "https://twitter.com/southasianfest" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/southasianfest/" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/user/MirchMasalaOne" },
];

export default function Footer() {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const validate = (): ErrorsType => {
    const newErrors: ErrorsType = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        surname: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setShowToast(false), 3000);
    }, 2000);
  };

  return (
    <main className="w-full font-sans relative">
      {showToast && (
        <div className="fixed z-50 px-6 py-3 text-white bg-green-600 rounded-lg shadow-lg top-6 right-6">
          Form submitted successfully
        </div>
      )}

      <div className="grid md:grid-cols-[40%_60%]">
        <div className="flex flex-col">
          <div className="px-8 md:px-14 py-16 text-white h-[50vh] bg-linear-to-br from-purple-700 to-indigo-600">
            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Get in <br />
              touch
            </h1>
            <div className="mt-10 space-y-2 text-lg">
              <p>T. +1-613-518-8075</p>
              <p>E. info@SouthAsianFest.net</p>
            </div>
          </div>

          <div className="relative h-[55vh] overflow-hidden bg-orange-400">
            <img
              src="/flowers/flowers.webp"
              alt="flowers"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between bg-gray-100">
          <div className="px-8 md:px-20 py-16">
            <form onSubmit={handleSubmit} className="space-y-12">
              <InputGrid
                fields={[
                  { label: "First name *", name: "firstName" },
                  { label: "Surname *", name: "surname" },
                ]}
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />

              <InputGrid
                fields={[
                  { label: "Email address *", name: "email" },
                  { label: "Subject", name: "subject" },
                ]}
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />

              <div className="text-black">
                <label className="block mb-2 text-purple-600">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-24 py-2 bg-transparent border-b border-gray-400 outline-none resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <p className="text-sm text-purple-600">* Mandatory fields</p>

              <div className="flex justify-end mt-10">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-3 text-lg text-purple-600 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send"}
                  <span className="flex items-center justify-center w-10 h-10 border border-purple-600 rounded-full">
                    <IoArrowForward size={18} />
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="relative flex h-[26vh] bg-[#F67A00]">
            <div className="absolute bottom-0 left-0 w-[85%] md:w-[75%] h-[30vh] px-8 md:px-12 py-10 text-white shadow-2xl bg-linear-to-r from-purple-700 to-indigo-600">
              <div className="flex flex-col justify-between h-full gap-6">
                <NavLinks />

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-wrap gap-4 text-orange-400">
                    <a href="/faqs" className="hover:underline">
                      FAQs
                    </a>
                    <span className="mx-1 opacity-50">|</span>
                    <a href="/contact" className="hover:underline">
                      Contact
                    </a>
                  </div>

                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}