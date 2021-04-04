import Heading from "../components/Heading";
import Image from "../components/Image";
import srcImage from "../img/image-computer.png";

const Tracking = () => {
  return (
    <section className="section-tracking">
      <div className="container">
        <div className="section-tracking__heading-container">
          <Heading
            tag="h2"
            headingClassName="heading-secondary"
            text="Keep track of your snippets"
            paragraphClassName="paragraph-secondary"
            paragraphText="Clipboard instantly stores any item you copy in the cloud, 
        meaning you can access your snippets immediately on all your 
        devices. Our Mac and iOS apps will help you organize everything."
          />
        </div>
        <div className="section-tracking__content-container">
          <div className="section-tracking__image-container">
            <Image
              src={srcImage}
              altText="Computer"
              className="section-tracking__img"
            />
          </div>
          <div className="section-tracking__content-text-container">
            <div className="section-tracking__content-heading-container">
              <Heading
                tag="h3"
                headingClassName="heading-tertiary"
                text="Quick Search"
                paragraphClassName="paragraph-tertiary"
                paragraphText="Easily search your snippets by content, category, web address, application, and more."
              />
            </div>
            <div className="section-tracking__content-heading-container">
              <Heading
                tag="h3"
                headingClassName="heading-tertiary"
                text="iCloud Sync"
                paragraphClassName="paragraph-tertiary"
                paragraphText="Instantly saves and syncs snippets across all your devices."
              />
            </div>
            <div className="section-tracking__content-heading-container">
              <Heading
                tag="h3"
                headingClassName="heading-tertiary"
                text="Complete History"
                paragraphClassName="paragraph-tertiary"
                paragraphText=" Retrieve any snippets from the first moment you started using the app."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
