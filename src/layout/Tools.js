import Heading from "../components/Heading";
import Image from "../components/Image";
import srcBlacklistIcon from "../img/icon-blacklist.svg";
import srcTextIcon from "../img/icon-text.svg";
import srcPreviewIcon from "../img/icon-preview.svg";
import srcGoogle from "../img/logo-google.png";
import srcIbm from "../img/logo-ibm.png";
import srcMicrosoft from "../img/logo-microsoft.png";
import srcHp from "../img/logo-hp.png";
import srcVectorGraphics from "../img/logo-vector-graphics.png";

const imageArr = [srcGoogle, srcIbm, srcMicrosoft, srcHp, srcVectorGraphics];

const Tools = () => {
  return (
    <section className="section-tools">
      <div className="section-tools__heading-container">
        <Heading
          tag="h2"
          headingClassName="heading-secondary"
          text="Supercharge your workflow"
          paragraphClassName="paragraph-secondary"
          paragraphText="We’ve got the tools to boost your productivity."
        />
      </div>
      <div className="section-tools__examples">
        <div className="section-tools__example">
          <Image src={srcBlacklistIcon} altText="Blacklist Icon" />
          <Heading
            tag="h3"
            headingClassName="heading-tertiary"
            text="Create blacklists"
            paragraphClassName="paragraph-tertiary"
            paragraphText="Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
          />
        </div>
        <div className="section-tools__example">
          <Image src={srcTextIcon} altText="Text Icon" />
          <Heading
            tag="h3"
            headingClassName="heading-tertiary"
            text="Plain text snippets"
            paragraphClassName="paragraph-tertiary"
            paragraphText="Remove unwanted formatting from copied text for a consistent look."
          />
        </div>
        <div className="section-tools__example">
          <Image src={srcPreviewIcon} altText="Preview Icon" />
          <Heading
            tag="h3"
            headingClassName="heading-tertiary"
            text="Sneak preview"
            paragraphClassName="paragraph-tertiary"
            paragraphText="Quick preview of all snippets on your Clipboard for easy access."
          />
        </div>
      </div>
      <div className="section-tools__partners">
        {imageArr.map((image, index) => (
          <Image src={image} altText="Partner Icon" key={index} />
        ))}
      </div>
    </section>
  );
};

export default Tools;
