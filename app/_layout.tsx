import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='index' options={{ title: "Home" }} />
      <Stack.Screen
        name='settings'
        options={{
          title: "Settings",
          headerShown: true,
          headerTitle: "Settings",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          presentation: "modal",
        }}
      />
      <Stack.Screen name='profile' options={{ title: "Settings" }} />
    </Stack>
  );
}
