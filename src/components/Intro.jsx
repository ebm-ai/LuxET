import React from "react";

const Intro = () => {
  return (
    <div>
      <div className="text-center pt-5 pb-3 md:py-7 relative bg-gradient-to-b from-transparent via-black to-black md:bg-none md:bg-black/30">
        <div className="absolute inset-0 pointer-events-none"></div>
        <div className="container mx-auto mt-7 md:mt-0">
          <h1 className="text-white text-2xl md:text-4xl font-bold pt-2 pb-4 md:mt-5 md:pt-3">
            Car buying <span className="block">shaped to your life</span>
          </h1>
          <div className="hidden md:block mx-auto pb-3 max-w-md">
            <div className="relative w-full flex justify-center"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-3 pb-4">
            {[
              {
                href: "/garage",
                label: "Shop now",
                color: "bg-pink-600",
              },
              {
                href: "/about",
                label: "Learn more",
                color: "bg-teal-600",
              },
            ].map(({ href, label, color }, index) => (
              <a
                key={index}
                href={href}
                className={`rounded-lg border border-gray-700 ${color} text-white p-4 w-40 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all`}
              >
                <span className="text-lg font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
