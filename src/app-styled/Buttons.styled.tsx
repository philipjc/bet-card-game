import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.text};
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  font-size: .5em;
  font-family: monospace;
  letter-spacing: .2em;
`;

const SecondaryButton = styled.button`
  background-color: ${props => props.theme.palette.highlight};
  color: ${props => props.theme.palette.text};
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  font-size: .5em;
`;

const ButtonsStyles = {
  PrimaryButton,
  SecondaryButton,
};

export default ButtonsStyles;
