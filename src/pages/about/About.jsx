import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaHandshake, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-6 text-white">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About LuxET
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        LuxET is your premier destination for buying high-quality cars online.
        We offer a seamless car-shopping experience with a vast selection,
        transparent pricing, and excellent customer service, all from the
        comfort of your home.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 text-center shadow-lg bg-white text-black rounded-2xl border-2 border-gray-200">
          <FaCar className="text-5xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Wide Selection</h2>
          <p>
            Explore a diverse range of high-quality cars to match your style and
            budget.
          </p>
        </div>

        <div className="p-6 text-center shadow-lg bg-white text-black rounded-2xl border-2 border-gray-200">
          <FaHandshake className="text-5xl text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Trusted Deals</h2>
          <p>
            Enjoy transparent pricing and fair deals, ensuring you get the best
            value.
          </p>
        </div>

        <div className="p-6 text-center shadow-lg bg-white text-black rounded-2xl border-2 border-gray-200">
          <FaUsers className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Customer Focus</h2>
          <p>
            We prioritize your satisfaction with personalized service and expert
            guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
