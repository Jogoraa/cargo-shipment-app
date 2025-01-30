import { TextInputProps, TouchableOpacityProps, ReactNode } from "react-native";

declare interface Driver {
    driver_id: number;
    first_name: string;
    last_name: string;
    profile_image_url: string;
    car_image_url: string;
    car_seats: number;
    rating: number;
}
declare interface Shipment {
    id: any; // Unique identifier for the shipment
    description: string; // Description of the shipment
    origin_address: string; // Pickup address
    destination_address: string; // Delivery address
    origin_latitude: number; // Latitude of pickup location
    origin_longitude: number; // Longitude of pickup location
    destination_latitude: number; // Latitude of delivery location
    destination_longitude: number; // Longitude of delivery location
    weight: number; // Weight of the shipment (in kg)
    dimensions: { length: number; width: number; height: number }; // Dimensions of the shipment (in cm)
    fare_price: number; // Price for the shipment
}
declare interface Ride {
    id: any;
    name: ReactNode;
    origin_address: string;
    destination_address: string;
    origin_latitude: number;
    origin_longitude: number;
    destination_latitude: number;
    destination_longitude: number;
    ride_time: number;
    fare_price: number;
    payment_status: string;
    driver_id: number;
    user_email: string;
    created_at: string;
    driver: {
        first_name: string;
        last_name: string;
        car_seats: number;
    };
}

declare interface Ride {
    id: any;
    name: ReactNode;
    origin_address: string;
    destination_address: string;
    origin_latitude: number;
    origin_longitude: number;
    destination_latitude: number;
    destination_longitude: number;
    ride_time: number;
    fare_price: number;
    payment_status: string;
    driver_id: number;
    user_email: string;
    created_at: string;
    driver: {
        first_name: string;
        last_name: string;
        car_seats: number;
    };
}

declare interface MarkerData {
    latitude: number;
    longitude: number;
    id: number;
    title: string;
    profile_image_url: string;
    car_image_url: string;
    car_seats: number;
    rating: number;
    first_name: string;
    last_name: string;
    time?: number; // Estimated time for arrival
    price?: string; // Estimated price for the ride
}

declare interface MapProps {
    destinationLatitude?: number; // Optional destination latitude
    destinationLongitude?: number; // Optional destination longitude
    onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void; // Callback for calculated times
    selectedDriver?: number | null; // Currently selected driver ID
    onMapReady?: () => void; // Callback when the map is ready
}

declare interface Shipment {
    id: any; // Unique identifier for the shipment
    description: string; // Description of the shipment
    origin_address: string; // Pickup address
    destination_address: string; // Delivery address
    origin_latitude: number; // Latitude of pickup location
    origin_longitude: number; // Longitude of pickup location
    destination_latitude: number; // Latitude of delivery location
    destination_longitude: number; // Longitude of delivery location
    weight: number; // Weight of the shipment (in kg)
    dimensions: { length: number; width: number; height: number }; // Dimensions of the shipment (in cm)
    pickup_time_window_start?: Date; // Optional start time for pickup window
    pickup_time_window_end?: Date; // Optional end time for pickup window
    fare_price: number; // Price for the shipment
    payment_status: string; // Payment status (e.g., paid, pending)
    driver_id?: number | null; // Optional assigned driver ID
}

declare interface ButtonProps extends TouchableOpacityProps {
    title: string;
    bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
    textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
}

declare interface GoogleInputProps {
    icon?: string;
    initialLocation?: string;
    containerStyle?: string;
    textInputBackgroundColor?: string;
    handlePress: ({
        latitude,
        longitude,
        address,
    }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
}

declare interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
}

declare interface PaymentProps {
    fullName: string;
    email: string;
    amount: string;
    driverId: number;
}

declare interface LocationStore {
    userLatitude: number | null;
    userLongitude: number | null;
    userAddress: string | null;
    destinationLatitude: number | null;
    destinationLongitude: number | null;
    destinationAddress: string | null;
    setUserLocation: ({
        latitude,
        longitude,
        address,
    }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
    setDestinationLocation: ({
        latitude,
        longitude,
        address,
    }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
}

declare interface DriverStore {
    drivers: MarkerData[];
    selectedDriver: number | null;
    setSelectedDriver: (driverId: number) => void;
    setDrivers: (drivers: MarkerData[]) => void;
    clearSelectedDriver: () => void;
}

declare interface DriverCardProps {
    item: MarkerData;
    selectedDriverId?: number | null; // Optional selected driver ID for comparison
    setSelectedDriverId: (driverId: number) => void;  // Function to set selected driver ID
}
