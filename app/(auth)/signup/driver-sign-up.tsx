import React, { useState } from "react";
import { View, Text, ScrollView, Alert, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Picker } from "@react-native-picker/picker";
import { icons } from "@/constants";
import { router } from "expo-router";

export default function DriverSignUp() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    licenseNumber: "",
    vehicleType: "",
    vehicleRegistrationNumber: "",
    nationalID: "",
    vehicleColor: "",
    insuranceNumber: "",
    vehiclePlateNumber: "",
  });

  const [licenseDocument, setLicenseDocument] = useState<string | null>(null);
  const [vehicleDocument, setVehicleDocument] = useState<string | null>(null);
  const [driverRole, setDriverRole] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const pickDocument = async (type: "license" | "vehicle") => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      type === "license"
        ? setLicenseDocument(result.assets[0].uri)
        : setVehicleDocument(result.assets[0].uri);
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.fullName) newErrors.fullName = "Full Name is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email is required";
    if (form.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (!form.phoneNumber || !/^\+\d{10,15}$/.test(form.phoneNumber))
      newErrors.phoneNumber = "Valid phone number is required";
    if (!form.licenseNumber) newErrors.licenseNumber = "License Number is required";
    if (!form.vehicleType) newErrors.vehicleType = "Vehicle Type is required";
    if (!form.vehicleRegistrationNumber) newErrors.vehicleRegistrationNumber = "Vehicle Registration Number is required";
    if (!form.vehicleColor) newErrors.vehicleColor = "Vehicle Color is required";
    if (!form.nationalID) newErrors.nationalID = "National ID is required";
    if (!form.insuranceNumber) newErrors.insuranceNumber = "Insurance Number is required";
    if (!licenseDocument) newErrors.licenseDocument = "License Document is required";
    if (!vehicleDocument) newErrors.vehicleDocument = "Vehicle Document is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    router.push("/(driver)/(tabs)/home");

    if (validateForm()) {
      Alert.alert("Success", "Driver registration submitted successfully!");
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-JakartaBold text-gray-800 mb-6 items-center text-center">Driver Registration</Text>

      {/* Personal Information */}
      <Text className="text-lg font-JakartaSemiBold text-gray-700 mb-4">Personal Information</Text>
      <InputField
        label="Name"
        placeholder="Enter name"
        icon={icons.person}
        value={form.fullName}
        onChangeText={(value) => setForm({ ...form, fullName: value })}
      />
      <InputField
        label="Email"
        placeholder="Enter email"
        icon={icons.email}
        textContentType="emailAddress"
        value={form.email}
        onChangeText={(value) => setForm({ ...form, email: value })}
      />
      <InputField
        label="Password"
        placeholder="Enter password"
        icon={icons.lock}
        secureTextEntry
        textContentType="password"
        value={form.password}
        onChangeText={(value) => setForm({ ...form, password: value })}
      />
      <InputField
        label="Phone Number"
        placeholder="+1234567890"
        keyboardType="phone-pad"
        value={form.phoneNumber}
        onChangeText={(text) => setForm({ ...form, phoneNumber: text })}
      />
      <InputField
        label="National ID"
        placeholder="123456789012"
        value={form.nationalID}
        onChangeText={(text) => setForm({ ...form, nationalID: text })}
      />

      {/* Driver Role Selection */}
      <Text className="text-lg font-semibold text-gray-700 mt-6 mb-2">Select Driver Role</Text>
      <Picker
        selectedValue={driverRole}
        onValueChange={(itemValue: React.SetStateAction<string>) => setDriverRole(itemValue)}
        className="border rounded-lg p-2 bg-white"
      >
        <Picker.Item label="Heavy-Duty Driver" value="heavyDuty" />
        <Picker.Item label="Light Vehicle Driver" value="lightVehicle" />
        <Picker.Item label="Motorcycle Courier" value="motorcycle" />
        <Picker.Item label="Specialized Cargo Driver" value="specialCargo" />
        <Picker.Item label="Tow Truck Driver" value="towTruck" />
      </Picker>

      {/* Driver License */}
      <Text className="text-lg font-semibold text-gray-700 mt-6 mb-4">Driver License</Text>
      <InputField
        label="License Number"
        placeholder="DL123456789"
        value={form.licenseNumber}
        onChangeText={(text) => setForm({ ...form, licenseNumber: text })}
      />
      <CustomButton
        title="Upload License Document"
        bgVariant="secondary"
        onPress={() => pickDocument("license")}
      />
      {licenseDocument && <Text className="text-green-500 mt-2">License Document Uploaded</Text>}

      {/* Vehicle Information */}
      <Text className="text-lg font-semibold text-gray-700 mt-6 mb-4">Vehicle Information</Text>
      <InputField
        label="Vehicle Type"
        placeholder="Van, Truck, etc."
        value={form.vehicleType}
        onChangeText={(text) => setForm({ ...form, vehicleType: text })}
      />
      <InputField
        label="Vehicle Registration Number"
        placeholder="ABC123"
        value={form.vehicleRegistrationNumber}
        onChangeText={(text) => setForm({ ...form, vehicleRegistrationNumber: text })}
      />
      <InputField
        label="Vehicle Plate Number"
        placeholder="ABC123"
        value={form.vehiclePlateNumber}
        onChangeText={(text) => setForm({ ...form, vehiclePlateNumber: text })}
      />
      <InputField
        label="Vehicle Color"
        placeholder="Red, Blue, etc."
        value={form.vehicleColor}
        onChangeText={(text) => setForm({ ...form, vehicleColor: text })}
      />
      <InputField
        label="Insurance Number"
        placeholder="INS123456789"
        value={form.insuranceNumber}
        onChangeText={(text) => setForm({ ...form, insuranceNumber: text })}
      />
      <CustomButton
        title="Upload Vehicle Registration Document"
        bgVariant="secondary"
        onPress={() => pickDocument("vehicle")}
      />
      {vehicleDocument && <Text className="text-green-500 mt-2">Vehicle Document Uploaded</Text>}

      {/* Submit Button */}
      <CustomButton title="Submit Registration" onPress={handleSubmit} className="mt-8 mb-11" />
    </ScrollView>
  );
}
