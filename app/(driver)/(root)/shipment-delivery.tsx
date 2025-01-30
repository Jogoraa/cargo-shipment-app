import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useFetch } from '@/lib/fetch';
import { Shipment } from '@/types/type';
import { router } from 'expo-router';

const ShipmentDelivery = ({ route }: { route: { params: { shipmentId: string } } }) => {
  const { shipmentId } = route.params;

  // Fetch shipment details for delivery tracking
  const { data: shipment, loading, error } = useFetch<Shipment>(`/(api)/shipment/${shipmentId}`);

  const [isDelivered, setIsDelivered] = useState(false);

  useEffect(() => {
    if (shipment && shipment.payment_status === 'paid') {
      setIsDelivered(false);
    }
  }, [shipment]);

  const handleCompleteDelivery = () => {
    // Here you can trigger the logic to mark the shipment as delivered
    // Update the shipment status, notify the user, etc.
    setIsDelivered(true);
    // Optionally, navigate to another screen or show success message
    //router.push(`/app/(driver)/(root)/delivery-completed/${shipmentId}`);
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error loading shipment details.</Text>;

  return (
    <View className="flex-1 justify-center items-center p-4">
      {shipment ? (
        <>
          <Text className="text-2xl font-bold">{shipment.description}</Text>
          <Text>From: {shipment.origin_address}</Text>
          <Text>To: {shipment.destination_address}</Text>
          <Text>Weight: {shipment.weight} kg</Text>
          <Text>Dimensions: {shipment.dimensions.length} x {shipment.dimensions.width} x {shipment.dimensions.height} cm</Text>
          <Text>Fare: ${shipment.fare_price.toFixed(2)}</Text>
          <Text className="mt-4 text-xl">
            Status: {isDelivered ? 'Delivered' : 'In Transit'}
          </Text>
          <Button
            title={isDelivered ? "Delivery Completed" : "Complete Delivery"}
            onPress={handleCompleteDelivery}
          />
        </>
      ) : (
        <Text>No shipment details available.</Text>
      )}
    </View>
  );
};

export default ShipmentDelivery;
