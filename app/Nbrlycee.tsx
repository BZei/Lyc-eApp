import axios from 'axios';
import { useRouter } from "expo-router";
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import lycees from "../lycees-donnees-generales-v1.json";


export default function Nbrlycee() {
const router = useRouter();
const compte: { [key: string]: number } = {};

  lycees.forEach((item) => {
    compte[item.academie] = (compte[item.academie] || 0) + 1;
  });

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
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                              <Text style={styles.buttonText}>Retour</Text>
                </TouchableOpacity>
                
      {Object.entries(compte).map(([academie, total]) => (
        <View key={academie} style={{ marginBottom: 10 }}>

    

          <Text>
            {academie} : {total}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
}