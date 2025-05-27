import CategoryPickerItem from "@/components/CategoryPickerItem";
import ThemedButton from "@/components/ThemedButton";
import ThemedImagePicker from "@/components/ThemedImagePicker";
import ThemedInput from "@/components/ThemedInput";
import ThemedPicker from "@/components/ThemedPicker";
import colors from "@/constants/colors";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const categories = [
  {
    id: "1",
    label: "Furnitures",
    value: "1",
    color: "#ffbf00",
    icon: "floor-lamp",
  },
  {
    id: "2",
    label: "Cars",
    value: "2",
    color: colors.secondary,
    icon: "car",
  },
  { id: "3", label: "Camera", value: "3", color: "#6495fd", icon: "camera" },
  {
    id: "4",
    label: "Games",
    value: "4",
    color: "#808000",
    icon: "gamepad-variant-outline",
  },
  {
    id: "5",
    label: "Clothing",
    value: "5",
    color: "#d2601a",
    icon: "tshirt-crew",
  },
  {
    id: "6",
    label: "Sports",
    value: "6",
    color: "#1b6535",
    icon: "basketball",
  },
  {
    id: "7",
    label: "Movie & Music",
    value: "7",
    color: "#ecc19c",
    icon: "headphones",
  },
  {
    id: "8",
    label: "Books",
    value: "8",
    color: "#1868ae",
    icon: "book-open-variant",
  },
  {
    id: "9",
    label: "Others",
    value: "9",
    color: "#a0a0a0",
    icon: "application-outline",
  },
];

const formSchema = z.object({
  title: z.string().nonempty("Title is required"),
  images: z.array(
    z.object({
      id: z.string(),
      uri: z.string(),
    })
  ),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .positive("Price must be greater than 0"),
  category: z.string().nonempty("Category is required"),
  description: z
    .string()
    .min(6, "Description must be at least 6 characters long"),
});

type FormValues = z.infer<typeof formSchema>;

const NewListing = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Create New Listing</Text>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="images"
            render={({ field: { onChange, value } }) => (
              <ThemedImagePicker
                selectedImages={value}
                onSelectedImage={(images) => onChange(images)}
                maxImages={4}
                error={errors?.images?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <ThemedInput
                placeholder="Title"
                value={value}
                onChangeText={onChange}
                error={errors?.title?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, value } }) => (
              <ThemedInput
                placeholder="Price"
                inputMode="decimal"
                value={value?.toString()}
                onChangeText={(text) => onChange(Number(text))}
                error={errors?.price?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="category"
            render={({ field: { onChange, value } }) => (
              <ThemedPicker
                options={categories as any}
                selectedValue={value}
                onChangeSelectedValue={onChange}
                label="Category"
                title="Select a category"
                error={errors?.category?.message}
                numberOfColumns={3}
                PickerItemComponent={CategoryPickerItem}
              />
            )}
          />

          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <ThemedInput
                placeholder="Description"
                multiline
                numberOfLines={4}
                value={value}
                onChangeText={onChange}
                error={errors?.description?.message}
              />
            )}
          />

          <ThemedButton text="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    padding: 10,
    gap: 20,
  },
});

export default NewListing;
