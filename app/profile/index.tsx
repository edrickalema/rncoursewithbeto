import RnText from "@/components/text";
import React from "react";
import { View } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <RnText>profile</RnText>
    </View>
  );
}
