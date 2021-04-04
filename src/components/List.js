const items = [
  "FAQs",
  "Privacy Policy",
  "Install Guide",
  "Contact Us",
  "Press Kit",
];

const List = (props) => {
  return (
    <ul className={`${props.className}__list`}>
      {items.map((item, index) => (
        <li className={`${props.className}__list-item`} key={index}>
          <a
            href="https://github.com/Sanideth"
            className={`${props.className}__list-link`}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
