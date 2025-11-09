import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GivingPage() {
  return (
    <>
      <Header />
      <main className="bg-stone-50">
        {/* Hero */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">Giving</h1>
            <p className="text-xl text-stone-600">
              Supporting God's work through generous and cheerful giving
            </p>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Give via Venmo */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-16 text-center">Give Online</h2>

              <div className="bg-white p-6 md:p-12 shadow-soft text-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-stone-900">Give via Venmo</h3>
                <p className="text-base md:text-lg text-stone-600 mb-8 md:mb-10">
                  You can support The Pasture's ministry through Venmo
                </p>

                <div className="bg-stone-50 p-6 md:p-10 mb-8 md:mb-10">
                  <p className="text-stone-600 mb-4">Send your gift to:</p>
                  <div className="bg-emerald-50 p-4 md:p-8 inline-block">
                    <p className="text-2xl md:text-4xl font-bold text-green-800 mb-1">@ILSHINCHURCH</p>
                    <p className="text-xs md:text-sm text-stone-600">Venmo Username</p>
                  </div>
                </div>

                <a
                  href="https://venmo.com/u/ILSHINCHURCH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-700 text-white px-6 py-3 md:px-10 md:py-4 hover:bg-green-800 transition text-base md:text-lg mb-8 md:mb-10"
                >
                  Open in Venmo
                </a>

                <p className="text-stone-500 text-sm pt-8 border-t border-stone-200">
                  All gifts are tax-deductible to the extent allowed by law. For questions, please{' '}
                  <Link href="/contact" className="text-green-700 hover:text-green-800 underline">
                    contact us
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Why We Give */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-16 text-center">Why We Give</h2>

              <div className="space-y-8 text-lg text-stone-600 leading-relaxed">
                <p>
                  We understand giving as a joyful response to God's overwhelming grace
                  and generosity toward us. As the Apostle Paul writes, "God loves a cheerful giver" (2 Corinthians 9:7).
                  Our giving is not motivated by obligation or compulsion, but by gratitude for the abundant blessings
                  we have received in Christ.
                </p>

                <div className="bg-white p-6 md:p-10 shadow-soft">
                  <p className="mb-6">
                    Throughout Scripture, we see that giving is an act of worship and trust in God's provision.
                    The Westminster Shorter Catechism reminds us that our chief end is to glorify God and enjoy
                    Him forever—and our financial stewardship is one way we glorify God by acknowledging His
                    ownership of all things and His faithfulness to provide.
                  </p>
                  <div className="border-l-4 border-green-700 pl-6 italic text-stone-700">
                    "Each one must give as he has decided in his heart, not reluctantly or under compulsion,
                    for God loves a cheerful giver."
                    <br />
                    <span className="text-sm font-semibold not-italic mt-2 block">— 2 Corinthians 9:7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* How Giving Helps */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-16 text-center">How Your Giving Helps</h2>

              <div className="grid md:grid-cols-3 gap-6 md:gap-10">
                <div className="text-center">
                  <div className="bg-emerald-50 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-stone-900">Discipleship</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Supporting biblical teaching, small groups, and resources that help believers grow in faith
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-emerald-50 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-stone-900">Missions</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Funding local and global mission work
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-emerald-50 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-stone-900">Fellowship</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Enabling community events, hospitality, and care for members in need
                  </p>
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
