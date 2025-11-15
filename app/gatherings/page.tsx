import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GatheringsPage() {
  return (
    <>
      <Header />
      <main className="bg-stone-50">
        {/* Hero Section with Photo */}
        <section className="relative h-[80vh] min-h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/pasture_pnp.jpg"
              alt="Sunday Worship"
              fill
              className="object-cover"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>
          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start max-w-5xl">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4">Gatherings</h1>
            <p className="text-xl text-white/90 max-w-2xl font-light">
              Join us as we gather to worship, grow, and fellowship together
            </p>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Sunday Worship */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="relative aspect-[4/3] overflow-hidden shadow-lifted">
                  <Image
                    src="/pasture_ordination2.jpg"
                    alt="Sunday Worship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-4xl font-light text-stone-900 mb-2 md:mb-3">Sunday Worship</h2>
                    <p className="text-xl md:text-2xl text-green-700 font-medium">Sundays @ 12:30 PM</p>
                  </div>

                  <div className="space-y-4 md:space-y-6 text-base md:text-lg text-stone-600 leading-relaxed">
                    <p>
                      Our Sunday worship service is the heart of our weekly gatherings. We come together as a
                      community to sing songs of praise, pray, hear God&apos;s Word preached,
                      and encourage one another in our walk with Christ.
                    </p>
                    <p>
                      The service follows the historic liturgy of the Reformed tradition, guiding us through
                      confession, assurance of pardon, and responsive praise. Whether you&apos;re a longtime believer
                      or exploring faith for the first time, you&apos;ll find a warm welcome at The Pasture.
                    </p>
                  </div>

                  <div className="mt-6 md:mt-10">
                    <Link
                      href="/visit"
                      className="inline-block bg-green-700 text-white px-6 py-3 md:px-8 md:py-4 hover:bg-green-800 transition text-base md:text-lg"
                    >
                      Plan Your Visit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Friday Night Gatherings */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-4xl font-light text-stone-900 mb-2 md:mb-3">Friday Night Gatherings</h2>
                    <p className="text-xl md:text-2xl text-green-700 font-medium">Fridays @ 7:30 PM</p>
                  </div>

                  <div className="space-y-4 md:space-y-6 text-base md:text-lg text-stone-600 leading-relaxed">
                    <p>
                    On Friday nights we gather for a deeper dive into our faith. These studies are designed to help us not only understand what we believe but also why we believe it—and how to faithfully defend our hope in Christ.
                    </p>
                    <p>
                    We&apos;re currently working through the Westminster Shorter Catechism, and each 90-minute session offers rich discussion, thoughtful questions, and opportunities to grow together in knowledge and love of God.
                    </p>
                  </div>

                  <div className="mt-6 md:mt-10">
                    <Link
                      href="/contact"
                      className="inline-block bg-stone-800 text-white px-6 py-3 md:px-8 md:py-4 hover:bg-stone-900 transition text-base md:text-lg"
                    >
                      Contact Us for Details
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden shadow-lifted order-1 md:order-2">
                  <Image
                    src="/pasture_retreat_prayer.jpg"
                    alt="Friday Night Gatherings"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
