"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const socialLinks = [
  {
    Icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/southasianfest/",
  },
  {
    Icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com/southasianfest",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/southasianfest/",
  },
  {
    Icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/user/MirchMasalaOne",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "VSAF 2021", href: "/vsaf-2021" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(!(currentScrollY > lastScrollY && currentScrollY > 80));
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-40 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-20 py-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={40}
              sizes="160px"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <nav className="hidden md:flex gap-6 text-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "text-cyan-400"
                      : "hover:text-cyan-400 transition-colors"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white z-50 relative"
            aria-label="Open menu"
          >
            <Menu size={30} />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={40}
              sizes="160px"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={30} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-160px)] gap-8 text-xl text-white">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive
                    ? "text-cyan-400"
                    : "hover:text-cyan-400 transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center gap-6 pb-10">
          {socialLinks.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
