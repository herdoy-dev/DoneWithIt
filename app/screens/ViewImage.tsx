import colors from "@/constants/colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const ViewImage = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.actionButton, styles.close]}>
        <FontAwesome name="trash-o" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton, styles.delete]}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
      </TouchableOpacity>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/images/chair.jpg")}
      />
    </View>
  );
};

export default ViewImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  actionButton: {
    width: 45,
    height: 45,
    borderRadius: 6,
    position: "absolute",
    top: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  close: {
    right: 20,
  },
  delete: {
    left: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
