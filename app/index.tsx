import Button from "@/components/button";
import { useState } from "react";
import { ScrollView, Text } from "react-native";

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
      {/* <TextInput
        placeholder='Enter your name'
        value={name}
        onChangeText={(text) => setName(text)}
        style={{
          height: 40,
          borderColor: "purple",
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft: 10,
          marginBottom: 20,
          width: "80%",
        }}
      ></TextInput> */}
      <Button size='lg' onPress={() => console.log("firstName", name)}>
        {name ? `Hello ${name}` : "Click me"}
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
      <Button loading size='sm' onPress={() => console.log("firstName", name)}>
        {name ? `Hello ${name}` : "Click me"}
      </Button>
      <Button
        variant='outline'
        size='md'
        onPress={() => console.log("firstName", name)}
      >
        {name ? `Hello ${name}` : "Click me"}
      </Button>
      {/* <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{
          width: 200,
          height: 200,
          marginTop: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "purple",
          shadowColor: "purple",
        }}
      /> */}
    </ScrollView>
  );
}
