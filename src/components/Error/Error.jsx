import css from "./Error.module.css";
const Error = () => {
  return (
    <div className={css.errorBox}>
      <p className={css.errorText}>Something wrong... Please, try again</p>
    </div>
  );
};

export default Error;
