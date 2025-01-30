import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="accept-shipment" />
            <Stack.Screen name="notifications" />
        </Stack>
    );
};

export default Layout;
