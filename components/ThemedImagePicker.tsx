import colors from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ErrorText from "./ErrorText";
import Icon from "./Icon";

interface SelectedImage {
  id: string;
  uri: string;
}

interface Props {
  selectedImages: SelectedImage[];
  maxImages?: number;
  onSelectedImage: (items: SelectedImage[]) => void;
  error?: string;
}

const ThemedImagePicker = ({
  selectedImages = [],
  maxImages = 4,
  onSelectedImage,
  error,
}: Props) => {
  const pickImage = async () => {
    if (selectedImages.length >= maxImages) {
      Alert.alert(
        "Maximum images reached",
        `You can only select up to ${maxImages} images.`
      );
      return;
    }

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "We need access to your photo library to select images.",
        [{ text: "OK" }]
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
      allowsMultipleSelection: true,
      selectionLimit: maxImages - selectedImages.length,
    });

    if (!result.canceled && result.assets) {
      const newImages = result.assets.map((asset) => ({
        id: Math.random().toString(),
        uri: asset.uri,
      }));

      const updatedImages = [...selectedImages, ...newImages].slice(
        0,
        maxImages
      );
      onSelectedImage(updatedImages);
    }
  };

  const removeImage = (id: string) => {
    const updatedImages = selectedImages.filter((img) => img.id !== id);
    onSelectedImage(updatedImages);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage} style={styles.addButton}>
          <Icon name="camera" color={colors.gray} rounded={10} size={80} />
          {selectedImages.length > 0 && (
            <View style={styles.badge}>
              <MaterialIcons
                name="add"
                size={16}
                color={colors.white}
                style={styles.badgeIcon}
              />
            </View>
          )}
        </TouchableOpacity>

        <FlatList
          data={selectedImages}
          horizontal={selectedImages.length > 3}
          numColumns={selectedImages.length > 3 ? undefined : 4}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.uri }} style={styles.image} />
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeImage(item.id)}
              >
                <MaterialIcons name="close" size={18} color={colors.white} />
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={styles.listContainer}
          style={styles.flatList}
        />
      </View>
      {error && <ErrorText> {error} </ErrorText>}
    </>
  );
};

export default ThemedImagePicker;

const styles = StyleSheet.create({
  container: {
    minHeight: 120,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  addButton: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeIcon: {
    marginLeft: 1,
  },
  flatList: {
    flex: 1,
  },
  listContainer: {
    gap: 8,
  },
  imageContainer: {
    position: "relative",
    marginRight: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: colors.danger,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
