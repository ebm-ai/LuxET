import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-5">
      <div className="container mx-auto px-5">
        {/* Footer Content Grid */}
        <div className="grid  grid-cols-2 md:grid-cols-4 gap-5  md:text-left">
          {/* Services Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold">Services</h6>
            <a className="link link-hover block mt-2">Branding</a>
            <a className="link link-hover block">Design</a>
            <a className="link link-hover block">Marketing</a>
            <a className="link link-hover block">Advertisement</a>
          </nav>

          {/* Company Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold">Company</h6>
            <a className="link link-hover block mt-2" href="/about">
              About us
            </a>
            <a className="link link-hover block" href="/contact">
              Contact
            </a>
            <a className="link link-hover block" href="/garage">
              Garage
            </a>
          </nav>

          {/* Legal Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold">Legal</h6>
            <a className="link link-hover block mt-2">Terms of use</a>
            <a className="link link-hover block">Privacy policy</a>
            <a className="link link-hover block">Cookie policy</a>
          </nav>

          {/* Newsletter Section */}
          <form>
            <h6 className="footer-title text-lg font-semibold">Newsletter</h6>
            <p className="text-sm mt-2">Enter your email address</p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mt-3">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered w-full sm:w-auto"
              />
              <button className="btn btn-primary w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            LuxET Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
