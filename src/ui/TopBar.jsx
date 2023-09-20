import styled from "styled-components";
import { FaBars } from "react-icons/fa6";
import AnimeLogo from "../assets/logo.png";
import ProfileLogo from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import SideBarModal from "./SideBarModal";
import Modal from "./Modal";
import Authentication from "./Authentication";

const TopBar = () => {
  const navigate = useNavigate();

  const NavigateToHome = () => {
    navigate("/");
  };

  const navigateToUser = () => {
    navigate("/user/watchlist");
  };

  return (
    <>
      <StyledTopBar>
        <Container>
          <TopBarNavsContainer>
            <LeftSideNavBar>
              <SideBarModal>
                <SideBarModal.Open opens="anime-form">
                  <HamBurgerMenu>
                    <FaBars />
                  </HamBurgerMenu>
                </SideBarModal.Open>
                <SideBarModal.Window name="anime-form">
                  <SideBar />
                </SideBarModal.Window>
              </SideBarModal>
              <AnimitLogo onClick={NavigateToHome}>
                <Image src={AnimeLogo} />
              </AnimitLogo>
              <StyledSearchBar>
                <SearchBarInput placeholder="Search Anime" />
              </StyledSearchBar>
            </LeftSideNavBar>
            <RightSideNavBar>
              <StyledUserAvatar>
                <Avatar onClick={navigateToUser} src={ProfileLogo} /> ||
                <Modal>
                  <Modal.Open opens="login">
                    <StyledLogInButton>Login</StyledLogInButton>
                  </Modal.Open>
                  <Modal.Window name="login">
                    <Authentication />
                  </Modal.Window>
                </Modal>
              </StyledUserAvatar>
            </RightSideNavBar>
          </TopBarNavsContainer>
        </Container>
      </StyledTopBar>
    </>
  );
};

const StyledTopBar = styled.header`
  position: fixed;
  height: 8rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 102;
  padding: 0;
  background-color: rgba(36, 36, 40, 0.8) !important;
  backdrop-filter: blur(10px) !important;
`;

const Container = styled.div`
  max-width: 150rem;
  margin: 0 auto;
  padding: 2rem;
`;

const TopBarNavsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightSideNavBar = styled.div``;

const LeftSideNavBar = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6rem;
  align-items: center;
`;

const HamBurgerMenu = styled.div`
  font-size: 3rem;
  cursor: pointer;
`;

const AnimitLogo = styled.div`
  width: 16rem;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;

const StyledSearchBar = styled.div``;

const SearchBarInput = styled.input`
  height: 3rem;
  color: #111;
  padding-right: 100px;
  padding-left: 15px;
  font-size: 14px;
  font-weight: 400;
  background: #fff;
  border-radius: 0.5rem;
  border: gray;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05) !important;
  outline: none;
`;

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
  cursor: pointer;
`;

const StyledLogInButton = styled.button`
  background-color: #cf9fff;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  padding: 0 15px;
  margin-left: 15px;
  border: 1px;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in;
`;

export default TopBar;
