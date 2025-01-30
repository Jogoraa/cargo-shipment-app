import { Slot, Stack } from "expo-router";

const DriverLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>


      <Stack.Screen name="(tabs)" />

    </Stack>
  );
};

export default DriverLayout;
