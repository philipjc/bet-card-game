import styled from "styled-components";

const GameOverStyled = styled.div`
  
  display: flex;
  flex-direction: column;
  max-width: 60%;
  padding: 1.5em;
  margin: 2em auto;
  text-align: center;
  background-color: ${props => props.theme.palette.highlight};
  color: ${props => props.theme.palette.lowlight};
  border: 4px solid ${props => props.theme.palette.border};

  h2 {
    font-size: 2em;
  }
  
  h2, p {
    margin-bottom: 1em;
  }
  
  button {
    margin-top: .5em;
  }
  
`;

const gameOverStyles = {
  GameOverStyled,
};

export default gameOverStyles;
