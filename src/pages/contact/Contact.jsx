import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="container max-w-screen-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-300 mb-6">
          Contact Us
        </h2>
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-400 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-400 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-400 text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              placeholder="Type your message here..."
              rows="5"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
