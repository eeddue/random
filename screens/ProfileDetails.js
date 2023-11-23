import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../utils";
import * as Icons from "@expo/vector-icons";
import { useLanguage } from "../context/LanguageContext";
import { useAppContext } from "../context/AppContext";

const ProfileDetails = ({ navigation }) => {
  const { lang } = useLanguage();
  const isArabic = lang === "arabic";

  const { user } = useAppContext();
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text>
          {isArabic ? "بطاقة هوية" : "תעודת זהות"} {user?.id}
        </Text>
        <Text style={{ marginLeft: 10 }}>
          {isArabic ? "الاسم" : "שם"} {user?.name}
        </Text>

        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 20 }}
        >
          <Icons.AntDesign name="arrowright" color={COLORS.blue} size={30} />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Image source={{ uri: user?.avatar }} style={styles.image} />
      </View>
    </ScrollView>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#e8e8e8",
    padding: 10,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#d6d6d6",
    padding: 10,
    paddingVertical: 15,
  },
  container: {
    borderRadius: 10,
    backgroundColor: "white",
    height: 500,
    marginTop: 30,
    padding: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
