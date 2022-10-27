import styled from 'styled-components';

const AppStyled = styled.div`
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 32px;
  color: ${props => props.theme.palette.text};
  
  max-width: 1000px;
  margin: 0 auto;
`;

const AppHeader = styled.h1`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.palette.highlight};
  font-size: 1.5em;
  border-bottom: .4em solid ${props => props.theme.palette.lowlight};;
`

const AppStyles = {
  AppStyled,
  AppHeader,
};

export default AppStyles;
