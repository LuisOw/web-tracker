import { useContext } from "react";
import { AuthContext } from "../../context/auth";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar">
      <button className="button_navbar" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
