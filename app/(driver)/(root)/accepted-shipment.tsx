import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useFetch } from '@/lib/fetch';
import { Shipment } from '@/types/type';
import { router } from 'expo-router';

const AcceptedShipment = ({ route }: { route: { params: { shipmentId: string } } }) => {
  const { shipmentId } = route.params;

  // Fetch shipment details after acceptance
  const { data: shipment, loading, error } = useFetch<Shipment>(`/(api)/shipment/${shipmentId}`);
  
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    if (shipment && shipment.payment_status === 'paid') {
      setIsAccepted(true);
    }
  }, [shipment]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error loading shipment details.</Text>;

  const handleStartShipment = () => {
    // Here, you can integrate the logic to start the shipment delivery
    // For example, updating shipment status, navigating to another screen, etc.
   // router.push(`/(driver)/(root)/shipment-delivery/${shipmentId}`);
  };

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
            Status: {isAccepted ? 'Accepted and Paid' : 'Pending Acceptance'}
          </Text>
          <Button
            title={isAccepted ? "Start Shipment" : "Confirm Acceptance"}
            onPress={handleStartShipment}
          />
        </>
      ) : (
        <Text>No shipment details available.</Text>
      )}
    </View>
  );
};

export default AcceptedShipment;
