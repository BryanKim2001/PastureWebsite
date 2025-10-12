'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LandingPage() {
  const router = useRouter();
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      router.push('/home');
    }, 600);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="/landing_page_horizontal.png"
          alt="The Pasture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content - positioned in upper portion (sky area) */}
      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-24 md:pt-32 px-6">
        <div className="animate-fade-in text-center">
          <Image
            src="/5.png"
            alt="The Pasture Logo"
            width={180}
            height={180}
            className="mb-8 mx-auto"
            priority
          />
          <h1 className="text-6xl md:text-7xl mb-6 text-stone-800 font-bold" style={{ fontFamily: "var(--font-dancing-script)" }}>
            The Pasture
          </h1>
          <p className="text-xl md:text-2xl text-stone-700 font-light tracking-wide mb-12">
            Remember, Reflect, and Rest in Christ
          </p>

          <button
            onClick={handleButtonClick}
            className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-12 py-5 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-emerald-600 transition-all transform hover:scale-105"
          >
            Join The Herd
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                className="absolute rounded-full bg-white opacity-30 animate-ripple pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: '0px',
                  height: '0px',
                }}
              />
            ))}
          </button>
        </div>
      </div>
    </div>
  );
}
