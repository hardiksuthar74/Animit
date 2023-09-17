import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  return createPortal(
    <SideBarBackground>
      <ActiveSideBarMenu>
        <CloseButton>{`< Close menu`}</CloseButton>
        <SideBarLinkContainer>
          <LinkContainer>
            <StyledNavLink to="home">Home</StyledNavLink>
          </LinkContainer>
          <LinkContainer>
            <StyledNavLink to="popular">Popular</StyledNavLink>
          </LinkContainer>
          <LinkContainer>
            <StyledNavLink to="movies">Movies</StyledNavLink>
          </LinkContainer>
          <LinkContainer>
            <StyledNavLink to="specials">Specials</StyledNavLink>
          </LinkContainer>
        </SideBarLinkContainer>
      </ActiveSideBarMenu>
    </SideBarBackground>,
    document.body
  );
};

const SideBarBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(36, 36, 40, 0.8);
  z-index: 103;
  backdrop-filter: blur(10px);
`;

const ActiveSideBarMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  width: 260px;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  opacity: 1;
  z-index: 1000200;
  transform: translateX(0);
  transition: all 0.3s ease-in-out;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  background-color: #cf9fff;
  color: #151515;
  border: 1px;
  font-size: 1.4rem;
  padding: 1rem 2rem;

  border-radius: 2rem;
  margin-left: 2rem;
`;

const SideBarLinkContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  row-gap: 2rem;
`;

const LinkContainer = styled.div`
  display: block;
  padding-bottom: 1.4rem;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.084);
`;

const StyledNavLink = styled(NavLink)`
  margin-left: 2rem;
  color: #fff;
  transition: all 0.3s;

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #cf9fff;
  }
`;

export default SideBar;
