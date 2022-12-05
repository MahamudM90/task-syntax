import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo/logo.png";

const Header = () => {

  return (
    <div className="navbar bg-base-100 lg:px-52">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <Link
          to="/"
          className="normal-case text-xl font-bold flex justify-center items-center gap-2"
        >
          <img className="w-10" src={logo} alt="" />
          Task Syntax
        </Link>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div className="navbar-end">
        <Link
            to="/login"
            className="btn btn-primary"
          >
            Login
          </Link>
      </div>
    </div>
  );
};

export default Header;
