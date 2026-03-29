"use client";

import { clients } from "@/lib";
import Image from "next/image";
import Link from "next/link";


export default function ClientsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12 place-items-center">
          {clients.map((client, index) => (
            client.href ? (
              <Link key={index} href={client.href} target="_blank">
                <div className="relative w-40 h-20 flex items-center justify-center transition duration-300 hover:scale-105">
                  <Image src={client.logo} alt={client.name} fill className="object-contain" />
                </div>
              </Link>
            ) : (
              <div key={index} className="relative w-40 h-20 flex items-center justify-center transition duration-300 hover:scale-105">
                <Image src={client.logo} alt={client.name} fill className="object-contain" />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}