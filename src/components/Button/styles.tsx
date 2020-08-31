import styled from 'styled-components';
import { shade } from 'polished'
export const OperationContainer = styled.button`
  background: #262626;
  flex:1;
  border:none;
  height: 80px;
  margin:1px;
  display: flex;
  justify-content: center;
  align-items:center;
  transition: background 0.6s;
  span{
    color: white;
    font-size:20px;
      
  }

  &:active{
    background: ${shade(0.2, '#262626')};
  }

`;

export const NumberContainer = styled.button`
  background: #373737;
  border:none;
  flex:1;
  height: 80px;
  margin:1px;
  display: flex;
  justify-content: center;
  align-items:center;
  transition: background 0.6s;
  span{
    color: white;
    font-size:20px;
    font-weight: bold;

      
  }

  &:active{
    background: ${shade(0.2, '#373737')};
  }

  
`;

export const EqualityContainer = styled.button`
  background: #DF7F01;
  flex:1;
  border:none;
  height: 80px;
  margin:1px;
  display: flex;
  justify-content: center;
  align-items:center;
  transition: background 0.6s;
  span{
    color: white;
    font-size:20px;
      
  }

  &:active{
  background: ${shade(0.2, '#DF7F01')};
  }

`;
