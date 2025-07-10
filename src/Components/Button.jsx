import { Link } from "react-router";

const Button = ({ path, children, css, submit }) => {
  return (
    <button
      tabIndex={-1}
      className={`${css} bg-blue-500 py-2 px-4 rounded flex items-center justify-center text-white `}
      type={submit}
    >
     <Link to={`${path}`}>{children}</Link>
    </button>
  );
};

export default Button;
