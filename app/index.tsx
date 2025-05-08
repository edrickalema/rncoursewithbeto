import Button from "@/components/button";
import { Link } from "expo-router";
import { useState } from "react";

import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
export default function Index() {
  const [name, setName] = useState("");
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <TextInput
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
      </Link>
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