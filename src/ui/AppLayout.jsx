import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopBar from "./TopBar";
import Footer from "./Footer";
// import SideBar from "./SideBar";

const StyledAppLayout = styled.div``;

const Main = styled.main``;

const Container = styled.div``;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <TopBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </StyledAppLayout>
  );
};

export default AppLayout;
