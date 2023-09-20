import styled from "styled-components";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterImageContainer className="footerLogo">
        <img src={Logo} alt="" />
      </FooterImageContainer>
      <FooterPara>© Animit. All rights reserved.</FooterPara>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  padding: 2rem;
  font-size: 1.4rem;
`;

const FooterImageContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  > img {
    width: 12rem;
    margin-bottom: 2rem;
  }
`;

const FooterPara = styled.p`
  margin-top: 1rem;
`;

export default Footer;
