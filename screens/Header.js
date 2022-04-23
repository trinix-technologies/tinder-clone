import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons, Foundation } from "@expo/vector-icons";

const Header = ({ title, callEnabled }) => {
  const navigation = useNavigation();

  return (
    <View style={tw`p-2 flex-row items-center justify-between`}>
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity style={tw`p-2`} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={34} color={"#FF5864"} />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold pl-2`}>{title}</Text>
      </View>
      {callEnabled && (
        <TouchableOpacity style={tw`rounded-full mr-4 p-3 bg-red-200`}>
          <Foundation name="telephone" size={20} color={"red"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
