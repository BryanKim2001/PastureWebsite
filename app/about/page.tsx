import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-stone-50">
        {/* Hero Section with Photo */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/pasture_ordination3.jpg"
              alt="About The Pasture"
              fill
              className="object-cover"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>
          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start max-w-5xl">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl font-light">
              Discover who we are, what we believe, and the shepherd who leads our flock
            </p>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Who We Are */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-16 text-center">Who We Are</h2>

              <div className="space-y-16">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Background</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    The Pasture was founded with a vision to create a welcoming community where believers and seekers
                    alike can find rest in Christ. Inspired by Psalm 23, we strive to be a place where people can
                    experience the Good Shepherd's care, provision, and peace. Our journey began with a small group
                    of believers committed to sharing the gospel and building authentic relationships centered on Christ.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Vision</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    We envision a community where people from all walks of life can find belonging, grow in their faith,
                    and experience the transforming power of the gospel. Like sheep in a pasture, we aim to provide a
                    safe, nurturing environment where souls can be refreshed, hearts can be encouraged, and lives can
                    be transformed by the grace of God.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Our mission is to glorify God by making disciples of Jesus Christ, equipping believers for faithful
                    living, and extending God's love to our community and beyond. We are committed to biblical teaching,
                    authentic worship, compassionate service, and intentional discipleship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Our Beliefs */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-16 text-center">Our Beliefs</h2>

              <div className="bg-white p-6 md:p-12 shadow-soft">
                <div className="flex flex-col md:flex-row items-start md:space-x-6 mb-8">
                  <div className="bg-emerald-50 p-3 md:p-4 flex-shrink-0 mb-4 md:mb-0">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-stone-900">Presbyterian Church in America (PCA)</h3>
                    <p className="text-lg text-stone-600 leading-relaxed mb-4">
                      The Pasture is a member church of the Presbyterian Church in America (PCA), a denomination
                      committed to the authority of Scripture and the Reformed faith.
                    </p>
                    <p className="text-lg text-stone-600 leading-relaxed mb-8">
                      Our beliefs are summarized in the Westminster Confession of Faith and the Westminster Larger
                      and Shorter Catechisms. These historic documents faithfully express the system of doctrine
                      taught in the Scriptures.
                    </p>
                    <a
                      href="https://www.pcaac.org/bco/westminster-confession/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-green-700 hover:text-green-800 transition font-medium"
                    >
                      <span>Read the Westminster Standards</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Our Pastor */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-16 text-center">Our Pastor</h2>

              <div className="grid md:grid-cols-5 gap-12 items-start">
                <div className="md:col-span-2">
                  <div className="relative aspect-square overflow-hidden shadow-lifted">
                    <Image
                      src="/pastor_photo.jpg"
                      alt="Our Pastor"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-3xl font-semibold mb-2 text-stone-900">Pastor [Name]</h3>
                  <p className="text-green-700 font-medium mb-8 text-lg">Lead Pastor</p>
                  <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                    <p>
                      [Pastor bio will go here. This section will include information about the pastor's background,
                      education, calling to ministry, and heart for the congregation.]
                    </p>
                    <p>
                      [Additional paragraph about the pastor's vision for The Pasture, their family, interests,
                      and what they hope to see God do in and through this community.]
                    </p>
                    <p>
                      [Concluding paragraph highlighting the pastor's commitment to shepherding the flock and
                      serving the community with the love of Christ.]
                    </p>
                  </div>
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
