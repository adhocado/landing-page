import "./header.scss";

const Header = ({ howItWorksScroll, teamScroll, aboutScroll }: any) => {
  return (
    <header>
      <div className="top-navbar">
        <div className="logo">
          <a>adhocado</a>
        </div>
        <nav>
          <ul>
            {/* <li>
              <a href="/">Features</a>
            </li> */}
            <li>
              <a onClick={howItWorksScroll}>How It Works</a>
            </li>
            <li>
              <a onClick={teamScroll}>Our Team</a>
            </li>
            <li>
              <a onClick={aboutScroll}>About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
