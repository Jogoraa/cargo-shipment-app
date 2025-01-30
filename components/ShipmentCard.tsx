import React from 'react';
import { View, Text, Button } from 'react-native';

interface Shipment {
    id: number;
    description: string;
    origin_address: string;
    destination_address: string;
    weight: number;
    dimensions: { length: number; width: number; height: number };
    fare_price: number;
}

interface ShipmentCardProps {
    shipment: Shipment;
    onAccept: (shipmentId: number) => void;
}

const ShipmentCard: React.FC<ShipmentCardProps> = ({ shipment, onAccept }) => {
    return (
        <View className="bg-white p-4 rounded-lg shadow-md mb-2">
            <Text className="text-lg font-bold">{shipment.description}</Text>
            <Text>From: {shipment.origin_address}</Text>
            <Text>To: {shipment.destination_address}</Text>
            <Text>Weight: {shipment.weight} kg</Text>
            <Text>Fare: ${shipment.fare_price.toFixed(2)}</Text>
            <Button title="Accept Shipment" onPress={() => onAccept(shipment.id)} />
        </View>
    );
};

export default ShipmentCard;
