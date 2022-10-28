import styled from 'styled-components';

const AppStyled = styled.div`
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 32px;
  color: ${props => props.theme.palette.text};
  
  margin: 0 auto;
`;

const AppStyles = {
  AppStyled,
};

export default AppStyles;
