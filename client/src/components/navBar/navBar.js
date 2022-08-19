import React, { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  const { user } = useAuthContext();

  return (
    <>
      {user && user.email === "apparel@apparel.com" && (
        <nav>
          <Link to="/" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
            <h5>Home</h5>
          </Link>
          <h5>|</h5>
          <Link to="order" onClick={() => setActiveNav("#order")} className={activeNav === "#order" ? "active" : ""}>
            <h5>Place Order Here</h5>
          </Link>
        </nav>
      )}
    </>
  );
}

export default Nav;

//
