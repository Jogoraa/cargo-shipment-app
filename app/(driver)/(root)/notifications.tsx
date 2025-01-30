import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { icons } from "@/constants";

const notifications = [
  { id: "1", workOrder: "004-12092283", message: "New work order is added", time: "6 mins ago" },
  { id: "2", workOrder: "004-12092283", message: "New work order is added", time: "6 mins ago" },
  { id: "3", workOrder: "004-12092283", message: "New work order is added", time: "6 mins ago" },
  { id: "4", workOrder: "004-12092283", message: "New work order is added", time: "6 mins ago" },
];

export default function NotificationsScreen() {
  const [data, setData] = useState(notifications);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      {/* <View className="bg-blue-600 p-4 flex-row items-center">
        <Feather name="arrow-left" size={24} color="white" />
        <Text className="text-white text-lg font-semibold mx-auto">Notifications</Text>
      </View> */}
      {data.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Image source={icons.bell} className="w-32 h-32" />
          <Text className="text-lg font-semibold mt-4">No notifications yet</Text>
          <Text className="text-gray-500 text-center px-8">
            When you have noticfications, you will see them here
          </Text>
          <TouchableOpacity className="mt-4 bg-blue-600 px-6 py-2 rounded-lg">
            <Text className="text-white font-semibold">Refresh</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="px-4 mt-2">
          <View className="flex-row justify-between mb-2">
            <Text className="text-blue-600 font-semibold">Mark all as read</Text>
            <Text className="text-blue-600 font-semibold">Clear All</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="bg-gray-100 p-4 mb-2 rounded-lg border-l-4 border-blue-600">
                <Text className="font-bold">WO#: {item.workOrder}</Text>
                <Text className="text-gray-600">{item.message}</Text>
                <Text className="text-gray-400 text-xs mt-1">{item.time}</Text>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
