import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <Text style={styles.titre}>Application Lycées</Text>

        <TouchableOpacity style={styles.nav} onPress={() => router.push("/ListliPrive")}>
          <Text style={styles.navText}>Lycées privés sous contrat - Paris</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nav} onPress={() => router.push("/Nbrlycee")}>
          <Text style={styles.navText}>Nombre de lycées par académie</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nav} onPress={() => router.push("/Academielypro")}>
          <Text style={styles.navText}>Académie avec le plus de lycées pro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nav} onPress={() => router.push("/AdresseAcademie")}>
          <Text style={styles.navText}>Mails des lycées de Créteil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nav} onPress={() => router.push("/AdresseLycee")}>
          <Text style={styles.navText}>Adresses lycées Créteil MAJ 2026</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    gap: 15,
  },
  titre: {
    fontSize: 24,
    fontWeight: "bold", 
    textAlign: "center",
    marginBottom: 20,
  },
  nav: {
     backgroundColor: "#00897B",
  paddingVertical: 12,
  paddingHorizontal: 20,  
  borderRadius: 12,
  alignSelf: "center",  
  },
  navText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});