import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Icons from "@expo/vector-icons";
import { COLORS } from "../utils";
import { useLanguage } from "../context/LanguageContext";
import { useAppContext } from "../context/AppContext";

const Profile = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "arabic";

  const { user } = useAppContext();
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Icons.Ionicons name="person-outline" size={20} />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: COLORS.blue }}>
          {isArabic ? "تفاصيل شخصية" : "פרטים אישיים"}
        </Text>
        <Text>
          {isArabic
            ? "يرجى التأكد من صحة التفاصيل"
            : "אנא ודא/י שהפרטים הקיימים נכונים"}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.line} />

      <View style={styles.details}>
        <View style={styles.view}>
          <Text style={styles.label}>
            {isArabic ? "الاسم الكامل" : "שם מלא"}
          </Text>
          <Text style={styles.value}>{user?.details}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.label}>
            {isArabic ? "رقم بطاقة الهوية" : "תעודת זהות"}
          </Text>
          <Text style={styles.value}>{user?.name}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.label}>{isArabic ? "هاتف خلوي" : "טלפון"}</Text>
          <Pressable style={styles.flex}>
            <Icons.Feather name="edit" size={15} color={COLORS.blue} />
            <Text style={[styles.value, { color: COLORS.blue }]}>
              {user?.id}
            </Text>
          </Pressable>
        </View>
        <View style={styles.view}>
          <Text style={styles.label}>
            {isArabic ? "البريد الإلكتروني" : "דואר אלקטרוני"}
          </Text>
          <Pressable style={styles.flex}>
            <Icons.Feather name="edit" size={15} color={COLORS.blue} />
            <Text style={[styles.value, { color: COLORS.blue }]}>
              {user?.email}
            </Text>
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>
          {isArabic ? "تحديث التفاصيل" : "עדכון פרטים"}
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    gap: 10,
    paddingBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  line: {
    backgroundColor: "#ccc",
    height: 1,
    marginTop: 2,
  },
  details: {
    width: "90%",
    backgroundColor: "white",
    marginTop: 30,
    alignSelf: "center",
    padding: 10,
    paddingHorizontal: 15,

    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.37,
    shadowRadius: 3,

    elevation: 12,
  },
  view: {
    alignItems: "flex-end",
    marginBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 5,
    gap: 3,
  },
  label: {
    fontWeight: "bold",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  btn: {
    width: 200,
    height: 40,
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    alignSelf: "center",
  },
  btnText: { color: "white" },
});
