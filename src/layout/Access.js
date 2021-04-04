import Heading from "../components/Heading";
import Image from "../components/Image";
import srcImage from "../img/image-devices.png";

const Access = (props) => {
  return (
    <section className="section-access">
      <div className="section-access__heading-container">
        <Heading
          tag="h2"
          headingClassName="heading-secondary"
          text="Access Clipboard anywhere"
          paragraphClassName="paragraph-secondary"
          paragraphText="Whether you’re on the go, or at your computer, you can access all your Clipboard 
          snippets in a few simple clicks."
        />
      </div>
      <div className="section-access__img-container">
        <Image src={srcImage} altText="Devices" />
      </div>
    </section>
  );
};

export default Access;
