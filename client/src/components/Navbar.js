import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { user, loggedIn } = useUser();

  useEffect(() => {}, [loggedIn]);
  return (
    <div className="flex justify-between py-4 px-16 bg-blue-500 h-16 max-h-16 items-center font-semibold text-white text-lg fixed w-screen z-10">
      <Link to={"/"}>
        <div className=" cursor-pointer ">Home</div>
      </Link>

      <div className="flex gap-6">
        {!user && (
          <Link to={"login"}>
            <div className=" cursor-pointer ">Login</div>
          </Link>
        )}
        {!user && (
          <Link to={"register"}>
            <div className=" cursor-pointer ">Register</div>
          </Link>
        )}
        {user && (
          <Link to={"logout"}>
            <div className=" cursor-pointer ">Logout</div>
          </Link>
        )}
        {user && (
          <Link to={"userProfile"}>
            <div className=" cursor-pointer ">Profile</div>
          </Link>
        )}
        {user && (
          <Link to={"/"}>
            <div className=" cursor-pointer ">Icon</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
