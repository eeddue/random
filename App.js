import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Header from "./components/Header";
import DrawerContent from "./components/DrawerContent";
import StackNavigation from "./navigation";
import NavigationContextProvider from "./context/NavigationContext";
import LanguageContextProvider from "./context/LanguageContext";
import AppContextProvider from "./context/AppContext";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppContextProvider>
        <NavigationContextProvider>
          <LanguageContextProvider>
            <NavigationContainer>
              <Drawer.Navigator
                screenOptions={{
                  drawerPosition: "right",
                  header: (props) => <Header {...props} />,
                  headerTitle: "",
                  headerShadowVisible: false,
                  drawerType: "front",
                  drawerStyle: { width: "80%" },
                }}
                drawerContent={(props) => <DrawerContent {...props} />}
              >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Stack" component={StackNavigation} />
              </Drawer.Navigator>
            </NavigationContainer>
          </LanguageContextProvider>
        </NavigationContextProvider>
      </AppContextProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
