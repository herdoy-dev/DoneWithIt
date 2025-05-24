import ThemedButton from "@/components/ThemedButton";
import colors from "@/constants/colors";
import { router } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const Welcome = () => {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={5}
      source={require("../../assets/images/background.jpg")}
      resizeMode="cover"
    >
      <View style={styles.main}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo-red.png")}
          />
          <Text style={styles.suptitle}>Sell What You Don't Need</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <ThemedButton
            text="Login"
            onPress={() => router.push("/screens/login")}
          />
          <ThemedButton
            color={colors.secondary}
            text="Register"
            onPress={() => router.push("/screens/register")}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    objectFit: "cover",
  },
  main: {
    flex: 1,
    paddingHorizontal: 24,
    marginVertical: 100,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  logo: {
    width: 120,
    height: 120,
  },
  suptitle: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "700",
    letterSpacing: 2,
  },
  buttonWrapper: {
    width: "100%",
    gap: 20,
  },
});
