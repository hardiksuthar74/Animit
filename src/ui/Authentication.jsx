import { useState } from "react";
import LoginForm from "./LoginForm";
import loginPicture from "../assets/luffy_login.png";
import styled from "styled-components";

const Authentication = ({ onCloseModal }) => {
  const [formType] = useState("login");
  return (
    <StyledAuth>
      <Image>
        <img src={loginPicture} alt="luffy" />
      </Image>
      {formType === "register" && <LoginForm />}
      {formType === "forgotpassword" && <LoginForm />}
      {formType === "login" && <LoginForm closeModal={onCloseModal} />}
    </StyledAuth>
  );
};

const StyledAuth = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 100%;
  }
`;

export default Authentication;
