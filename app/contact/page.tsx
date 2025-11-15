'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:bryankapps@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(
      `Name: ${formData.name || 'Not provided'}\nEmail: ${formData.email}\n\nMessage:\n${formData.message || 'No message provided'}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <Header />
      <main className="bg-stone-50">
        {/* Hero */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">Contact Us</h1>
            <p className="text-xl text-stone-600">
              We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you soon.
            </p>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* Contact Form */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 md:p-12 shadow-soft">
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition text-stone-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition text-stone-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition text-stone-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition resize-none text-stone-900"
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-green-700 text-white px-6 py-3 md:px-10 md:py-4 hover:bg-green-800 transition text-base md:text-lg inline-flex items-center space-x-2"
                    >
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-sm text-stone-500 text-center pt-4">
                    * Email is required
                  </p>
                </form>
              </div>

              {/* Additional Info */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
                <div className="bg-white p-6 md:p-8 shadow-soft">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-50 p-3 mr-4">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-base md:text-lg text-stone-900">Gathering Times</h3>
                  </div>
                  <p className="text-stone-600">Sunday Worship: 12:30 PM</p>
                  <p className="text-stone-600">Friday Nights: 7:30 PM</p>
                </div>

                <div className="bg-white p-6 md:p-8 shadow-soft">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-50 p-3 mr-4">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-base md:text-lg text-stone-900">Connect</h3>
                  </div>
                  <p className="text-stone-600 mb-4">Follow us on social media</p>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/thepastureministry/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@christcovenantfellowshippc8686" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
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
