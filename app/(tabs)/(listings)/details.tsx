import ListItem from "@/components/ListItem";
import colors from "@/constants/colors";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const ListingDetails = () => {
  const params = useLocalSearchParams();
  const item = JSON.parse(params.item as string);
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="cover" source={item.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}> {item.title} </Text>
        <Text style={styles.price}> ${item.price}</Text>
        <View style={styles.listingAuthore}>
          <ListItem
            title="Herdoy Almamun"
            subtitle="Web Developer"
            image={require("../../../assets/images/herdoy.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  listingAuthore: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    height: 100,
  },
  title: {
    fontSize: 18,
    marginBottom: 2,
  },
  price: {
    color: colors.secondary,
    fontSize: 18,
  },
});
