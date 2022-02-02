import styled from 'styled-components';

const Card = styled.div`
  background-color: ${(props) => {
    if (props.color === 'blue') {
      return '#CAE9FF';
    } 
    if (props.color === 'lavender') {
      return '#CEC2FF';
    } 
    if (props.color === 'pantone') {
      return '#FFE4FA';
    } 
    if (props.color === 'bittersweet') {
      return '#FF715B';
    }    
      return '#fff';    
  }};
  padding: 20px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  min-height: 200px;
`;

export default Card;