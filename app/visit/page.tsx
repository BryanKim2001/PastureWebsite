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

        {/* Quick Info */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="bg-white p-10 shadow-soft text-center">
                <div className="bg-emerald-50 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-stone-900">Location</h3>
                <div className="text-stone-600">
                  <p className="mb-1">[Address Line 1]</p>
                  <p className="mb-4">[City, State ZIP]</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="bg-white p-10 shadow-soft text-center">
                <div className="bg-emerald-50 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-stone-900">Service Times</h3>
                <div className="text-stone-600 space-y-2">
                  <div>
                    <p className="font-medium text-emerald-600">Sunday Worship</p>
                    <p>12:30 PM</p>
                  </div>
                  <div className="pt-2">
                    <p className="font-medium text-emerald-600">Friday Gatherings</p>
                    <p>Evening</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 shadow-soft text-center">
                <div className="bg-emerald-50 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-stone-900">What to Expect</h3>
                <div className="text-stone-600">
                  <p className="mb-1">Friendly atmosphere</p>
                  <p className="mb-1">Come as you are</p>
                  <p>All are welcome</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-16 text-center">What to Expect</h2>

              <div className="space-y-16">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">When You Arrive</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    You'll be greeted by friendly faces at the entrance. We have greeters available to help you
                    find your way, answer any questions, and make you feel at home. Feel free to grab a cup of
                    coffee and mingle before the service begins.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">During the Service</h3>
                  <p className="text-lg text-stone-600 leading-relaxed mb-4">
                    Our worship service typically lasts about 75-90 minutes and includes congregational singing,
                    prayer, Scripture reading, preaching, and the celebration of the Lord's Supper when scheduled.
                    We follow a liturgy rooted in the historic Reformed tradition.
                  </p>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Don't worry if you're unfamiliar with the format—we provide bulletins that guide you through
                    the service, and you're welcome to participate as much or as little as you're comfortable with.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">After the Service</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    We encourage everyone to stay for fellowship after the service. This is a wonderful opportunity
                    to meet people, ask questions, and get to know our community. Our pastor and leaders are always
                    available to chat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Card CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white p-12 shadow-soft text-center">
              <h3 className="text-3xl font-semibold mb-4 text-stone-900">First-Time Visitors</h3>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                If this is your first time visiting, we'd love to connect with you! Fill out our Connect Card
                to let us know you visited and learn more about The Pasture.
              </p>
              <a
                href="https://thepasture.churchcenter.com/unproxy/people/forms/207027"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-10 py-4 hover:bg-emerald-700 transition text-lg"
              >
                <span>Fill Out Connect Card</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-16 text-center">Common Questions</h2>

              <div className="space-y-8">
                <div className="pb-8 border-b border-stone-200">
                  <h3 className="text-xl font-semibold mb-3 text-stone-900">What should I wear?</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Come as you are! You'll see a mix of styles. What matters most is that you're comfortable
                    and ready to worship.
                  </p>
                </div>

                <div className="pb-8 border-b border-stone-200">
                  <h3 className="text-xl font-semibold mb-3 text-stone-900">Do I need to bring anything?</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Just yourself! We'll provide a bulletin to guide you through the service.
                  </p>
                </div>

                <div className="pb-8 border-b border-stone-200">
                  <h3 className="text-xl font-semibold mb-3 text-stone-900">Is there childcare available?</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Please contact us for information about childcare and children's ministry options.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-stone-900">Will I be asked to give money?</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    We do take up an offering during the service, but there's absolutely no pressure for visitors
                    to give. You're here to experience our community and hear God's Word.
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
