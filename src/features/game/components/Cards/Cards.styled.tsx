import styled from 'styled-components';

const CardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${props => props.theme.spacing.large};
`;

const CardActionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.medium};
  
  button {
    margin-bottom: 1em;
  }
`;

const CardStyled = styled.div`
  div {
  }
  
  //img {
  //  width: 70%;
  //}
`;

const GuessStyled = styled.p`
  font-size: 1em;
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.palette.lowlight};
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 226px;
  height: 314px;
  background-color: ${props => props.theme.palette.lowlight};
`;

const CardsStyles = {
  CardsStyled,
  CardStyled,
  CardActionsStyled,
  GuessStyled,
  LoaderContainer,
};

export default CardsStyles;
