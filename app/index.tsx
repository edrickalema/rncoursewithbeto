import RnText from "@/components/text";
import { Platform, ScrollView, StyleSheet } from "react-native";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

export default function Index() {
  async function requestForPushNotificationPermssion() {
    let token;

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (finalStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
    } else {
      console.log(Device.isDevice);
    }

    if (Platform.OS) {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.HIGH,
        sound: "default",
        showBadge: true,
        lockscreenVisibility:
          Notifications.AndroidNotificationVisibility.PUBLIC,
      });
    }
  }
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: "lightyellow",
      }}
    >
      <RnText
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          padding: 10,
          backgroundColor: "black",
          borderRadius: 5,
          color: "white",
        }}
      >
        Hello, Welcome
      </RnText>
      {/* <TextInput
        style={{
          width: "80%",
          height: 50,
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          borderRadius: 5,
        }}
        placeholder='Enter your name'
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      ></TextInput>
      <Button size='lg' onPress={() => console.log("firstName", name)}>
        Hey. !
      </Button>
      <Button size='md' onPress={() => console.log("firstName", name)}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Hello
        </Text>
      </Button>
      <Link
        href={{
          pathname: "../profile/[name]",
          params: { name },
        }}
        asChild
      >
        <Button size='sm'>Go to Profile</Button>
      </Link>
      <Link href='/settings' asChild>
        <Button
          variant='outline'
          size='md'
          onPress={() => console.log("firstName", name)}
        >
          Go to Settings
        </Button>
      </Link> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  overlays: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

// Stack ->	A stack navigator is a type of navigation container that manages a stack of screens. Each screen is pushed onto the stack, and when a screen is popped, it is removed from the stack.
// Tabs ->	A tab navigator is a type of navigation container that manages a set of tabs. Each tab is a screen, and when a tab is selected, it is displayed.
