import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

const SideBar = () => {
  return (
    <SideBarLinkContainer>
      <LinkContainer>
        <StyledNavLink to="home">Home</StyledNavLink>
      </LinkContainer>
      <LinkContainer>
        <StyledNavLink to="user/watchlist">Popular</StyledNavLink>
      </LinkContainer>
      <LinkContainer>
        <StyledNavLink to="movies">Movies</StyledNavLink>
      </LinkContainer>
      <LinkContainer>
        <StyledNavLink to="specials">Specials</StyledNavLink>
      </LinkContainer>
    </SideBarLinkContainer>
  );
};

export default SideBar;
