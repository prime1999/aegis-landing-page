"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full md:w-10/12 mx-auto flex items-center justify-between p-4">
      <h1 className="font-jura text-xl font-bold tracking-widest">AEGIS</h1>
      <div className="flex items-center gap-6 text-sm font-geist-mono">
        <Link
          href="https://wa.me/2348110596215?text=Hi%20Priime%2C%20I%20saw%20your%20project%20online%20and%20I%20want%20to%20tell%20you%20it%20looks%20great%20and%20I%20would%20love%20to%20work%20with%20you"
          target="_blank"
          className="text-white rounded-full py-2 px-4 bg-linear-to-t from-cyan-700 to-cyan-800 cursor-pointer duration-700 transition hover:from-cyan-800 hover:to-cyan-700"
        >
          Contact us
        </Link>
        <Link
          href="https://new-aegis.vercel.app/"
          target="_blank"
          className="hidden md:block rounded-full px-4 py-2 bg-cyan-950 text-white cursor-pointer duration-500 transition hover:bg-cyan-900"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
