import Heading from "../components/Heading";
import CtaButton from "../components/CtaButton";
import Logo from "../components/Logo";
import logoSrc from "../img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Logo src={logoSrc} altText="Main Logo" />
      </div>
      <div className="header__heading-container">
        <Heading
          tag="h1"
          headingClassName="heading-main"
          text="A history of everything you copy"
          paragraphClassName="paragraph-main"
          paragraphText="Clipboard allows you to track and organize everything you 
          copy. Instantly access your clipboard on all your devices."
        />
      </div>
      <div className="header__button-container">
        <CtaButton className="cyan" text="Download for iOS" />
        <CtaButton className="blue" text="Download for Mac" />
      </div>
    </header>
  );
};

export default Header;
