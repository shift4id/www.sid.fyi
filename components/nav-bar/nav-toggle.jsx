import PropTypes from "prop-types";
import { Menu, X } from "react-feather";

const NavToggle = ({ isOpen, setIsOpen }) => (
  <button
    type="button"
    className="z-50 p-2 bg-gray-200 rounded-md dark:bg-gray-800 focus:outline-none"
    onClick={() => setIsOpen(!isOpen)}
  >
    <span className="sr-only">Toggle Navbar</span>
    {isOpen ? <X /> : <Menu />}
  </button>
);

NavToggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default NavToggle;
