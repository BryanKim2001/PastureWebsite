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
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/pasture_ordination2.jpg"
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

        {/* Sunday Worship */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-[4/3] overflow-hidden shadow-lifted">
                  <Image
                    src="/pasture_ordination.jpg"
                    alt="Sunday Worship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="mb-8">
                    <h2 className="text-4xl font-light text-stone-900 mb-3">Sunday Worship</h2>
                    <p className="text-2xl text-emerald-600 font-medium">Sundays at 12:30 PM</p>
                  </div>

                  <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                    <p>
                      Our Sunday worship service is the heart of our weekly gatherings. We come together as a
                      community to sing psalms and hymns, pray, hear God's Word preached, celebrate the sacraments,
                      and encourage one another in our walk with Christ.
                    </p>
                    <p>
                      The service follows the historic liturgy of the Reformed tradition, guiding us through
                      confession, assurance of pardon, thanksgiving, and sending. Whether you're a longtime believer
                      or exploring faith for the first time, you'll find a warm welcome at The Pasture.
                    </p>
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/visit"
                      className="inline-block bg-emerald-600 text-white px-8 py-4 hover:bg-emerald-700 transition text-lg"
                    >
                      Plan Your Visit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Friday Night Gatherings */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                  <div className="mb-8">
                    <h2 className="text-4xl font-light text-stone-900 mb-3">Friday Night Gatherings</h2>
                    <p className="text-2xl text-emerald-600 font-medium">Every Friday Evening</p>
                  </div>

                  <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                    <p>
                      Our Friday night gatherings provide a more intimate setting for fellowship, prayer, and growing
                      together in community. These evenings are designed to build deeper relationships and provide
                      opportunities for meaningful spiritual conversations.
                    </p>
                    <p>
                      Whether we're studying Scripture together, sharing a meal, praying for one another, or simply
                      enjoying fellowship, Friday nights are a special time to connect with brothers and sisters in
                      Christ in a relaxed, informal atmosphere.
                    </p>
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className="inline-block bg-stone-800 text-white px-8 py-4 hover:bg-stone-900 transition text-lg"
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
