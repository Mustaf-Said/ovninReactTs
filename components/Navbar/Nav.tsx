import logo from "../../images/logo.png";

import "../../scss/nav.scss";

const Nav = () => {
  return (
    <div className="header">
      <section className="logo">
        <h1> Game </h1>
        <img src={logo} alt="logo" />
        <h1> Home </h1>
      </section>
      <section>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
      </section>
    </div>
  );
};

export default Nav;
