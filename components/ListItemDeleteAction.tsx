import colors from "@/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { useAnimatedStyle } from "react-native-reanimated";

interface Props {
  onPress: () => void;
}

const ListItemDeleteAction = ({ onPress }: Props) => {
  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: 70 }],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.rightAction, styleAnimation]}>
        <FontAwesome name="trash-o" size={30} color={colors.white} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  rightAction: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.danger,
  },
});
