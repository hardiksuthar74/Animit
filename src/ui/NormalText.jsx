import styled from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const NormalText = styled.p`
  font-size: ${(props) => props.size}rem;
  text-align: ${(props) => props.align};
  color: ${(props) => props.color};
  /* font-weight: 600; */
  line-height: 1.4;
  cursor: pointer;
`;

export default NormalText;
