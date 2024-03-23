// import React from "react";
// import { NavLink } from "react-router-dom";
// import RegisterPage from "./RegisterPage";
// import LoginPage from "./LoginPage";
// import { Route } from "react-router-dom";

// function Home() {
//   function HandleRegister() {
//     <Route path="register" element={<RegisterPage />} />;
//   }
//   function HandleLogin() {
//     <Route path="login" element={<LoginPage />} />;
//   }
//   return (
//     // <>
//     //   <button onClick={HandleRegister}> register</button>
//     //   <button onClick={HandleLogin}> login</button>
//     // </>
//     <>
//       <div>Home</div>
//       <div>
//         <NavLink to={"register"}>register</NavLink>
//         <NavLink to={"login"}>login</NavLink>
//       </div>
//     </>
//   );
// }

// export default Home;
import React from "react";
import { NavLink } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { Route } from "react-router-dom";
import ImgMediaCard from "./ImgMediaCard";

function Home() {
  function HandleRegister() {
    <Route path="register" element={<RegisterPage />} />;
  }
  function HandleLogin() {
    <Route path="login" element={<LoginPage />} />;
  }
  return (
    // <>
    //   <button onClick={HandleRegister}> register</button>
    //   <button onClick={HandleLogin}> login</button>
    // </>
    <>
      <div>Home</div>
      <NavLink to={"register"}>register</NavLink>
      <NavLink to={"login"}>login</NavLink>
      <div className="card-wrapper-div">
        <div className="sidebar">
          <h1>sidebar</h1>
        </div>

        <div className="home-cards">
          <h1 className="heading">Trending crops</h1>
          <div className="Dis">
            <ImgMediaCard />
            <ImgMediaCard />
            <ImgMediaCard />
          </div>
          <div className="Dis">
            <ImgMediaCard />
            <ImgMediaCard />
            <ImgMediaCard />
          </div>
          <div className="Dis">
            <ImgMediaCard />
            <ImgMediaCard />
            <ImgMediaCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
