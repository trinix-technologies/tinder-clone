import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const ChatRow = ({ matchDetails }) => {
  let item = matchDetails.item;
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <TouchableOpacity
      style={[
        tw`flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg`,
        styles.cardShadow,
      ]}
      onPress={() => navigation.navigate("Message", { matchDetails })}
    >
      <Image
        style={tw`h-16 w-16 rounded-full mr-4`}
        source={{
          uri: item.url,
        }}
      />
      <View>
        <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
        <Text>Say Hi</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
