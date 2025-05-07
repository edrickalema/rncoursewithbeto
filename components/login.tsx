import React from "react";
import { Text, useColorScheme, View } from "react-native";
import Button from "./button";
import RnText from "./text";

export default function Login() {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";
  const [isLightMode, setIsLightMode] = React.useState(isDarkMode);

  function toggleTheme() {
    setIsLightMode((prev) => !prev);
  }

  console.log(isLightMode);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isLightMode ? "#000" : "#fff",
        gap: 10,
      }}
    >
      <RnText
        style={{
          color: isLightMode ? "#fff" : "#000",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          padding: 10,
          borderRadius: 10,
          backgroundColor: isLightMode ? "#000" : "#fff",
        }}
      >
        Welcome, {!isLightMode ? "Dark" : "Light"} Mode
      </RnText>

      <Button onPress={toggleTheme} size='lg'>
        <Text style={{ color: isLightMode ? "gray" : "#fff" }}>
          {isLightMode ? "Light Mode" : "Dark Mode"}
        </Text>
      </Button>
    </View>
  );
}
