import { Tabs } from "expo-router";

export default function ProfileLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        animation: "fade",
      }}
    >
      <Tabs.Screen name='/' options={{ title: "Home" }} />

      <Tabs.Screen
        name='/settings'
        options={{
          title: "Settings",
          headerShown: true,
          headerTitle: "Settings",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
      <Tabs.Screen
        name='/[name]'
        options={{
          title: "Random User",
          headerShown: true,
          headerTitle: "Random User",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
    </Tabs>
  );
}

//

// Slot	-> Renders the current selected content.
// Route Groups -> 	A group is created to organize similar routes or a section of the app. Each group has a layout file, and the grouped directory requires a name inside parentheses (group).
