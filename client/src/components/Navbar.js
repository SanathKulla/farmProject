import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Avatar from "react-avatar";
const Navbar = () => {
  const { user, loggedIn } = useUser();

  useEffect(() => {}, [loggedIn]);
  return (
    <div className="flex justify-between py-4 px-16 bg-[#6D9520] h-16 max-h-16 items-center font-semibold text-white text-lg fixed w-screen z-10">
      <Link to={"/"}>
        <div className=" cursor-pointer ">Home</div>
      </Link>

      <div className="flex gap-6 justify-center items-center">
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
          <Link to={"userProfile"}>
            <Avatar name={user.username} size="45" round={true} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
