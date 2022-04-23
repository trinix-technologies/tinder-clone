import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "./Header";
import ChatList from "./ChatList";

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <Header title="Chat" callEnabled />
      <ChatList />
    </SafeAreaView>
  );
};

export default ChatScreen;
