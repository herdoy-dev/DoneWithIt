import ThemedButton from "@/components/ThemedButton";
import ThemedInput from "@/components/ThemedInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const formSchema = z
  .object({
    name: z.string().nonempty("Name is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().nonempty("Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
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
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo-red.png")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <ThemedInput
                icon="account-outline"
                placeholder="First Name"
                value={value}
                onChangeText={onChange}
                error={errors?.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <ThemedInput
                icon="email-outline"
                placeholder="Email Address"
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
                error={errors?.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <ThemedInput
                icon="eye-off-outline"
                placeholder="Password"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                error={errors?.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <ThemedInput
                icon="eye-off-outline"
                placeholder="Confirm Password"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                error={errors?.confirmPassword?.message}
              />
            )}
          />

          <ThemedButton text="Register" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    padding: 10,
    gap: 20,
  },
});

export default Register;
