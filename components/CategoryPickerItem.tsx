import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Icon from "./Icon";

export interface Props {
  label: string;
  onPress: () => void;
  color: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

const CategoryPickerItem = ({ label, onPress, color, icon }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name={icon} color={color} size={80} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
  },
});

export default CategoryPickerItem;
