import Heading from "../components/Heading";
import CtaButton from "../components/CtaButton";

const Outro = () => {
  return (
    <section className="section-outro">
      <div className="section-outro__heading-container">
        <Heading
          tag="h2"
          headingClassName="heading-secondary"
          text="Clipboard for iOS and Mac OS"
          paragraphClassName="paragraph-secondary"
          paragraphText="Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
        and you’re ready to start adding to your clipboard."
        />
      </div>
      <div className="section-outro__button-container">
        <CtaButton className="cyan" text="Download for iOS" />
        <CtaButton className="blue" text="Download for Mac" />
      </div>
    </section>
  );
};

export default Outro;
