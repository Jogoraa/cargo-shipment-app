import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert, Modal } from "react-native";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignOut = () => {
    Alert.alert("Signed Out", "You have successfully signed out.");
    setModalVisible(false);
  };

  return (
    <View className="flex-1 bg-gray-100 p-5">
      <View className="bg-white rounded-xl p-6 items-center shadow-lg">
        <Image source={images.avatar} className="w-24 h-24 rounded-full" />
        <Text className="text-2xl font-JakartaBold my-3">John Doe</Text>

        <View className="mt-5 self-start">
          <Text className="text-sm text-gray-500 font-JakartaSemiBold">DOB</Text>
          <Text className="text-lg font-semibold mb-2">12/04/1990</Text>

          <Text className="text-sm text-gray-500">Mobile Phone</Text>
          <Text className="text-lg font-semibold mb-2">+1 (629) 555-0129 ✅ Verified</Text>

          <Text className="text-sm text-gray-500">Email</Text>
          <Text className="text-lg font-semibold mb-2 font-Jakarta">John@example.com</Text>

          <Text className="text-sm text-gray-500">Employee ID</Text>
          <Text className="text-lg font-semibold mb-2">06/06/2021</Text>
        </View>

        <CustomButton
          title="Sign Out"
          onPress={() => setModalVisible(true)}
        />
      </View>

      <Modal animationType="slide" transparent visible={modalVisible}>
        <View className="flex-1 justify-center bg-black bg-opacity-50">
          <View className="bg-white mx-5 p-5 rounded-xl items-center">
            <Text className="text-xl font-bold mb-2">Sign Out?</Text>
            <Text className="text-lg mb-5">Are you sure you want to sign out?</Text>
            <View className="flex-row justify-between w-full">
              <TouchableOpacity className="bg-gray-400 py-2 px-6 rounded-lg" onPress={() => setModalVisible(false)}>
                <Text className="text-white text-lg">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-blue-500 py-2 px-6 rounded-lg" onPress={handleSignOut}>
                <Text className="text-white text-lg">Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </Modal>
    </View>
  );
};

export default Profile;