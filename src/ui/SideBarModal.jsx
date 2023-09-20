import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(36, 36, 40, 0.8);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  overflow: hidden;
`;

const StyledModal = styled.div`
  position: fixed;
  transform: translate(0%, 0%);
  width: 260px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
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

const SideBarContext = createContext();

const SideBarModal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");

  const open = setOpenName;

  return (
    <SideBarContext.Provider value={{ openName, close, open }}>
      {children}
    </SideBarContext.Provider>
  );
};

const Open = ({ children, opens: opensWindowName }) => {
  const { open } = useContext(SideBarContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
};

const Window = ({ children, name }) => {
  const { openName, close } = useContext(SideBarContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <CloseButton onClick={close}>{`< Close menu`}</CloseButton>
        <div onClick={close}>{cloneElement(children, { onClose: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
};

SideBarModal.Open = Open;
SideBarModal.Window = Window;

export default SideBarModal;
