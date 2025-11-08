'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const carouselImages = [
  '/pasture_retreat.jpg',
  '/pasture_picnic.jpg',
  '/pasture_ordination.jpg',
  '/pasture_beach.JPG',
  '/pasture_pnp.jpg',
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <>
      <Header />
      <main className="bg-stone-50">
        {/* Hero Section with Photo */}
        <section className="relative h-[90vh] min-h-[700px]">
          <div className="absolute inset-0">
            <Image
              src="/blacknwhite.jpg"
              alt="The Pasture"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="w-full md:max-w-5xl border-2 md:border-4 border-white bg-black/30 backdrop-blur-sm p-6 md:p-16">
              <div className="mb-8 md:mb-12">
                <h1 className="text-4xl sm:text-6xl md:text-[10rem] font-bold text-white leading-tight md:leading-none mb-4 md:mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
                  THE PASTURE
                </h1>
                <p className="text-base sm:text-xl md:text-3xl text-white/90 mb-4 md:mb-8 font-light" style={{ fontFamily: "var(--font-montserrat)" }}>
                  To Remember, Reflect, and Rest in Christ together.
                </p>
                <p className="text-sm sm:text-lg md:text-2xl text-white/90 mb-8 md:mb-12" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 300 }}>
                  Join us on Sunday @ 12:30 PM | Friday @ 7:30 PM
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto">
                <Link
                  href="/visit"
                  className="bg-green-700 text-white px-6 py-3 sm:px-10 sm:py-5 hover:bg-green-800 transition text-base sm:text-lg font-semibold shadow-xl text-center" style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Plan Your Visit
                </Link>
                <Link
                  href="/about"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3 sm:px-10 sm:py-5 hover:bg-white/20 transition text-base sm:text-lg font-semibold text-center" style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Navigation Cards */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                WELCOME TO THE PASTURE
              </h2>
              <div className="space-y-1.5 text-center inline-block">
                <p className="text-lg text-stone-600">
                  <span className="font-bold text-stone-900">BRING</span> the lost, weak, and the restless.
                </p>
                <p className="text-lg text-stone-600">
                  <span className="font-bold text-stone-900">BUILD</span> confidence and comfort in Christ.
                </p>
                <p className="text-lg text-stone-600">
                  <span className="font-bold text-stone-900">BECOME</span> a culture of Christ to our community and beyond.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* About Card */}
              <Link href="/about" className="group block">
                <div className="bg-white overflow-hidden hover:shadow-lifted transition-all duration-300 shadow-soft">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src="/pasture_ordination3.jpg"
                      alt="About Us"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-semibold text-white">About Us</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-stone-600 leading-relaxed">Discover our mission, vision, and beliefs</p>
                  </div>
                </div>
              </Link>

              {/* Gatherings Card */}
              <Link href="/gatherings" className="group block">
                <div className="bg-white overflow-hidden hover:shadow-lifted transition-all duration-300 shadow-soft">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src="/pasture_ordination2.jpg"
                      alt="Gatherings"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-semibold text-white">Gatherings</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-stone-600 leading-relaxed">Sunday worship and Friday fellowships</p>
                  </div>
                </div>
              </Link>

              {/* Sermons Card */}
              <Link href="/sermons" className="group block">
                <div className="bg-white overflow-hidden hover:shadow-lifted transition-all duration-300 shadow-soft">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src="/bible.jpg"
                      alt="Sermons"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-semibold text-white">Sermons</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-stone-600 leading-relaxed">Biblical teaching and messages</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Photo Carousel */}
        <section className="py-24 bg-stone-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>LIFE TOGETHER</h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                See moments from our gatherings, worship, and fellowship
              </p>
            </div>
            <div className="relative max-w-6xl mx-auto">
              <div className="relative aspect-[16/9] overflow-hidden shadow-lifted">
                {carouselImages.map((img, index) => (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Community photo ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 transition shadow-lg"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 transition shadow-lg"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 transition ${
                      index === currentSlide ? 'bg-green-700 w-8' : 'bg-stone-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Bottom CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-6">
              New to The Pasture?
            </h2>
            <p className="text-xl text-stone-600 mb-10">
              We'd love to meet you. Find out what to expect when you visit.
            </p>
            <Link
              href="/visit"
              className="inline-block bg-green-700 text-white px-10 py-4 hover:bg-green-800 transition text-lg"
            >
              Plan Your First Visit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
