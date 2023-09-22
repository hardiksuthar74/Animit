import { useState } from "react";
import LoginForm from "./LoginForm";
import loginPicture from "../assets/luffy_login.png";
import styled from "styled-components";
import RegisterForm from "./RegisterForm";

const Authentication = ({ onCloseModal }) => {
  const [formType, setFormType] = useState("login");
  return (
    <StyledAuth>
      <Image>
        <img src={loginPicture} alt="luffy" />
      </Image>
      {formType === "register" && (
        <RegisterForm setFormType={setFormType} closeModal={onCloseModal} />
      )}
      {formType === "login" && (
        <LoginForm setFormType={setFormType} closeModal={onCloseModal} />
      )}
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
