import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import tw from "twrnc";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const ModalScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const inCompleteForm = !image || !job || !age;

  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      job,
      age,
      image,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={tw`flex-1 items-center pt-1 `}>
      <Image
        style={tw`h-20 w-50`}
        resize="contain"
        source={{
          uri: "https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png",
        }}
      />
      <Text style={tw`text-center p-4 font-bold text-gray-500 text-xl`}>
        Welcome {user.displayName}
      </Text>
      <Text style={tw`text-center p-4 font-bold text-red-400`}>
        Step 1: The Profile pic
      </Text>
      <TextInput
        value={image}
        onChangeText={(text) => setImage(text)}
        style={tw`text-center text-xl pb-2`}
        placeholder="Enter a profile pic url"
      />
      <Text style={tw`text-center p-4 font-bold text-red-400`}>
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={(text) => setJob(text)}
        style={tw`text-center text-xl pb-2`}
        placeholder="Enter your occupation"
      />
      <Text style={tw`text-center p-4 font-bold text-red-400`}>
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        style={tw`text-center text-xl pb-2`}
        placeholder="Enter your Age"
        maxLength={2}
        keyboardType="numeric"
      />
      <TouchableOpacity
        disabled={inCompleteForm}
        onPress={updateUserProfile}
        style={tw`w-64 p-3 rounded-xl absolute bottom-10 ${
          inCompleteForm ? "bg-gray-400" : "bg-red-400"
        }`}
      >
        <Text style={tw`text-center text-white text-xl`}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
