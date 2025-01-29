import { Stack } from "expo-router";

const SignUpLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="customer-sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="driver-sign-up" options={{ headerShown: false }} />
    </Stack>
  );
};

export default SignUpLayout;
