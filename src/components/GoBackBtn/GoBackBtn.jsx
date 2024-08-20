import { Link } from "react-router-dom";
import css from "./GoBackBtn.module.css";

const GoBackBtn = ({ children, to }) => {
  return (
    <Link to={to} className={css.goBackBtn}>
      {children}
    </Link>
  );
};

export default GoBackBtn;
