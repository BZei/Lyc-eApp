import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="ListliPrive" options={{ headerShown: false }} />
      <Stack.Screen name="Academielypro" options={{ headerShown: false }} />
      <Stack.Screen name="AdresseAcademie" options={{ headerShown: false }} />
      <Stack.Screen name="AdresseLycee" options={{ headerShown: false }} />
    </Stack>
  );
}
