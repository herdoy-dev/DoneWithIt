import colors from "@/constants/colors";
import * as imagePicker from "expo-image-picker";
import { useEffect } from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Icon from "./Icon";

interface Props {
  uri: string | null;
  onPickImage: (uri: string) => void;
  onChangeImage: (image: string | null) => void;
}

const ThemedImagePicker = ({ uri, onPickImage, onChangeImage }: Props) => {
  useEffect(() => {
    requestPermition();
  }, []);

  const requestPermition = async () => {
    const result = await imagePicker.getCameraPermissionsAsync();
    if (!result.granted) {
      alert("You have to give camera permission");
    }
  };

  const pickImage = async () => {
    const result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      onPickImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {!uri ? (
        <TouchableWithoutFeedback onPress={pickImage}>
          <View>
            <Icon
              name="camera"
              size={80}
              rounded={10}
              color={colors.lightGray}
            />
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => onChangeImage(null)}>
          <View style={styles.imageContainer}>
            <Image source={{ uri }} style={styles.image} blurRadius={2} />
            <View style={styles.closeIcon}>
              <Icon name="close" size={30} color={colors.gray} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default ThemedImagePicker;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  closeIcon: {
    position: "absolute",
    top: 5,
    right: 4,
  },
  imageContainer: {
    width: 80,
    height: 80,
    position: "relative",
  },
  image: {
    width: 80,
    height: 80,
  },
});
