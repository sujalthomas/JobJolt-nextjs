import React, { useEffect, useState } from "react";
import { Link  } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import {  menu, close } from "../assets";

import jjlogo from "../assets/jjlogo.webp";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false); // Modal to confirm OpenAI key
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLink = (nav) => {
    if (nav.href) {
      return (
        <span onClick={() => {
          if (window.outerWidth <= 640) {
            window.location.href = nav.href; // Directly using window.location for external URLs
          } else {
            setShowModal(true);
          }
        }}>
          {nav.title}
        </span>
      );
    }
    return <a href={`#${nav.id}`}>{nav.title}</a>;
  };
  

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={jjlogo} alt='logo' className='h-12 w-auto object-contain' />
            <p className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-[18px] font-bold cursor-pointer flex '>
              Job Jolt &nbsp;
              <span className='sm:block hidden'> | Sujal Thomas</span>
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                {renderNavLink(nav)}
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
            />

<div
  className={`${
    !toggle ? "hidden" : "flex"
  } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
>
  <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
    {navLinks.map((nav) => (
      <li
        key={nav.id}
        className={`font-poppins font-medium cursor-pointer text-[16px] ${
          active === nav.title ? "text-white" : "text-white"
        }`}
        onClick={() => {
          setToggle(!toggle);
          setActive(nav.title);
        }}
      >
        {nav.href ? (
          <span
            onClick={(e) => {
              e.stopPropagation(); // Prevent the above onClick from being triggered
              if (window.innerWidth <= 640) {
                window.location.href = nav.href; // Direct navigation for small screens
              } else {
                // Presuming setShowModal is either passed as a prop or is available in this component
                setShowModal(true); 
              }
            }}
          >
            {nav.title}
          </span>
        ) : (
          <a href={`#${nav.id}`}>{nav.title}</a>
        )}
      </li>
    ))}
  </ul>
</div>






          </div>
        </div>
      </nav>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-black p-8 rounded-lg w-96">
            <p className="mb-4">Please confirm that you have an OpenAI serial key:</p>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="confirmKey" className="mr-2"/>
              <label htmlFor="confirmKey">I confirm that I have an OpenAI serial key.</label>
            </div>
            <button 
              onClick={() => {
                setShowModal(false);
                window.location.href = "https://chrome.google.com/webstore/detail/lynk/pjlnajjbbpjgimaidaoinoeebehkcboj?hl=en";
              }}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Continue
            </button>
            <button 
              onClick={() => setShowModal(false)}
              className="ml-4 p-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
