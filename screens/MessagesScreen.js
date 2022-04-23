import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";
import { KeyboardAvoidingView } from "react-native";
import useAuth from "../hooks/useAuth";
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const MessagesScreen = () => {
  const { params } = useRoute();
  const { matchDetails } = params;
  let item = matchDetails.item;
  const [input, setInput] = useState("");
  const { user } = useAuth();
  const [messages, setMessages] = useState([
    {
      uid: "123",
      userId: "123",
      messages: "HI",
      photoURL:
        "https://i.pinimg.com/originals/88/aa/b9/88aab93b1948c13d6acb878ced5e182e.jpg",
    },
    {
      uid: "345",
      userId: "345",
      messages: "HI ra",
      photoURL:
        "https://i.pinimg.com/originals/88/aa/b9/88aab93b1948c13d6acb878ced5e182e.jpg",
    },

    {
      uid: "345",
      userId: "345",
      messages: "How are you",
      photoURL:
        "https://i.pinimg.com/originals/88/aa/b9/88aab93b1948c13d6acb878ced5e182e.jpg",
    },
    {
      uid: "123",
      userId: "123",
      messages: "I am good",
      photoURL:
        "https://i.pinimg.com/originals/88/aa/b9/88aab93b1948c13d6acb878ced5e182e.jpg",
    },
    {
      uid: "345",
      userId: "345",
      messages: "When will u come to US",
      photoURL:
        "https://i.pinimg.com/originals/88/aa/b9/88aab93b1948c13d6acb878ced5e182e.jpg",
    },
    {
      uid: "123",
      userId: "123",
      messages: "Don't know",
      photoURL:
        "https://i.pinimg.com/originals/88/aa/b9/88aab93b1948c13d6acb878ced5e182e.jpg",
    },
  ]);
  const sendMessage = () => {
    addDoc(collection(db, "matches", matchDetails.id, "messages"), {
      timestamp: serverTimestamp(),
      userId: user.uid,
      displayTime: user.displayName,
      photoURL: matchDetails.users[user.uid].photoURL,
      message: input,
    });
    setInput("");
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header title={item.name} callEnabled />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1`}
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <FlatList
              //   inverted={-1}
              data={messages}
              style={tw`pl-4`}
              keyExtractor={(item) => item.uid}
              renderItem={({ item: message }) =>
                message.userId === user.id ? (
                  <SenderMessage key={message.id} message={message} />
                ) : (
                  <ReceiverMessage key={message.id} message={message} />
                )
              }
            />
          </>
        </TouchableWithoutFeedback>

        <View
          style={tw`flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2`}
        >
          <TextInput
            style={tw`h-10 text-lg`}
            placeholder="Send Message..."
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            value={input}
          />
          <Button onPress={sendMessage} title="Send" color={"#FF5864"} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessagesScreen;
