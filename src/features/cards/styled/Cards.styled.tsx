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

const CardsStyles = {
  CardsStyled,
  CardStyled,
  CardActionsStyled,
  GuessStyled,
};

export default CardsStyles;
