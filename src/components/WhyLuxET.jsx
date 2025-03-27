import React from "react";
import Savetime from "../assets/props/savetime.jpg";

const WhyLuxET = () => {
  return (
    <div className="navbar-center hidden lg:flex py-5 text-center bg-black text-white">
      <div className="navbar-start"></div>
      <div className="container max-w-screen-lg">
        <h2 className="text-2xl font-bold pt-3 pb-5 text-gray-300">
          Why LuxET?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-gray-900 rounded-lg text-center">
            <img
              src={Savetime}
              alt="Transparent Pricing"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Transparent Pricing</h3>
            <p className="text-gray-400">
              No surprises here. See how much you'll pay on cars you like.
            </p>
          </div>
          <div className="p-5 bg-gray-900 rounded-lg text-center">
            <img
              src={Savetime}
              alt="Minutes, not Hours"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Minutes, not Hours</h3>
            <p className="text-gray-400">
              Time-saving tools to help you find the right car in a snap.
            </p>
          </div>
          <div className="p-5 bg-gray-900 rounded-lg text-center">
            <img
              src={Savetime}
              alt="Shop Your Way"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Shop Your Way</h3>
            <p className="text-gray-400">
              Your own pace, your own space. Shop online where and when it's
              convenient for you.
            </p>
          </div>
        </div>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </button>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default WhyLuxET;
