import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.text};
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  font-size: .5em;
`;

const ButtonsStyles = {
  PrimaryButton,
};

export default ButtonsStyles;
