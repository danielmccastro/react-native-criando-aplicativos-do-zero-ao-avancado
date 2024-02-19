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
  const [name, setName] = useState("");

  async function cadastrar() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        // Alert.alert(value.user.uid);
        firebase.database().ref("usuarios").child(value.user.uid).set({
          nome: name,
        });
        Alert.alert("Usuario criado com sucesso!");
        setName("");
        setEmail("");
        setPassword("");
        Keyboard.dismiss();
      })
      .catch((error) => {
        Alert.alert("Algo deu errado!");
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
        value={name}
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setName(texto)}
      />
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
