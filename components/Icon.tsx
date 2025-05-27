import colors from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

interface Props {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  color?: string;
  rounded?: number;
}

const Icon = ({ name, size = 50, color, rounded }: Props) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: !rounded ? size * 0.5 : rounded,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size * 0.5}
        color={colors.white}
      />
    </View>
  );
};

export default Icon;
