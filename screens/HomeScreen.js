import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";

function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full flex-1 justify-center text-center`}>
      <Text> textInComponent </Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
