const Heading = (props) => {
  const CustomHeading = props.tag;
  return (
    <>
      <CustomHeading className={props.headingClassName}>
        {props.text}
      </CustomHeading>
      <p className={props.paragraphClassName}>{props.paragraphText}</p>
    </>
  );
};

export default Heading;
