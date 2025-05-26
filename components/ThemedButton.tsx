import colors from "@/constants/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  variant?: "outline";
  color?: string;
  onPress?: () => void;
}

const ThemedButton = ({ text, variant, onPress, color }: Props) => {
  const isOutline = variant === "outline";
  const backgroundColor = isOutline ? "transparent" : color || colors.primary;
  const borderColor = color || colors.primary;
  const textColor = isOutline ? borderColor : colors.white;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonBase,
        { backgroundColor },
        isOutline && { borderColor },
        isOutline && styles.outline,
      ]}
    >
      <Text
        style={[
          styles.textBase,
          { color: textColor },
          isOutline && styles.textOutline,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  buttonBase: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  outline: {
    borderWidth: 2,
  },

  textBase: {
    fontSize: 15,
    letterSpacing: 2,
    textTransform: "uppercase",
    fontWeight: "500",
  },

  textOutline: {
    fontWeight: "700",
  },
});
