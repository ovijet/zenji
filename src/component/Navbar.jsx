"use client";
import React from "react";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2">
          <span className="text-3xl font-black italic tracking-[-0.08em]">
            ZENJI
          </span>

          <span className="hidden text-[9px] tracking-[0.3em] text-zinc-500 sm:block">
            STREETWEAR
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <a
            href="/"
            className="relative text-sm font-medium text-white transition hover:text-red-500"
          >
            Home
            <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-red-500" />
          </a>

          <a
            href="/shop"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            Shop
          </a>

          <a
            href="/about"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            About
          </a>

          <a
            href="/contact"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <button
            aria-label="Search"
            className="btn btn-ghost btn-circle text-zinc-300 hover:bg-white/10 hover:text-white"
          >
            <Search size={20} />
          </button>

          {/* Cart */}
          <button
            aria-label="Shopping cart"
            className="btn btn-ghost btn-circle relative text-zinc-300 hover:bg-white/10 hover:text-white"
          >
            <ShoppingCart size={21} />

            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[9px] font-bold text-white">
              0
            </span>
          </button>

          {/* Mobile Menu */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 pb-4 text-sm font-medium"
            >
              Home
            </a>

            <a
              href="#shop"
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 pb-4 text-sm text-zinc-400 hover:text-white"
            >
              Shop
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 pb-4 text-sm text-zinc-400 hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-sm text-zinc-400 hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
