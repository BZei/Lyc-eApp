import axios from 'axios';
import { useRouter } from "expo-router";
import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import lycees from "../lycees-donnees-generales-v1.json";

export default function ListliPrive() {
const router = useRouter();

const resultats = lycees.filter(
    (item) =>
      item.academie === "Créteil" &&
      item.date_maj.startsWith("2026")
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  button: {
     backgroundColor: "#00897B",
  paddingVertical: 12,
  paddingHorizontal: 20,  
  borderRadius: 12,
  alignSelf: "center",  
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                                    <Text style={styles.buttonText}>Retour</Text>
                      </TouchableOpacity>
      <FlatList
        data={resultats}
        keyExtractor={(item) => item.code_uai}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontWeight: "bold" }}>
              {item.nom_etablissement}
            </Text>
            <Text>{item.adresse_postale}</Text>
            <Text>MAJ : {item.date_maj}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}