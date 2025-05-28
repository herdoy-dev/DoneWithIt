// ThemedImagesPicker.tsx
import React, { useRef } from "react";
import {
  ScrollView as NativeScrollView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import ErrorText from "./ErrorText";
import ThemedImagePicker from "./ThemedImagePicker";

interface Props {
  uris: string[];
  onPickImage: (uri: string) => void;
  onChangeImage: (uri: string | null) => void;
  error?: string;
}

const ThemedImagesPicker = ({
  uris = [],
  onPickImage,
  onChangeImage,
  error,
}: Props) => {
  const scrollViewRef = useRef<NativeScrollView>(null);

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
        >
          {uris.map((uri) => (
            <View key={uri} style={{ marginLeft: 10 }}>
              <ThemedImagePicker
                uri={uri}
                onPickImage={() => onChangeImage(uri)}
                onChangeImage={() => onChangeImage(uri)}
              />
            </View>
          ))}
          <View
            style={{ marginLeft: uris.length > 0 ? 10 : 0, marginRight: 10 }}
          >
            <ThemedImagePicker
              uri={null}
              onPickImage={onPickImage}
              onChangeImage={() => onChangeImage(null)}
            />
          </View>
        </ScrollView>
      </View>

      {error && <ErrorText> {error} </ErrorText>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
  },
});

export default ThemedImagesPicker;
