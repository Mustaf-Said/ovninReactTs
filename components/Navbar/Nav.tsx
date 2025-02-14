import logo from "../../images/logo.png";

import "../../scss/nav.scss";
import V7On from "../ovn/V7On";

const Nav = () => {
  return (
    <div className="header">
      <V7On />
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
