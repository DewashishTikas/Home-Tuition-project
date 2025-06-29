import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link, useLocation } from "react-router";
import logo from "../assets/images/logo.png";
import CustomNavLink from "./CustomNavLink";
import { links } from "./Design.jsx";
import Button from "./Button.jsx";
import { IoIosClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ Ypos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef();

  function toogleMenu() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (Ypos) {
        setIsScrolled(window.scrollY >= Ypos - 90);
      }
    });
    document.body.querySelector("main").addEventListener("click", () => {
      if (isOpen) {
        setIsOpen(false);
      }
    });
  }, [Ypos]);
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 }
      );
    }
  }, [isScrolled]);
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <>
      <header
        ref={headerRef}
        className={`flex items-center justify-center  fixed w-full z-2 top-0 left-0 ${
          location.pathname !== "/" || isScrolled || isOpen
            ? "bg-white text-black shadow"
            : "text-white"
        } `}
      >
        <nav className="flex items-center justify-between w-[85%] m-auto">
          <div>
            <Link to="/" tabIndex={-1}>
              <img className=" w-28 lg:w-36" src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex items-center gap-6 text-xl">
              {links.map((link, id) => (
                <li key={id} className="list-none capitalize">
                  <CustomNavLink href={link.path}>{link.name}</CustomNavLink>
                </li>
              ))}
              <li key="button" className="list-none capitalize ">
                <Button path={"/contact"}>Start Hiring</Button>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button onClick={toogleMenu} aria-label="hamburger ">
              {isOpen ? (
                <IoIosClose
                  size={36}
                  className={`${isOpen ? "text-black" : ""} `}
                />
              ) : (
                <RxHamburgerMenu size={36} />
              )}
            </button>
          </div>
          {isOpen && (
            <div className="absolute w-full right-0 top-[70px] space-y-2 text-base pl-15 bg-white text-black py-5">
              {links.map((link, id) => (
                <li key={id} className="list-none capitalize ">
                  <CustomNavLink href={link.path}>{link.name}</CustomNavLink>
                </li>
              ))}
              <Button path="/contact">Start Hiring</Button>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
