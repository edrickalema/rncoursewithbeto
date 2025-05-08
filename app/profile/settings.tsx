import Button from "@/components/button";
import RnText from "@/components/text";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <RnText
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
        }}
      >
        settings
      </RnText>

      <Link href={"/"} asChild>
        <Button>
          <RnText
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Go to Home
          </RnText>
        </Button>
      </Link>
    </View>
  );
}
