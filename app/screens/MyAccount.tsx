import IconItem from "@/components/IconItem";
import ListItem from "@/components/ListItem";
import Separator from "@/components/Separator";
import colors from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const menuItems = [
  {
    id: "1",
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      color: colors.primary,
    },
  },
  {
    id: "2",
    title: "Messages",
    icon: {
      name: "email",
      color: colors.secondary,
    },
  },
];

const MyAccount = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", gap: 30 }}>
      <View
        style={{ height: 80, backgroundColor: "white", paddingHorizontal: 10 }}
      >
        <ListItem
          image={require("../../assets/images/herdoy.jpg")}
          title="Herdoy Almamun"
          subtitle="herdoycode@gmail.com"
        />
      </View>

      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.id}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <IconItem
              title={item.title}
              color={item.icon.color}
              icon={
                <MaterialCommunityIcons
                  name={item.icon.name as any}
                  size={25}
                  color={colors.white}
                />
              }
            />
          )}
        />
      </View>

      <IconItem
        title="Log Out"
        color={colors.yellow}
        icon={
          <MaterialCommunityIcons
            name="logout-variant"
            size={25}
            color={colors.white}
          />
        }
      />
    </SafeAreaView>
  );
};

export default MyAccount;
