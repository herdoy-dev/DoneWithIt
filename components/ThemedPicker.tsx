import colors from "@/constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Props as CategoryPickerProps } from "./CategoryPickerItem";
import ErrorText from "./ErrorText";
import PickerItem, { Props as PickerItemProps } from "./PickerItem";

type Option = {
  id: string;
  label: string;
  value: string;
  color?: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
};

type PickerItemComponentProps = PickerItemProps | CategoryPickerProps;

interface Props {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  title: string;
  options: Option[];
  PickerItemComponent?: React.ComponentType<PickerItemComponentProps>;
  selectedValue: string | null;
  onChangeSelectedValue: (value: string) => void;
  error?: string;
  numberOfColumns?: number;
}

const ThemedPicker = ({
  error,
  icon,
  label,
  title,
  options,
  PickerItemComponent = PickerItem,
  selectedValue,
  onChangeSelectedValue,
  numberOfColumns = 1,
}: Props) => {
  const [isVisible, setVisible] = useState(false);
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = (screenWidth - 40) / numberOfColumns;

  const selectedItem = options.find((opt) => opt.value === selectedValue);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setVisible(true)}
      >
        {icon && (
          <MaterialCommunityIcons name={icon} size={25} color={colors.gray} />
        )}
        <Text style={selectedItem ? styles.labelSelected : styles.label}>
          {selectedItem ? selectedItem.label : label}
        </Text>
        <MaterialCommunityIcons name="chevron-down" size={25} color="#a2a2a2" />
        <Modal visible={isVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}> {title} </Text>
            <FlatList
              data={options}
              keyExtractor={(option) => option.id}
              numColumns={numberOfColumns}
              contentContainerStyle={
                PickerItemComponent && styles.flatListContent
              }
              columnWrapperStyle={
                numberOfColumns > 1 ? styles.columnWrapper : undefined
              }
              renderItem={({ item }) => (
                <View style={{ width: itemWidth }}>
                  <PickerItemComponent
                    onPress={() => {
                      onChangeSelectedValue(item.value);
                      setVisible(false);
                    }}
                    label={item.label}
                    color={item.color as string}
                    icon={
                      item.icon as keyof typeof MaterialCommunityIcons.glyphMap
                    }
                  />
                </View>
              )}
            />
          </View>
        </Modal>
      </TouchableOpacity>
      {error && <ErrorText> {error} </ErrorText>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: "#e9e9e9",
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#a2a2a2",
  },
  labelSelected: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  modalContainer: {
    padding: 10,
    flex: 1,
  },
  modalTitle: {
    fontSize: 22,
    marginVertical: 20,
    textAlign: "center",
  },
  flatListContent: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-around",
    marginBottom: 15,
  },
});

export default ThemedPicker;
