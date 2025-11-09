import Header from '../components/Header';
import Footer from '../components/Footer';

export default function VisitPage() {
  return (
    <>
      <Header />
      <main className="bg-stone-50">
        {/* Hero */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">Plan Your Visit</h1>
            <p className="text-xl text-stone-600">
              We can't wait to welcome you. Here's everything you need to know.
            </p>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Quick Info */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
              <div className="bg-white p-6 md:p-10 shadow-soft text-center">
                <div className="bg-green-50 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-stone-900">Location</h3>
                <div className="text-stone-600">
                  <p className="mb-1">6633 Beach Blvd,</p>
                  <p className="mb-4">Buena Park, CA</p>
                  <a
                    href="https://google.com/maps/place/Il+Shin+Presbyterian+Church(일신장로교회)/@33.8637336,-118.0011864,17z/data=!4m6!3m5!1s0x80c2cd5d1d367ee7:0x3cc82a1e04a0c217!8m2!3d33.8637084!4d-117.9983871!16s%2Fg%2F1tf6mgv4?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800 font-medium"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 md:p-10 shadow-soft text-center">
                <div className="bg-green-50 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-stone-900">Service Times</h3>
                <div className="text-stone-600 space-y-2">
                  <div>
                    <p className="font-medium text-green-700">Sunday Worship</p>
                    <p>12:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-10 shadow-soft text-center">
                <div className="bg-green-50 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-stone-900">What to Expect</h3>
                <div className="text-stone-600">
                  <p className="mb-1">Casual, friendly, 60-75 minutes. Lunch and fellowship afterwards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Connect Card CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 shadow-soft text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-stone-900">First-Time Visitors</h3>
              <p className="text-base md:text-lg text-stone-600 mb-8 md:mb-10 leading-relaxed">
                If this is your first time visiting, we'd love to connect with you! Fill out our Connect Card
                to let us know you visited and learn more about The Pasture.
              </p>
              <a
                href="https://thepasture.churchcenter.com/unproxy/people/forms/207027"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-700 text-white px-6 py-3 md:px-10 md:py-4 hover:bg-green-800 transition text-base md:text-lg"
              >
                <span>Fill Out Connect Card</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
