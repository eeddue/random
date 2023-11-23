import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../utils";
import * as Icons from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLanguage } from "../context/LanguageContext";

const BottomView = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "arabic";

  return (
    <View style={styles.view}>
      <View style={{ alignSelf: "flex-end" }}>
        <Text style={{ alignSelf: "flex-end" }}>
          {isArabic ? "هل تريدون معرفة المزيد؟" : "רוצים לדעת יותר?"}
        </Text>
        <Text style={{ alignSelf: "flex-end" }}>
          {isArabic ? "نحن هنا لخدمتكم " : "אנחנו כאן לשירותכם"}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={[COLORS.lblue, COLORS.blue]}
          style={styles.gradient}
        >
          <Icons.AntDesign name="calendar" size={30} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default BottomView;

const styles = StyleSheet.create({
  view: {
    backgroundColor: COLORS.lblue,
    paddingVertical: 25,
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
    gap: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 45,
    overflow: "hidden",
  },
  gradient: {
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
    alignItems: "center",
  },
});
