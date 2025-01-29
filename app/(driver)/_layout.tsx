import { Stack } from "expo-router";

const DriverLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      {/* <Stack.Screen name="role-selection" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default DriverLayout;
