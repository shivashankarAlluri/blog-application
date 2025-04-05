import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = document.cookie.includes("token");
      console.log(loggedIn)
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus(); 

    const interval = setInterval(checkLoginStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/";
    setIsLoggedIn(false); // update state immediately
    window.location.href = "/login"; // redirect to login
  };

  return (
    <header style={{ padding: "15px", background: "#f0f0f0", borderBottom: "1px solid #ccc" }}>
      <nav>
        <ul style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
          fontSize: "16px"
        }}>
          {!isLoggedIn && <li><Link to="/register">Register</Link></li>}
          {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
          {isLoggedIn && <li><Link to="/getData">View Blogs</Link></li>}
          {isLoggedIn && <li><Link to="/Post">Write Blog</Link></li>}
          {isLoggedIn && (
            <li>
              <button
                onClick={handleLogout}
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  color: "blue",
                  textDecoration: "underline",
                  padding: 0
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
