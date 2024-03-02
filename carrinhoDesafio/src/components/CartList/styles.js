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

export const QtView = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const QtText = styled.Text`
font-size: 18px;
font-weight: bold;
`

export const IconView = styled.TouchableOpacity`
background-color: transparent;
height: 30px;
width: 30px;
border-radius: 15px;
`

export const IconText = styled.Text`
font-weight: bold;
font-size: 22px;
color: #fff;
text-align: center;
color: #121212;
`