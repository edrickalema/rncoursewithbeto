import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // This is the default behavior when the app is in the foreground
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

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
