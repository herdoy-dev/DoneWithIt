import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableWithoutFeedback } from "react-native";

export interface Props {
  label: string;
  onPress: () => void;
  color: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

const PickerItem = ({ onPress, label, color, icon }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={{ fontSize: 18, marginVertical: 10 }}> {label} </Text>
    </TouchableWithoutFeedback>
  );
};

export default PickerItem;
