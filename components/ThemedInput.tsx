import colors from "@/constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import ErrorText from "./ErrorText";

interface Props extends TextInputProps {
  icon?: string;
  value: string;
  error?: string;
}

const ThemedInput = ({ icon, value, error, numberOfLines, ...rest }: Props) => {
  return (
    <>
      <View
        style={[
          styles.container,
          numberOfLines ? styles.multilineContainer : null,
        ]}
      >
        {icon && (
          <MaterialCommunityIcons
            name={icon as any}
            size={25}
            color={colors.gray}
          />
        )}
        <TextInput
          value={value}
          style={[styles.input, numberOfLines ? styles.multilineInput : null]}
          placeholderTextColor="#999"
          {...rest}
        />
      </View>
      {error && <ErrorText> {error} </ErrorText>}
    </>
  );
};

export default ThemedInput;

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    borderRadius: 25,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    gap: 10,
    backgroundColor: "#e9e9e9",
  },
  multilineContainer: {
    alignItems: "flex-start",
    paddingVertical: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 0,
  },
  multilineInput: {
    textAlignVertical: "top",
    height: "auto",
    minHeight: 20 * 4,
  },
});
