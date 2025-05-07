import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function StyledComponent() {
  return (
    <View style={styles.container}>
      <Image
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
            backgroundColor: "#999cba",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        ></View>
      </View>
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
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
