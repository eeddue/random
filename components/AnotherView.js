import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Icons from "@expo/vector-icons";
import { COLORS } from "../utils";
import { useLanguage } from "../context/LanguageContext";

const AnotherView = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "arabic";
  return (
    <View
      style={{
        backgroundColor: COLORS.blue,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
      }}
    >
      <Text style={{ color: "white", fontWeight: "500" }}>
        {isArabic ? "لكافة الأخبار" : "לכל החדשות"}
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {isArabic ? "أخبار" : "חדשות"}
        </Text>
        <Icons.MaterialCommunityIcons
          name="menu-open"
          color={"white"}
          size={20}
        />
      </View>
    </View>
  );
};

export default AnotherView;

const styles = StyleSheet.create({});
