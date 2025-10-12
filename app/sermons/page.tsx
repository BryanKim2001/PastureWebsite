import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SermonsPage() {
  return (
    <>
      <Header />
      <main className="bg-stone-50">
        {/* Hero */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">Sermons</h1>
            <p className="text-xl text-stone-600">
              Biblical teaching that points to Christ
            </p>
          </div>
        </section>

        {/* Under Construction */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-12">
                <svg className="w-24 h-24 mx-auto text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-4xl font-light text-stone-900 mb-6">Under Construction</h2>
              <p className="text-xl text-stone-600 mb-16 leading-relaxed">
                We're currently building our sermon archive. Check back soon for messages
                and teachings from our Sunday worship services.
              </p>

              <div className="bg-white p-10 shadow-soft max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-8 text-stone-900">Coming Soon</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-600 mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-stone-600">Full sermon archive with audio recordings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-600 mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-stone-600">Sermon notes and study guides</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-600 mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-stone-600">Search by topic, speaker, or scripture</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-600 mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-stone-600">Subscribe to podcast feed</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-stone-600 mt-12 mb-8">
                In the meantime, join us for worship on Sunday mornings at 12:30 PM to hear the Word preached live.
              </p>
              <Link
                href="/visit"
                className="inline-block bg-emerald-600 text-white px-8 py-4 hover:bg-emerald-700 transition text-lg"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
