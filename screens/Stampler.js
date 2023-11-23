import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import * as Icons from "@expo/vector-icons";
import { COLORS } from "../utils";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import { useLanguage } from "../context/LanguageContext";

const Stampler = ({ navigation }) => {
  const [active, setActive] = useState(1);
  const { lang, changeLang } = useLanguage();
  const isArabic = lang === "arabic";

  const handleActive = useCallback((value) => {
    setActive(value);
  }, []);

  const onPress = useCallback(() => {
    if (lang === "arabic") return changeLang("hebrew");
    return changeLang("arabic");
  }, [changeLang]);

  const renderActiveView = () => {
    if (active === 1) return <Tab1 />;
    return <Tab2 />;
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
      <View style={styles.header}>
        <View style={styles.headerFlex}>
          <View style={{ width: 110 }}>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Icons.AntDesign name="arrowleft" size={30} color={COLORS.blue} />
            </Pressable>
          </View>
          <Icons.MaterialCommunityIcons
            name="stamper"
            size={40}
            color={COLORS.blue}
          />
          <View style={styles.flex}>
            <Pressable style={styles.btn} onPress={onPress}>
              <Text style={{ color: "white" }}>
                {isArabic ? "عربي" : "עִברִית"}
              </Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("ProfileDetails")}
            >
              <Image
                style={styles.image}
                source={require("../assets/avatar.png")}
              />
            </Pressable>
          </View>
        </View>
        <Text style={styles.headerText}>
          {isArabic
            ? "مشاهدة التصاريح وتراخيص العمل"
            : "צפייה בהיתרים ורשיונות תעסוקה"}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View style={styles.navigation}>
          <Pressable
            onPress={() => handleActive(1)}
            style={[
              styles.navBtn,
              { backgroundColor: active === 1 ? COLORS.blue : null },
            ]}
          >
            <Text>{isArabic ? "تصاريح" : "בקשות"}</Text>
          </Pressable>
          <Pressable
            onPress={() => handleActive(2)}
            style={[
              styles.navBtn,
              { backgroundColor: active === 2 ? COLORS.blue : null },
            ]}
          >
            <Text>{isArabic ? "طلبات" : "היתרים"}</Text>
          </Pressable>
        </View>

        {renderActiveView()}
      </View>
    </ScrollView>
  );
};

export default Stampler;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "#ddd",
  },
  headerFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: COLORS.blue,
  },
  image: {
    width: "80%",
    height: "80%",
    borderRadius: 50,
  },
  line: {
    backgroundColor: "#ccc",
    height: 1,
    marginBottom: 2,
  },
  navigation: {
    width: "90%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignSelf: "center",
  },
  navBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  screen: {
    padding: 20,
    alignItems: "center",
  },
  screenText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
