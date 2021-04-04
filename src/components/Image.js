const Image = (props) => {
  return (
    <img src={props.src} alt={props.altText} className={props.className} />
  );
};

export default Image;
