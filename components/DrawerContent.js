import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import * as Icons from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, getMenuItems, getProfileDetails } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { useScreens } from "../context/NavigationContext";
import { useLanguage } from "../context/LanguageContext";
import { useAppContext } from "../context/AppContext";

const DrawerContent = (props) => {
  const navigation = useNavigation();
  const { setScreen } = useScreens();
  const { lang, changeLang } = useLanguage();
  const { user, logout } = useAppContext();

  const closeDrawer = (item) => {
    if (item?.type === "logout") {
      logout();
    }
    if (item.href) {
      if (item.href !== "Form" && !user) {
        props.navigation.closeDrawer();
        return;
      }
      setScreen(item.href);
      navigation.navigate("Stack");
    }
    props.navigation.closeDrawer();
  };

  const getLang = (val) => lang === val;
  const isArabic = lang === "arabic";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#efefef" }}>
      <View style={styles.buttons}>
        <Pressable
          style={[styles.button, getLang("arabic") && styles.active]}
          onPress={() => changeLang("arabic")}
        >
          <Text
            style={[styles.btnText, getLang("arabic") && styles.activeText]}
          >
            عربي
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            [styles.button, getLang("hebrew") && styles.active],
          ]}
          onPress={() => changeLang("hebrew")}
        >
          <Text
            style={[styles.btnText, getLang("hebrew") && styles.activeText]}
          >
            עִברִית
          </Text>
        </Pressable>
      </View>

      <DrawerContentScrollView
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {user && (
          <View style={styles.details}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{getProfileDetails(lang).topText}</Text>
            <Pressable
              onPress={() => {
                setScreen("Profile");
                navigation.navigate("Stack");
              }}
            >
              <Text style={styles.desc}>
                {getProfileDetails(lang).bottomText}
              </Text>
            </Pressable>
          </View>
        )}

        {getMenuItems(lang).map((item, index) => {
          return (
            <Pressable
              style={styles.menuItem}
              key={index.toString()}
              onPress={() => closeDrawer(item)}
            >
              <Text style={{ color: "#333" }}>{item.title}</Text>
              {item.icon}
            </Pressable>
          );
        })}
      </DrawerContentScrollView>

      <View style={{ padding: 10, backgroundColor: "#ccc" }}>
        <Text style={{ color: COLORS.blue, textAlign: "center" }}>
          {isArabic ? "تابعْنا" : "עקבו אחרינו"}
        </Text>

        <View style={styles.socials}>
          <Pressable style={styles.socBtn}>
            <Icons.Fontisto name="facebook" size={20} color={COLORS.blue} />
          </Pressable>

          <Pressable style={styles.socBtn}>
            <Icons.SimpleLineIcons
              name="social-twitter"
              size={20}
              color={COLORS.blue}
            />
          </Pressable>

          <Pressable style={styles.socBtn}>
            <Icons.Ionicons name="logo-youtube" size={18} color={COLORS.blue} />
          </Pressable>

          <Pressable style={styles.socBtn}>
            <Icons.FontAwesome name="send" size={15} color={COLORS.blue} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    width: 70,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  active: {
    backgroundColor: COLORS.blue,
  },
  btnText: {
    fontWeight: "bold",
  },
  activeText: { color: "white" },
  details: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 10,
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  name: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "400",
  },
  desc: { color: COLORS.blue },
  menuItem: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    marginBottom: 5,
    paddingRight: 15,
  },
  socials: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  socBtn: {
    width: 35,
    height: 35,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
  },
});
