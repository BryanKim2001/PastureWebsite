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
        <section className="relative h-[80vh] min-h-[500px]">
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
                  The Pasture is the English Ministry of young adults at Ilshin Presbyterian Church (ISPC). ISPC began in Downey and relocated to Buena Park in the summer of 2017, where our ministry has continued under the care of our mother church.
                  Over the years, we have experienced many seasons of change, but in early 2025 we embraced a new chapter by rebranding as The Pasture. This name reflects what our community has come to long for most: a place of true rest and solace in Christ. While still a young ministry, we are committed to building a strong theological foundation and nurturing a Christ-centered community where weary souls can find renewal, encouragement, and belonging.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Vision</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                  We envision a community where those who are lost, weak, and weary can find true rest in Christ. Our desire is to bring people into the presence of God, build their confidence in the gospel, and become a culture that reflects Christ to our neighbors and beyond. We long to embody the words of Jesus: “Come to me, all who labor and are heavy laden, and I will give you rest” (Matthew 11:28). In a restless world, our vision is to be a place where souls are refreshed, disciples are formed, and the love of Christ extends outward to impact families, workplaces, and communities.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                  Our mission is to center everything we do on Christ. We gather for worship that exalts God in spirit and in truth (John 4:24), leading us deeper into discipleship where His Word transforms our lives (2 Timothy 3:16–17). Out of this, we cultivate fellowship that reflects the unity of the body of Christ (Acts 2:42–47), where burdens are shared and joys are multiplied. Through worship, discipleship, and fellowship, we aim to not only grow in faith ourselves but also to invite others to encounter the same grace, peace, and rest we have found in Jesus.
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
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-stone-900">Dedicated to a reformed faith</h3>
                    <p className="text-lg text-stone-600 leading-relaxed mb-4">
                    Our church belongs to the Presbyterian Church of America(PCA), whose beliefs are summarized in the Westminster Confession of Faith and Catechisms. We gladly confess Christ, submit to Scripture, and seek to live out the gospel together.
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
                  <h3 className="text-3xl font-semibold mb-2 text-stone-900">Pastor Issac Oh</h3>
                  <p className="text-green-700 font-medium mb-8 text-lg">Lead Pastor</p>
                  <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                    <p>
                    Issac Oh was born and raised in Southern California, spending his early years in Orange, Los Angeles, and San Bernardino Counties. After high school, he moved to Las Vegas, Nevada, where he pursued a career in the hospitality and entertainment industry for nearly a decade. During that time, the Lord called him into ministry, leading him back to California to continue his education and prepare for pastoral service.
                    </p>
                    <p>
                    Issac earned a B.A. in Christian Ministries from The Master&apos;s University and went on to receive his Master of Divinity from Westminster Seminary California. He is now an ordained minister in the Presbyterian Church in America (PCA) and joyfully serves Christ and His church through preaching, teaching, and shepherding God&apos;s people.
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
