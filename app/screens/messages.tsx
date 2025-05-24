import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ListItem from "@/components/ListItem";
import ListItemDeleteAction from "@/components/ListItemDeleteAction";
import colors from "@/constants/colors";
import { useState } from "react";

const listings = [
  {
    id: 1,
    image: require("../../assets/images/jacket.jpg"),
    title: "Jhon Week",
    price: "Welcome bro",
  },
  {
    id: 2,
    image: require("../../assets/images/couch.jpg"),
    title: "Mosh Hamedani",
    price: "Everyting okay?",
  },
  {
    id: 3,
    image: require("../../assets/images/herdoy.jpg"),
    title: "Herdoy Almamun",
    price: "How Are you?",
  },
  {
    id: 4,
    image: require("../../assets/images/jacket.jpg"),
    title: "Abdul Jobbar",
    price: "Hello brother",
  },
];

const Messages = () => {
  const [messages, setMessages] = useState(listings);

  const [isLoadign, setLoading] = useState(false);

  const handleDelete = (id: number) =>
    setMessages(messages.filter((m) => m.id !== id));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={messages}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ index, item }) => (
          <ListItem
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.price}
            RightAction={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        refreshing={isLoadign}
        onRefresh={() => setMessages(listings)}
      />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "700",
  },
  separator: {
    height: 1,
    backgroundColor: colors.lightGray,
  },
});
