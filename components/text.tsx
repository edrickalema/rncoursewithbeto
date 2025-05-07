import React from "react";
import { Text, TextStyle, View } from "react-native";

export default function RnText({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: TextStyle;
}) {
  return (
    <View>
      <Text
        style={[
          {
            fontFamily: "Inter",
            fontSize: 16,
            lineHeight: 24,
            color: "#000",
          },
          style,
        ]}
      >
        {children}
      </Text>
    </View>
  );
}
