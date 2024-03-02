import styled from "styled-components/native";

export const Container = styled.View`
border-bottom-width: 1px;
border-color: #121212;
margin: 10px;
padding: 10px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const ItemPrice = styled.Text`
font-size: 14px;
`

export const ItemTitle = styled.Text`
font-weight: bold;
font-size: 18px;
color: #121212;
`
export const AddIconView = styled.TouchableOpacity`
margin-right: 15px;
background-color: #2e8b57;
width: 30px;
border-radius: 15px;
`

export const AddIconText = styled.Text`
font-weight: bold;
font-size: 18px;
color: #fff;
text-align: center;
`