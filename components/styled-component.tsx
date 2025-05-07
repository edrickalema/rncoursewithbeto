import React from "react";
import { StyleSheet, View } from "react-native";
import RnText from "./text";

export default function StyledComponent() {
  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={StyleSheet.absoluteFill}
      />

      <View style={StyleSheet.flatten([styles.itemContainer, styles.overlays])}>
        <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: "#ffffff",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            shadowColor: "#000",
          }}
        >
          <Button
            size='lg'
            loading
            onPress={() => console.log("firstName", "Hello")}
            style={{
              backgroundColor: "black",
              borderRadius: 10,
              padding: 10,
            }}
          >
            Hey!
          </Button>
        </View>
      </View> */}

      <View style={styles.box}>
        <RnText
          style={{
            fontSize: 20,
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Hi
        </RnText>
      </View>
      <View style={styles.box}>
        <RnText
          style={{
            fontSize: 20,
            color: "blue",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Welcome
        </RnText>
      </View>
      <View style={styles.box}>
        <RnText
          style={{
            fontSize: 20,
            color: "green",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          To
        </RnText>
      </View>
      <View style={styles.box}>
        <RnText
          style={{
            fontSize: 20,
            color: "purple",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          React Native Course
        </RnText>
      </View>
    </View>
  );
}

// Flex: Controls how items fill available space along the main axis (flex-grow)
// Flex Shrink: Controls how items shrink when there isn't enough space
// Flex Basis: Sets the initial main size of a flex item
// Flex Direction: Determines the main axis direction for laying out children
// Layout Direction: Specifies direction for laying out children and text (default: LTR)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  overlays: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});
