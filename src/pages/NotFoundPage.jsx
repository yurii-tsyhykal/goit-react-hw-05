import { useLocation } from "react-router-dom";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import { useRef } from "react";

const NotFoundPage = () => {
  const location = useLocation();
  const back = useRef(location.state?.from ?? "/");
  return (
    <div>
      <GoBackBtn to={back.current}>Go Home</GoBackBtn>
      <p>Page Not Found</p>
    </div>
  );
};

export default NotFoundPage;
