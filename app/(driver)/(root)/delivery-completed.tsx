import React from 'react';
import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

const DeliveryCompleted = ({ route }: { route: { params: { shipmentId: string } } }) => {
  const { shipmentId } = route.params;

  // Logic for handling delivery confirmation, maybe fetch the completed shipment details here
  // You can either show the shipment details or a simple success message

  const handleGoBack = () => {
    router.push("/(driver)/(tabs)/home");
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">Delivery Completed!</Text>
      <Text className="text-lg">The shipment with ID {shipmentId} has been successfully delivered.</Text>

      {/* Optional: If you want to display more shipment details */}
      {/* 
      <Text className="mt-4">Details about the shipment can be displayed here.</Text>
      <Text>From: {shipment.origin_address}</Text>
      <Text>To: {shipment.destination_address}</Text>
      <Text>Weight: {shipment.weight} kg</Text>
      <Text>Dimensions: {shipment.dimensions.length} x {shipment.dimensions.width} x {shipment.dimensions.height} cm</Text>
      <Text>Fare: ${shipment.fare_price.toFixed(2)}</Text>
      */}

      <Button title="Go Back to Home" onPress={handleGoBack} />
    </View>
  );
};

export default DeliveryCompleted;
