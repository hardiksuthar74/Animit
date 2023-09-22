import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  opacity: 0.4;
  font-size: 1rem;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-font);
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

FormRowVertical.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default FormRowVertical;
