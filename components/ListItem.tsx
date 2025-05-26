import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import {
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import colors from "@/constants/colors";

interface Props {
  image: ImageURISource;
  title: string;
  subtitle: string;
  onPress?: () => void;
  RightAction?: () => ReactNode;
  containerStyle?: ViewStyle;
}

const ListItem = ({
  image,
  title,
  subtitle,
  RightAction,
  onPress,
  containerStyle,
}: Props) => {
  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        renderRightActions={RightAction}
        friction={2}
        rightThreshold={40}
      >
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, containerStyle]}>
              <Image style={styles.image} resizeMode="cover" source={image} />
              <View style={styles.textContainer}>
                <Text
                  style={styles.title}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {title}
                </Text>
                <Text
                  style={styles.subtitle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {subtitle}
                </Text>
              </View>
              {RightAction && (
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={25}
                  color={colors.gray}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.lightGray,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.black,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray,
  },
});
