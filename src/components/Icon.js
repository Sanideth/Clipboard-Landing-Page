import sprite from "../img/icomoon/symbol-defs.svg";

const Icon = (props) => {
  return (
    <a href="https://github.com/Sanideth" className="icon-link">
      <span class="sr-only">Social Media Icon</span>
      <svg className={`social-media social-media--${props.className}`}>
        <use href={`${sprite}#icon-${props.socialMedia}`}></use>
      </svg>
    </a>
  );
};

export default Icon;
