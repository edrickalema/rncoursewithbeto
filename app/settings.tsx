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

// withTiming	Creates a timing-based animation with configurable duration and easing
// withSpring	Creates a spring-based animation with natural motion and bounce
// withDecay	Creates a decay animation that gradually slows down
// withSequence	Runs multiple animations in sequence
// withRepeat	Repeats an animation a specified number of times
// withDelay	Adds a delay before starting an animation
// withClamp	Clamps animation values between specified bounds
// Gesture Types
// Gesture	Description
// Gesture detector	Base component for handling gestures
// Gesture	Base class for creating custom gestures
// Pan gesture	Handles dragging and swiping interactions
// Tap gesture	Detects single and multiple taps
// Long press gesture	Detects when user holds down for a duration
// Rotation gesture	Handles rotation with two fingers
// Pinch gesture	Handles pinch-to-zoom interactions
// Fling gesture	Detects quick swipe motions


// testing-library/react-native
// appId	The ID of the app to test. This is the same as the appId in the app.json file.
// launchApp	Launch the app.
// tapOn	Tap on an element.
// doubleTap	Double tap on an element.
// swipe	Swipe on an element.
// inputText	Input text into an element.
// back	Navigate back.
