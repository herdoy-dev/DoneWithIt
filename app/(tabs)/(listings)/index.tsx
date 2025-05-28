import Card from "@/components/Card";
import { navigate } from "expo-router/build/global-state/routing";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const listings = [
  {
    id: "1",
    title: "Red Jacket for sell!",
    price: 120,
    image: require("../../../assets/images/jacket.jpg"),
  },
  {
    id: "2",
    title: "Couch in great condition",
    price: 120,
    image: require("../../../assets/images/couch.jpg"),
  },
  {
    id: "3",
    title: "Red Jacket for sell!",
    price: 120,
    image: require("../../../assets/images/jacket.jpg"),
  },
  {
    id: "4",
    title: "Couch in great condition",
    price: 120,
    image: require("../../../assets/images/couch.jpg"),
  },
];

const Listings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(list) => list.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            subtitle={"$" + item.price.toString()}
            onPress={() =>
              navigate({
                pathname: "/details",
                params: { item: JSON.stringify(item) },
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Listings;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  separator: {
    height: 40,
  },
});
