import styled from 'styled-components';

export const Container = styled.div`
  width:350px;
  margin:auto;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.75);
box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.75);
`;

export const CalculatorBody = styled.div`
background: black;
height: calc(100vh -40px);
`;

export const ValuesArea = styled.div`
color: white;
height:100px;
display: flex;
justify-content:flex-end;
align-items: flex-end;
padding: 10px;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none;

`;

export const BtnArea = styled.div`
display: flex;
`;

export const Header = styled.div`
background:#156A6A;
height: 70px;
display: flex;
justify-content: center;
align-items: center;

`;

export const LowNumber = styled.div`
font-size: 20px;
font-weight: bold;
display: flex;
justify-content: flex-end;
`;

export const Error = styled.div`
font-size: 16px;
font-weight: bold;
display: flex;
justify-content: flex-end;
`;