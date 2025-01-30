import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, Text, StatusBar } from "react-native";
import { icons } from "@/constants";

const TabIcon = ({ source, focused, label }: { source: ImageSourcePropType; focused: boolean; label: string }) => (
  <View className="flex justify-center items-center">
    <StatusBar className="color-blue-500"/>
    <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}>
      <Image source={source} tintColor="white" resizeMode="contain" className="w-7 h-7" />
    </View>
    {focused && <Text className="mt-1 text-sm text-white font-Jakarta">{label}</Text>}
  </View>
);

export default function Layout() {
  return (
    
    <Tabs
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0, // ios only
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
          display: "flex",
          fontWeight: "bold",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
        headerShown: false, // Hide header by default
      })}
    >
      {[
        { name: "home", title: "Home", icon: icons.dashboard },
        { name: "deliveries", title: "Deliveries", icon: icons.pkg },
        { name: "reports", title: "Reports", icon: icons.report },
        { name: "profile", title: "Profile", icon: icons.profile },
      ].map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            headerShown: false,
            tabBarIcon: ({ focused }) => <TabIcon source={icon} focused={focused} label={title} />,
          }}
        />
      ))}
    </Tabs>
    
  );
}
