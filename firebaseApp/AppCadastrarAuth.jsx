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
import firebase from "./src/firebaseConnection";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function cadastrar() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        Alert.alert("Usuario criado: " + value.user.email);
        setEmail("");
        setPassword("");
        Keyboard.dismiss();
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          Alert.alert("Sua senha deve ter pelo menos 6 caracteres");
          return;
        }
        if (error.code === "auth/invalid-email") {
          Alert.alert("Email invalido");
          return;
        } else {
          Alert.alert("Ops... algo deu errado!");
          return;
        }
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
      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
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
