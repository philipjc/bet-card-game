import styled from 'styled-components';

const GameViewStyled = styled.div`
  height: 90vh;
`;

const NameEntryStyled = styled.div`

  height: 30vh;
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
    padding: .2em;
    font-size: ${props => props.theme.spacing.small};
    color: ${props => props.theme.palette.text};
    margin-bottom: 1.5em;
  }
`;

const NameStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
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
