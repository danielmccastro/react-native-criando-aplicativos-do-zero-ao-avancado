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
  const [user, setUser] = useState("");

  async function logar() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        Alert.alert("Bem-vindo: " + value.user.email);
        setUser(value.user.email);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert("Ops... algo deu errado!");
        return;
      });
  }

  async function logout() {
    await firebase.auth().signOut();
    setUser("");
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
      <Text
        style={{
          marginTop: 20,
          marginBottom: 20,
          fontSize: 23,
          textAlign: "center",
        }}
      >
        {user}
      </Text>
      {user.length > 0 ? (
        <Button title={"Sair"} onPress={logout} />
      ) : (
        <Text>Nenhum usuario esta logado</Text>
      )}
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
