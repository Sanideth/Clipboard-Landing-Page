import Image from "../components/Image";
import Logo from "../img/logo.svg";
import List from "../components/List";
import Icon from "../components/Icon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <Image src={Logo} altText="Main Logo" />
      </div>
      <div className="footer__list-container">
        <List className="footer" />
      </div>
      <div className="footer__social-media-container">
        <Icon socialMedia="facebook2" className="facebook" />
        <Icon socialMedia="twitter" className="twitter" />
        <Icon socialMedia="instagram" className="instagram" />
      </div>
    </footer>
  );
};

export default Footer;
