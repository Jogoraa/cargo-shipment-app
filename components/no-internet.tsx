import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { icons } from '@/constants';
import CustomButton from './CustomButton';

export default function NoInternetScreen() {
    return (
        <View className="flex-1 justify-center items-center bg-white p-4">
            {/* Illustration */}
            <Image source={icons.noInternet} className="z-0 w-[250px] h-[250px]" />


            <Text className="text-2xl font-JakartaBold text-gray-900 mb-2" style={{ fontFamily: 'Jakarta-Bold' }}>
                Ooops!
            </Text>

            <Text className="text-lg text-gray-600 text-center mb-8 font-Jakarta" style={{ fontFamily: 'Jakarta-Regular' }}>
                No internet connection found. Check your connection.
            </Text>


            <CustomButton
                title='Refresh'
            />
        </View>
    );
}