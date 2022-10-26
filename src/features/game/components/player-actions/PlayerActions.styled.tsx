import styled from 'styled-components';

const PlayerActionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${props => props.theme.spacing.medium};
  
  h4 {
    margin-bottom: ${props => props.theme.spacing.medium};
  }
  
  button {
    margin: 0 ${props => props.theme.spacing.xSmall};
    min-width: 142px;
    text-align: center;
  }
`;

const PlayerActionsStyles = {
PlayerActionsStyled,
};

export default PlayerActionsStyles;
