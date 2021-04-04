const items = [
  "FAQs",
  "Contact Us",
  "Privacy Policy",
  "Press Kit",
  "Install Guide",
];

const List = (props) => {
  return (
    <ul className={`${props.className}__list`}>
      {items.map((item, index) => (
        <li className={`${props.className}__list-item`}>
          <a
            href="https://github.com/Sanideth"
            className={`${props.className}__list-link`}
            key={index}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
