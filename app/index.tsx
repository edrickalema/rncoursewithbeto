import StyledComponent from "@/components/styled-component";
import { useState } from "react";

import { StyleSheet, View } from "react-native";
export default function Index() {
  const [name, setName] = useState("");
  return (
    // <ScrollView
    //   contentContainerStyle={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     gap: 10,
    //   }}
    // >
    //   {/* <TextInput
    //     placeholder='Enter your name'
    //     value={name}
    //     onChangeText={(text) => setName(text)}
    //     style={{
    //       height: 40,
    //       borderColor: "purple",
    //       borderWidth: 2,
    //       borderRadius: 10,
    //       paddingLeft: 10,
    //       marginBottom: 20,
    //       width: "80%",
    //     }}
    //   ></TextInput> */}
    //   <Button size='lg' onPress={() => console.log("firstName", name)}>
    //     {name ? `Hello ${name}` : "Click me"}
    //   </Button>
    //   <Button size='md' onPress={() => console.log("firstName", name)}>
    //     <Text
    //       style={{
    //         color: "white",
    //         fontSize: 16,
    //         fontWeight: "bold",
    //       }}
    //     >
    //       Hello
    //     </Text>
    //   </Button>
    //   <Button loading size='sm' onPress={() => console.log("firstName", name)}>
    //     {name ? `Hello ${name}` : "Click me"}
    //   </Button>
    //   <Button
    //     variant='outline'
    //     size='md'
    //     onPress={() => console.log("firstName", name)}
    //   >
    //     {name ? `Hello ${name}` : "Click me"}
    //   </Button>
    // </ScrollView>

    <View style={styles.container}>
      <StyledComponent />
    </View>
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
