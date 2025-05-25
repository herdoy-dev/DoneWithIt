import ListItem from "@/components/ListItem";
import colors from "@/constants/colors";
import { Image, StyleSheet, Text, View } from "react-native";

const ListingDetails = () => {
  return (
    <View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../../assets/images/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}> Red Jacket For Sale! </Text>
        <Text style={styles.price}> $120 </Text>
      </View>
      <View style={styles.listingAuthore}>
        <ListItem
          image={require("../../assets/images/herdoy.jpg")}
          title="Herdoy Almamun"
          subtitle="5 Listings"
        />
      </View>
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
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
