import React, { useEffect, useState } from "react";

function Series() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/sample.json")
      .then((res) => {
        if (!res.ok) throw new Error("Error cargando datos");
        return res.json();
      })
      .then((json) => {
        const filtered = json.entries
          .filter(
            (item) =>
              item.programType === "series" && item.releaseYear >= 2010
          )
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 21); // 7 cols * 3 filas = 21
        setData(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Cargando...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Header azul similar al home */}
      <header className="bg-blue-700 flex justify-between items-center px-6 py-4 text-white">
        <div className="text-xl font-bold">Demo Streaming</div>
        <nav className="flex items-center gap-6">
          <button className="hover:underline">Log In</button>
          <button className="bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition">
            Start your free trial
          </button>
        </nav>
      </header>

      {/* Contenedor negro con texto "Popular Series" */}
      <section className="bg-black px-6 py-4">
        <h2 className="text-white text-2xl font-semibold">Popular Series</h2>
      </section>

      {/* Grid de series */}
      <section className="bg-white px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {data.map((serie) => (
            <div
              key={serie.title}
              className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:opacity-75 border border-transparent hover:border-white transition"
            >
              <img
                src={serie.images["Poster Art"].url}
                alt={serie.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-1 text-center font-semibold text-white text-sm truncate">
                {serie.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer similar al home */}
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
            <img src="/images/social/facebook-white.svg" className="h-5" alt="Facebook" />
            <img src="/images/social/twitter-white.svg" className="h-5" alt="Twitter" />
            <img src="/images/social/instagram-white.svg" className="h-5" alt="Instagram" />
          </div>

          <div className="flex gap-4">
            <img src="/images/store/app-store.svg" className="h-5" alt="App Store" />
            <img src="/images/store/play-store.svg" className="h-5" alt="Google Play" />
            <img src="/images/store/windows-store.svg" className="h-5" alt="Microsoft Store" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Series;
