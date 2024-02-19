import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Keyboard,
  FlatList,
  ActivityIndicator,
} from "react-native";
import firebase from "../../firebaseConnection";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const navigation = useNavigation();

  async function logar() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        Alert.alert("Bem-vindo: " + value.user.email);
        setUser(value.user.email);
        setEmail("");
        setPassword("");
        navigation.navigate("Home", { user: value.user.email });
      })
      .catch((error) => {
        Alert.alert("Ops... algo deu errado!");
        return;
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>E-mail</Text>
      <TextInput
        value={email}
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
      />
      <Text style={styles.texto}>Senha</Text>
      <TextInput
        value={password}
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPassword(texto)}
      />
      <Button title="Acessar" onPress={logar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#121212",
    height: 45,
    fontSize: 17,
  },
});
