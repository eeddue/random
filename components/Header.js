import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import * as Icons from "@expo/vector-icons";
import { useLanguage } from "../context/LanguageContext";

const Header = (props) => {
  const { lang } = useLanguage();
  const isArabic = lang === "arabic";
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Pressable
          style={{ alignItems: "flex-end" }}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text>{isArabic ? "المنسق" : 'מתפ"ש'}</Text>
          <Text>
            {isArabic
              ? "تنسيق أعمال الحكومة في المناطق"
              : "תיאום פעולות הממשלה בשטחים"}
          </Text>
        </Pressable>

        <Image source={require("../assets/icon.png")} style={styles.logo} />
        <Pressable onPress={() => props.navigation.openDrawer()}>
          <Icons.Feather name="menu" size={25} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "flex-end",
    paddingVertical: 5,
    backgroundColor: "white",
    elevation: 0,
    shadowOpacity: 0,
  },
  logo: { width: 40, height: 40 },
});
