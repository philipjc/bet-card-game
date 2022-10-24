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
  align-items: center;
`

const AppStyles = {
  AppStyled,
  AppHeader,
};

export default AppStyles;
