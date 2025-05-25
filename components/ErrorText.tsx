import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

const ErrorText = ({ children }: PropsWithChildren) => {
  return <Text style={styles.error}>{children}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginLeft: 10,
    marginTop: -15,
    fontSize: 12,
  },
});
