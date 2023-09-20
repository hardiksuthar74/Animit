import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #121212;
    background-color: #cf9fff;

    &:hover {
      background-color: #cf9ff2;
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: #121212;
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  cursor: pointer;
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
