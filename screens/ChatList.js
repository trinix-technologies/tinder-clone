import { View, Text, FlatList } from "react-native";
import React from "react";
import tw from "twrnc";
import useAuth from "../hooks/useAuth";
import ChatRow from "./ChatRow";

const ChatList = () => {
  const { user } = useAuth();
  const matches = [
    {
      id: 1,
      uid: "123",
      name: "Emma Watson",
      url: "https://i.pinimg.com/originals/88/aa/b9/88aab93b1948c13d6acb878ced5e182e.jpg",
    },
    {
      id: 2,
      uid: "345",
      name: "Alexandra daddario",
      url: "https://www.the-sun.com/wp-content/uploads/sites/6/2022/02/MF-What-happened-Alexandra-Daddario-COMP.jpg?strip=all&w=960",
    },
    {
      id: 3,
      uid: "567",
      name: "Sydney Sweeney",
      url: "https://m.media-amazon.com/images/M/MV5BODc2YWFkMmItMjBjYi00MWNjLTkyMzctNzkzNTRlOThkNzliXkEyXkFqcGdeQXVyNzM1NTU0NA@@._V1_.jpg",
    },
  ];

  return matches.length > 0 ? (
    <FlatList
      tyle={tw`h-full`}
      data={matches}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <ChatRow key={item.id} matchDetails={item} />}
    />
  ) : (
    <View style={tw`p-5`}>
      <Text style={tw`text-center text-lg`}>No matches at the moment</Text>
    </View>
  );
};

export default ChatList;
