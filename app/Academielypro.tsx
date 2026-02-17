import axios from 'axios';
import { useRouter } from "expo-router";
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import lycees from "../lycees-donnees-generales-v1.json";

export default function Academielypro() {
const router = useRouter();
const compte: { [key: string]: number } = {};

  lycees
    .filter((item) => item.nature_uai.includes("professionnel"))
    .forEach((item) => {
      compte[item.academie] = (compte[item.academie] || 0) + 1;
    });

  let maxAcademie = "";
  let max = 0;

  Object.entries(compte).forEach(([academie, total]) => {
    if (total > max) {
      max = total;
      maxAcademie = academie;
    }
  });

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {maxAcademie}
      </Text>
      <Text>{max} lycées professionnels</Text>
    </SafeAreaView>
  );
}