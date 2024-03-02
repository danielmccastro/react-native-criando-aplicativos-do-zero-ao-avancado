import styled from 'styled-components/native';

export const Container = styled.View`
height: 55px;
flex-direction: row;
align-items: center;
justify-content: space-between;
`


export const Title = styled.Text`
  margin-left: 20px;
  font-size: 22px;
  font-weight: bold;
  color: #121212;
`;

export const CartBtn = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const ItemMark = styled.View`
  align-items: center;
  justify-content: center;
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  position: 'absolute';
  z-index: 99;
  bottom: -35px;
  left: -4px;
`;

export const CartText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
