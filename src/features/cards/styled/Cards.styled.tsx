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
  margin-bottom: ${props => props.theme.spacing.large};
`;

const CardStyled = styled.div`
  div {
  }
  
  //img {
  //  width: 70%;
  //}
`;

const CardsStyles = {
  CardsStyled,
  CardStyled,
  CardActionsStyled,
};

export default CardsStyles;
