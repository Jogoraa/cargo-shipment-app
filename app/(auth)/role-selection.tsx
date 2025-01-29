import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { Link, router } from "expo-router";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

export default function RoleSelection() {
    const onCustomerPress = () => {
        router.push('/(auth)/signup/customer-sign-up')
    };
    const onDriverPress = () => {
        router.push('/(auth)/signup/driver-sign-up')
    };
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Image
                source={images.signUpCar}
                className="w-full h-[250px] object-cover"
            />
            <Text className="text-3xl font-JakartaBold text-center my-10">
                Choose Your Role:
            </Text>
            <CustomButton
                title=" I'm a Customer"
                onPress={onCustomerPress}
                className="mt-6"
            />
            <CustomButton
                title=" I'm a Driver"
                onPress={onDriverPress}
                className="mt-6"
            />
        </ScrollView >
    );
}
