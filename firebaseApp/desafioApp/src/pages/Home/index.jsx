import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";

export default function Home({ route }) {
  const navigation = useNavigation();
  async function logout() {
    await firebase.auth().signOut();
    navigation.navigate("Login");
  }

  return (
    <View>
      <Text>Bem-vindo! {route.params?.user}</Text>
      <Button title={"Sair"} onPress={logout} />
    </View>
  );
}
