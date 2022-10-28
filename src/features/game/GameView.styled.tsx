import styled from 'styled-components';

const GameViewStyled = styled.div`
  height: 80vh;
  
  .UI {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

const NameEntryStyled = styled.div`

  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.palette.lowlight};
  color: ${props => props.theme.palette.highlight};
  font-size: 1.5em;
  
  h2 {
    margin-bottom: ${props => props.theme.spacing.small};
  }
  
  input {
    padding: ${props => props.theme.spacing.xSmall};
    font-size: ${props => props.theme.spacing.small};
    color: ${props => props.theme.palette.text};
    margin-bottom: 1.5em;
  }
`;

const NameStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: ${props => props.theme.spacing.xSmall};
  
  h3 {
    margin-top: ${props => props.theme.spacing.sMedium};
    text-align: center;
  }
  
  div {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: ${props => props.theme.spacing.sMedium} auto;
  }
`;

const InitiateStyled = styled.div`
  display: flex;
  height: 20vh;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;


const GameViewStyles = {
  GameViewStyled,
  NameEntryStyled,
  NameStyled,
  InitiateStyled,
};

export default GameViewStyles;
