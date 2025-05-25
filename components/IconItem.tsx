import colors from "@/constants/colors";
import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
  title: string;
  color: string;
  icon: ReactNode;
}

const IconItem = ({ onPress, title, color, icon }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.icon, { backgroundColor: color }]}>{icon}</View>
      <Text> {title} </Text>
    </TouchableOpacity>
  );
};

export default IconItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    gap: 5,
    padding: 8,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
