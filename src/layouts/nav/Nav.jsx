import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useCarCart } from "../../context/CarShoppingContext";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const { cartItems } = useCarCart();
  const cartItemCount = cartItems.length;

  const handleCloseMenu = () => {
    setVisible(false);
  };
  // Ref for the mobile menu
  const menuRef = useRef(null);
  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-around md:items-center">
      <div className="btn btn-ghost text-xl">
        <a>LuxET</a>
      </div>

      {/* Desktop Menu */}
      <ul className="menu menu-horizontal hidden md:flex gap-12 justify-center py-4 px-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/garage"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : ""
            }
          >
            Garage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      {/* Cart */}
      <div className="hidden md:flex items-center gap-4">
        <NavLink to="/cart">
          <div className=" relative">
            <FaCartShopping size={24} className=" cursor-pointer" />
            {cartItemCount > 0 && (
              <span className="absolute -top-3 -right-5    bg-red-400 text-white text-xs font-bold px-1  rounded-full">
                {cartItemCount}
              </span>
            )}
          </div>
        </NavLink>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center gap-4 border border-green-200 shadow-md">
        {!visible && (
          <button onClick={() => setVisible(!visible)} className=" ">
            <GiHamburgerMenu size={24} />
          </button>
        )}
      </div>
      {/* User Profile Dropdown */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://avatars.githubusercontent.com/u/83220156?s=400&u=444dbbb30ba7a3d838a824b3fe55826bd952d97b&v=4"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={
          visible
            ? " menu menu-vertical fixed md:hidden left-0.5 top-2 w-[40%] py-4  flex flex-col gap-3  border   border-amber-50 bg-white z-50 ease-in-out duration-500 shadow-md pl-4"
            : "ease-in-out w-[60%] duration-500 fixed top-0 left-[-100%]"
        }
      >
        <ul className="">
          <button
            onClick={handleCloseMenu}
            className=" absolute top-1 right-1 hover:text-red-500 "
          >
            <IoMdClose size={24} className=" text-red-800" />
          </button>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/garage"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Garage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <NavLink to="/cart">
          <div className="relative">
            <FaCartShopping size={24} className=" cursor-pointer" />
            {cartItemCount > 0 && (
              <span className="absolute -top-3 -right-5    bg-red-400 text-white text-xs font-bold px-1  rounded-full">
                {cartItemCount}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
