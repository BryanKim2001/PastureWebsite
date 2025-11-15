'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link href="/home" className="flex items-center space-x-4 group">
            <Image src="/thepasture_logo.png" alt="The Pasture Logo" width={160} height={160} className="h-28 w-auto transition-transform group-hover:scale-105" />
            <div className="hidden xl:block h-16 w-px bg-stone-300"></div>
            <span className="hidden xl:block text-sm text-stone-600 font-light">Remember • Reflect • Rest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/home" className="text-stone-600 hover:text-green-700 transition text-base font-medium">Home</Link>
            <Link href="/about" className="text-stone-600 hover:text-green-700 transition text-base font-medium">About</Link>
            <Link href="/sermons" className="text-stone-600 hover:text-green-700 transition text-base font-medium">Sermons</Link>
            <Link href="/gatherings" className="text-stone-600 hover:text-green-700 transition text-base font-medium">Gatherings</Link>
            <Link href="/giving" className="text-stone-600 hover:text-green-700 transition text-base font-medium">Giving</Link>
            <Link href="/contact" className="text-stone-600 hover:text-green-700 transition text-base font-medium">Contact</Link>
            <Link href="/visit" className="ml-4 bg-green-700 text-white px-6 py-3 hover:bg-green-800 transition text-base font-semibold">Plan Your Visit</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 space-y-1 pb-4">
            <Link href="/home" className="block py-3 text-stone-600 hover:text-green-700 transition">Home</Link>
            <Link href="/about" className="block py-3 text-stone-600 hover:text-green-700 transition">About</Link>
            <Link href="/sermons" className="block py-3 text-stone-600 hover:text-green-700 transition">Sermons</Link>
            <Link href="/gatherings" className="block py-3 text-stone-600 hover:text-green-700 transition">Gatherings</Link>
            <Link href="/giving" className="block py-3 text-stone-600 hover:text-green-700 transition">Giving</Link>
            <Link href="/contact" className="block py-3 text-stone-600 hover:text-green-700 transition">Contact</Link>
            <Link href="/visit" className="block mt-4 text-center bg-green-700 text-white px-4 py-3 hover:bg-green-800 transition font-medium">Plan Your Visit</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
