import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import useAuth from "../hooks/useAuth";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";

function HomeScreen() {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerShown: false,
    // });
  });

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-row items-center justify-between relative px-5`}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={tw`h-10 w-10 rounded-full`}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          <Image
            style={tw`h-14 w-14 rounded-full`}
            source={require("../assets/tinder-logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 mt-8 ml-3 mr-3`}>
        <View style={tw`h-3.5/4 rounded-xl bg-white shadow-xl `}>
          <Image
            style={tw`absolute h-full w-full rounded-xl`}
            source={{
              uri: "https://i.pinimg.com/originals/88/aa/b9/88aab93b1948c13d6acb878ced5e182e.jpg",
            }}
          />
          <View
            style={tw`absolute bottom-0 bg-white w-full flex-row justify-between h-20 px-6 py-2 rounded-b-xl`}
          >
            <View>
              <Text style={tw`text-xl font-bold`}>Emma watson</Text>
              <Text>Actor</Text>
            </View>
            <Text style={tw`text-xl font-bold`}>28</Text>
          </View>
        </View>
      </View>
      <View style={tw`flex flex-row justify-evenly bottom-10`}>
        <TouchableOpacity
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}
        >
          <Entypo name="cross" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}
        >
          <AntDesign name="heart" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
