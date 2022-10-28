import styled from "styled-components";

const GameOverStyled = styled.div`
  
  display: flex;
  flex-direction: column;
  max-width: 60%;
  padding: ${props => props.theme.spacing.sMedium};
  margin: ${props => props.theme.spacing.small} auto;
  color: ${props => props.theme.palette.lowlight};
  background-color: ${props => props.theme.palette.highlight};
  border: 4px solid ${props => props.theme.palette.border};

  .game-info {
    max-width: 100%;
    margin: 0 auto;
  }
  
  h2 {
    margin: 0;
    text-align: center;
    font-size: ${props => props.theme.spacing.large}
  }
  
  h2, p {
    margin-bottom: .5em;
  }
  
  h3 {
    border-bottom: 1px solid ${props => props.theme.palette.lowlight};;
    margin-bottom: .5em;
    margin-top: 1em;
  }
  
  button {
    margin-top: .5em;
  }
  
`;

const gameOverStyles = {
  GameOverStyled,
};

export default gameOverStyles;
