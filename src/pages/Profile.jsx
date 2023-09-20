import styled from "styled-components";
import UserProfile from "../ui/UserProfile";
import { Link, useParams } from "react-router-dom";
import { FaBell, FaHeart, FaUser } from "react-icons/fa6";
import UserViews from "../ui/UserViews";

const Profile = () => {
  const { type } = useParams();

  return (
    <>
      <StyledProfile>
        <UserProfile />
        <StyledLinkContainer>
          <Link to={"/user/profile"}>
            <StyledLink className={`${type === "profile" ? "active" : ""}`}>
              <FaUser />
              Profile
            </StyledLink>
          </Link>
          <Link to={"/user/watchlist"}>
            <StyledLink className={`${type === "watchlist" ? "active" : ""}`}>
              <FaHeart />
              Watchlist
            </StyledLink>
          </Link>
          <Link to={"/user/notification"}>
            <StyledLink
              className={`${type === "notification" ? "active" : ""}`}
            >
              <FaBell />
              Notification
            </StyledLink>
          </Link>
        </StyledLinkContainer>
      </StyledProfile>
      <Container>
        <UserViews />
      </Container>
    </>
  );
};

const StyledProfile = styled.div``;

const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10rem;
  margin-top: 1rem;

  .active {
    color: var(--color-font);
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-font);
  }
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

const Container = styled.div`
  padding: 4rem 30rem 10rem 30rem;
  font-size: 3rem;
`;

export default Profile;
