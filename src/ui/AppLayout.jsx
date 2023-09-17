import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopBar from "./TopBar";
// import SideBar from "./SideBar";

const StyledAppLayout = styled.div``;

const Main = styled.main``;

const Container = styled.div``;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <TopBar />
      {/* <SideBar /> */}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
