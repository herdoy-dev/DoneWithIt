import colors from "@/constants/colors";
import {
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  image: ImageURISource;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

const ListItem = ({ image, title, subtitle, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} resizeMode="cover" source={image} />
      <View style={styles.listDetails}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.subtitle}> {subtitle} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  listDetails: {
    gap: 1,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
  },
  subtitle: {
    color: colors.gray,
    fontSize: 15,
  },
});
