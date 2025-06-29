import { NavLink } from "react-router"

const CustomNavLink = ({children,href}) => {
          
    const linkStyle = 'flex items-center transition duration-200 ease '
  return (
    <NavLink to={href} tabIndex={-1} className={`${linkStyle} `}>
      {children}
    </NavLink>
  ); 
}

export default CustomNavLink