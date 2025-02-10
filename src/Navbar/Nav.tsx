import logo from "../images/logo.png";
import "../scss/nav.scss";

const Nav = () => {
  return (
    <div>
      <section>
        <img src={logo} width={50} height={50} alt="logo" />
        <h1>Game-Home</h1>
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
