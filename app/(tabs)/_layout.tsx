import colors from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

const Layout = () => {
  return (
    <Tabs
      initialRouteName="(listings)"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen
        name="(listings)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new-listing"
        options={{
          title: "",
          tabBarIcon: () => (
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="plus-circle"
                size={35}
                color={colors.white}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(account)"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={35} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    borderWidth: 10,
    borderColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Layout;
