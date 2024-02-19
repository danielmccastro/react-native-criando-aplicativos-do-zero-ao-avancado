import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import firebase from "./src/firebaseConnection";

export default function App() {
  const [nome, setNome] = useState("Carregando...");
  const [idade, setIdade] = useState("");

  useEffect(() => {
    async function dados() {
      // olheiro (listener)
      /*  await firebase
        .database()
        .ref("nome")
        .on("value", (snapshot) => {
          setNome(snapshot.val());
        }); */
      // so carrega uma vez
      /*  await firebase
        .database()
        .ref("nome")
        .once("value", (snapshot) => {
          setNome(snapshot.val());
        }); */
      await firebase
        .database()
        .ref("usuarios/1")
        .on("value", (snapshot) => {
          setNome(snapshot.val().nome);
          setIdade(snapshot.val().idade);
        });
    }

    dados();
  }, []);

  useEffect(() => {
    // criar um no
    async function criarNo() {
      await firebase.database().ref("tipo").set("Vendedor");
    }

    //remover um no
    async function removeNo() {
      await firebase.database().ref("tipo").remove();
    }
//criar um child
    async function criarChild() {
      await firebase.database().ref("usuarios").child(3).set({
        nome: "Jose",
        cargo: "Programador",
      });
    }

    //atualizar um child
    async function atualizaChild(){
      await firebase.database().ref("usuarios").child(3).update({
        nome: "Jose Augusto"
      })
    }

    atualizaChild();
  }, []);

  return (
    <View style={{ marginTop: 25 }}>
      <Text style={{ fontSize: 25 }}>Ola, {nome}</Text>
      <Text style={{ fontSize: 25 }}>Idade: {idade}</Text>
    </View>
  );
}
