import colors from "@/constants/colors";
import React from "react";
import {
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface Props {
  image: ImageURISource;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

const Card = ({ image, title, subtitle, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image resizeMode="cover" style={styles.image} source={image} />
        <View style={styles.cardBody}>
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.subtitle}> {subtitle} </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: "hidden",
    width: "100%",
    height: 280,
  },

  image: {
    width: "100%",
    maxHeight: 200,
  },
  cardBody: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 2,
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 18,
  },
});
