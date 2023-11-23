import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./screens/Profile";
import Stampler from "./screens/Stampler";
import { useScreens } from "./context/NavigationContext";
import ProfileDetails from "./screens/ProfileDetails";
import { useNavigation } from "@react-navigation/native";
import Form from "./screens/Form";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { screen } = useScreens();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.navigate(screen);
  }, [screen]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Stampler" component={Stampler} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
