import { Link, NavLink } from "react-router";
import logo from "../assets/images/logo.png";
import { links } from "./Design";
import CustomNavLink from "./CustomNavLink";
const Footer = () => {
  return (
    <footer className="pt-10 bg-blue-950 text-white px-16 md:px-25 relative">
      <div className="flex md:flex-row flex-col justify-between ">
        <div className="lg:w-3xs sm:w-52 sm:h-32 w-3/4">
          <img className="w-full" src={logo} alt="logo" />
        </div>
        <div>
          <h2 className="mt-5 text-xl mr-5">Quick Links</h2>
          <ul>
          {links.map((link, id) => {
            return (
              
                <li key={id} className="list-none capitalize text-lg ">
                  <CustomNavLink href={link.path}>{link.name}</CustomNavLink>
                </li>
           
            );
          })}
          <li key={'Start Hiring'} className="list-none capitalize text-lg">
            <NavLink
              to={`/terms&conditons`}
              tabIndex={-1}
              className={`flex items-center transition duration-200 ease `}
            >
              Terms and Conditions
            </NavLink>
          </li>
          </ul>
        </div>
      </div>{" "}
      <hr className="h-0.5 mt- bg-gray-300" />
      <div className="flex justify-between flex-col md:flex-row  py-4">
        <Link className="text-xl" to="tel:+91 8517967915">
          +91 8517967915
        </Link>
        <Link className="text-xl" to="mailto:pcsmartclasses@gmail.com">
          pcsmartclasses@gmail.com
        </Link>
      </div>
      <p className="text-sm text-gray-400 mt-4 mx-auto w-fit">
        © {new Date().getFullYear()} HOME TUITION. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
