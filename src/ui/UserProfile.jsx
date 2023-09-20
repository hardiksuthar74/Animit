import styled from "styled-components";
import ProfileLogo from "../assets/profile.jpg";

const UserProfile = () => {
  return (
    <BackgroundWrap>
      <BackgroundImageContainer backgroundimage={ProfileLogo} />
    </BackgroundWrap>
  );
};

const BackgroundWrap = styled.div`
  overflow: hidden;
`;

const BackgroundImageContainer = styled.div`
  background-image: url(${(props) => props.backgroundimage});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 20rem;
  filter: blur(10px);
  opacity: 0.35;
`;

export default UserProfile;
