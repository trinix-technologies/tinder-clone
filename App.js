import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from "./StackNavigator";
LogBox.ignoreAllLogs();
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
