import RnText from "@/components/text";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

useLocalSearchParams;
export default function User() {
  const { name } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#fff",
      }}
    >
      <RnText style={{ fontSize: 20, fontWeight: "bold" }}>
        {name ? `Hello ${name}` : "Click me"}
      </RnText>
    </View>
  );
}
