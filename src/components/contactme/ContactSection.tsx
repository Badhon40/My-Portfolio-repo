'use client';

import { Mail, PhoneCall } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          <span className="text-orange-500">Have a question?</span> Just ask!
        </h2>
        <p className="text-center text-gray-600  mb-10">
        Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-lg font-medium ">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-blue-200 text-black "
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium ">
              E-mail
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-blue-200 text-black "
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-lg font-medium">
              Message
            </label>
            <textarea
              placeholder="Say it your way"
              rows={5}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-blue-200 text-black "
              required
            ></textarea>
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center mt-6">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <PhoneCall className="text-orange-500" />
              <div>
                <p className="font-semibold">Phone Number</p>
                <p>(+880)1876638846</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Mail className="text-purple-900 text-xl" />
              <div>
                <p className="font-semibold">Email address</p>
                <p>badhonraniroy@gmail.com</p>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 md:mt-0 px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow hover:opacity-90 transition"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
