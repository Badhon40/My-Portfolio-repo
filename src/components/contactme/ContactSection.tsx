/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Mail, PhoneCall } from 'lucide-react';
import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef<any>(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      }
    ).then(
        () => {
          setStatusMessage('✅ Message sent successfully!');
          setStatusType('success');
          form.current.reset();
        },
        (error) => {
          setStatusMessage('❌ Failed to send message. Please try again.');
          setStatusType('error');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact" className="px-4 py-20 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          <span className="text-orange-500">Have a question?</span> Just ask!
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-lg font-medium">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-blue-200 text-black"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium">E-mail</label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-blue-200 text-black"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-lg font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Say it your way"
              rows={5}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-blue-200 text-black"
              required
            ></textarea>
          </div>

          {statusMessage && (
            <div className={`md:col-span-2 text-center font-medium mt-2 ${
              statusType === 'success' ? 'text-green-600' : 'text-red-500'
            }`}>
              {statusMessage}
            </div>
          )}

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
