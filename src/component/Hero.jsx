import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[650px] relative font-black italic overflow-hidden"
      style={{
        backgroundImage:
          "url('/bradley-pelish-NPivaRqGFWw-unsplash.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="hero-content relative z-10 w-full text-white">
        <div className="max-w-6xl w-full">

          <div className="max-w-2xl">

            <p className="mb-4 text-sm md:text-base uppercase tracking-[0.4em] font-semibold text-gray-300">
              ZENJI — Streetwear Collection
            </p>

            <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9]">
              Wear Your
              <span className="block italic">
                Identity.
              </span>
            </h1>

            <p className="mb-8 max-w-lg text-base md:text-lg text-gray-300 leading-relaxed">
              Bold anime-inspired streetwear designed for people
              who create their own style.
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="btn bg-white text-black border-none px-8 hover:bg-gray-200">
                Shop Collection
              </button>

              <button className="btn btn-outline text-white border-white px-8 hover:bg-white hover:text-black">
                Explore ZENJI
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-6 left-6 md:left-10 z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          New Drop • 2026
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 md:right-10 z-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-300">
          <span>Scroll</span>
          <span className="w-8 h-px bg-white"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;