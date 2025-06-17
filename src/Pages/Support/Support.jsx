import React from "react";

export default function Support() {
  return (
    <section className="relative bg-gray-900 text-gray-400 body-font">
      <div className="container mx-auto px-5 py-24">
        {/* Title and description */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h1 className="text-white text-3xl font-medium mb-4">Contact Us</h1>
          <p className="text-base leading-relaxed lg:w-2/3">
            Have questions, feedback, or collaboration ideas? We&apos;re here to
            help. Drop us a line!
          </p>
        </div>

        {/* Form starts */}
        <div className="mx-auto w-full md:w-2/3 lg:w-1/2">
          <form
            action="https://fabform.io/f/{form-id}"
            method="POST"
            className="flex flex-wrap -m-2"
          >
            {/* Name field */}
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="peer w-full p-3 rounded border border-gray-700 bg-gray-800 placeholder-transparent text-gray-100 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 outline-none transition"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-3 bg-gray-800 px-1 text-sm text-indigo-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-500"
                >
                  Name
                </label>
              </div>
            </div>

            {/* Email field */}
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="peer w-full p-3 rounded border border-gray-700 bg-gray-800 placeholder-transparent text-gray-100 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 outline-none transition"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-3 bg-gray-800 px-1 text-sm text-indigo-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-500"
                >
                  Email
                </label>
              </div>
            </div>

            {/* Message field */}
            <div className="w-full p-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="peer w-full h-32 p-3 rounded border border-gray-700 bg-gray-800 placeholder-transparent text-gray-100 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 outline-none transition resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 top-3 bg-gray-800 px-1 text-sm text-indigo-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-500"
                >
                  Message
                </label>
              </div>
            </div>

            {/* Submit button */}
            <div className="w-full p-2">
              <button
                type="submit"
                className="mx-auto block bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-8 rounded focus:outline-none transition"
              >
                Send
              </button>
            </div>

            {/* Footer with address and social icons */}
            <div className="w-full p-2 mt-8 border-t border-gray-800 text-center">
              <p className="my-5">
                B-20, Sector 6, R.K. Puram,
                <br />
                New Delhi, Delhi, India - 110022
              </p>
              <div className="inline-flex space-x-4">
                {/* Facebook */}
                <a href="#" className="text-gray-500 hover:text-white">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#" className="text-gray-500 hover:text-white">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-gray-500 hover:text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="text-gray-500 hover:text-white">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
