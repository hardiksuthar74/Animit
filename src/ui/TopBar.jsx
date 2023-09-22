import styled from "styled-components";
import { FaBars } from "react-icons/fa6";
import AnimeLogo from "../assets/logo.png";
import ProfileLogo from "../assets/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import SideBarModal from "./SideBarModal";
import Modal from "./Modal";
import Authentication from "./Authentication";
import { useUser } from "../features/users/useUser";
import Menus from "./Menus";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useSearchAnime } from "../features/anime/useSearchAnime";
import Spinner from "./Spinner";

const TopBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const { isSearching, searchAnime, anime } = useSearchAnime();

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchAnime(debouncedSearchTerm);
      setData(true);
    }
  }, [debouncedSearchTerm]);

  const changeHandler = (e) => {
    if (e.target.value.length === 0) {
      setData(false);
      setSearchTerm("");
    }
    setSearchTerm(e.target.value);
  };

  const NavigateToHome = () => {
    navigate("/");
  };

  const NavigateToAnime = (id) => {
    navigate(`/anime/${id}`);
    setData(false);
    setSearchTerm("");
  };
  const logout = () => {
    sessionStorage.clear();
    location.replace("/");
  };

  const useOutsideClick = (listeningCapturing = true) => {
    const ref = useRef();

    useEffect(() => {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setData(false);
          setSearchTerm("");
        }
      };
      document.addEventListener("click", handleClick, listeningCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listeningCapturing);
    }, [listeningCapturing]);

    return ref;
  };

  const ref = useOutsideClick();

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
                <SearchBarInput
                  onChange={changeHandler}
                  placeholder="Search Anime"
                  value={searchTerm}
                />
                <SearchedAnimeList ref={ref}>
                  {isSearching && <Spinner />}
                  {data &&
                    anime?.map((a, index) => {
                      return (
                        <SearchedAnime
                          onClick={() => NavigateToAnime(a.mal_id)}
                          key={index}
                        >
                          <div>
                            <img src={a?.image} />
                          </div>
                          <div>{a.title}</div>
                        </SearchedAnime>
                      );
                    })}
                </SearchedAnimeList>
              </StyledSearchBar>
            </LeftSideNavBar>
            <RightSideNavBar>
              <StyledUserAvatar>
                {user && (
                  <Menus>
                    <Menus.Toggle id={1}>
                      <Avatar src={ProfileLogo} />
                    </Menus.Toggle>
                    <Menus.List id={1}>
                      <Menus.Button>
                        <Link to={"/user/profile"}>Profile</Link>
                      </Menus.Button>
                      <Menus.Button>
                        <Link to={"/user/watchlist"}>Watchlist</Link>
                      </Menus.Button>
                      <Menus.Button>
                        <Link to={"/user/notification"}>Notification</Link>
                      </Menus.Button>
                      <Menus.Button>
                        <div onClick={logout}>Logout</div>
                      </Menus.Button>
                    </Menus.List>
                  </Menus>
                )}
                {!user && (
                  <Modal>
                    <Modal.Open opens="login">
                      <StyledLogInButton>Login</StyledLogInButton>
                    </Modal.Open>
                    <Modal.Window name="login">
                      <Authentication />
                    </Modal.Window>
                  </Modal>
                )}
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

const StyledSearchBar = styled.div`
  position: relative;
`;

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

const SearchedAnime = styled.div`
  cursor: pointer;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  color: #fff;
  column-gap: 2rem;
  border-bottom: 1px dashed #151515;
  align-items: center;
  > div > img {
    width: 40px;
  }
`;

const SearchedAnimeList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #414248;
  width: 100%;
`;

export default TopBar;
