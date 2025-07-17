import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-white">
      {/* Header azul */}
      <header className="bg-blue-700 flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">Demo Streaming</div>
        <nav className="flex items-center gap-6">
          <button className="text-white hover:underline">Log In</button>
          <button className="bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition">
            Start your free trial
          </button>
        </nav>
      </header>

      {/* Contenedor negro con texto "Popular Titles" */}
      <section className="bg-black px-6 py-4">
        <h2 className="text-white text-2xl font-semibold">Popular Titles</h2>
      </section>

      {/* Dos cards con imagen y texto superpuesto */}
      <section className="bg-white px-6 py-8 flex flex-col md:flex-row gap-12 md:justify-start">
  {/* Card Series + texto */}
  <div className="flex flex-col items-start gap-2">
    <Link
      to="/series"
      className="relative bg-black w-48 h-80 rounded-lg shadow-lg overflow-hidden group"
    >
      <img
        src="/images/placeholder.png"
        alt="Series"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition"
      />
      <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold pointer-events-none select-none">
        Series
      </span>
    </Link>
    <p className="text-black font-semibold">Popular Series</p>
  </div>

    {/* Card Movies + texto */}
    <div className="flex flex-col items-start gap-2">
        <Link
        to="/movies"
        className="relative bg-black w-48 h-80 rounded-lg shadow-lg overflow-hidden group"
        >
        <img
            src="/images/placeholder.png"
            alt="Movies"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition"
        />
        <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold pointer-events-none select-none">
            Movies
        </span>
        </Link>
        <p className="text-black font-semibold">Popular Movies</p>
    </div>
    </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 pt-6 pb-2 flex flex-col gap-4">
        {/* Links con separadores */}
        <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm font-medium">
          {[
            "Home",
            "Terms and Condition",
            "Privacy Policy",
            "Collections Statements",
            "Help",
            "Manage Account",
          ].map((link, idx) => (
            <React.Fragment key={link}>
              <a href="#" className="hover:underline">
                {link}
              </a>
              {idx < 5 && <span className="mx-1">|</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-center text-xs">
          © 2025 Demo Streaming. All rights reserved.
        </div>

        {/* Logos redes sociales y tiendas */}
        <div className="flex justify-between items-center flex-wrap gap-6">
        <div className="flex gap-4">
            <img src="/images/social/facebook-white.svg" className="h-5" />
            <img src="/images/social/twitter-white.svg" className="h-5" />
            <img src="/images/social/instagram-white.svg" className="h-5" />
        </div>

        <div className="flex gap-4">
            <img src="/images/store/app-store.svg" className="h-5" />
            <img src="/images/store/play-store.svg" className="h-5" />
            <img src="/images/store/windows-store.svg" className="h-5" />
        </div>
        </div>

      </footer>
    </div>
  );
}

export default Home;
