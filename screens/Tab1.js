import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../utils";
import * as Icons from "@expo/vector-icons";
import { useLanguage } from "../context/LanguageContext";
import { useAppContext } from "../context/AppContext";
import moment from "moment";

const Tab1 = () => {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const isArabic = lang === "arabic";

  const { user } = useAppContext();

  const toggleOpen = () => setOpen((prev) => !prev);
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.item}>
        <Pressable style={styles.header} onPress={toggleOpen}>
          <Text style={{ color: "green" }}>Left text</Text>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ color: COLORS.blue }}>{user?.name}</Text>
            <Text style={{ marginVertical: 4 }}>{user?.id}</Text>
            <Text>
              {moment(user?.validFrom).format("DD/MM/YYYY")} -{" "}
              {moment(user?.validTo).format("DD/MM/YYYY")}
            </Text>
          </View>
        </Pressable>
        {open ? (
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
              {/* Days of the week */}
              <View style={styles.flex}>
                <View style={styles.view}>
                  <Text>{isArabic ? "الأيام في الأسبوع" : `ימים בשבוע`}</Text>
                  <Text>{user?.daysOfWeek}</Text>
                </View>
                <Icons.AntDesign
                  name="calendar"
                  size={20}
                  color={COLORS.blue}
                />
              </View>

              {/* Permit number */}
              <View style={styles.flex}>
                <View style={styles.view}>
                  <Text>{isArabic ? "رقم التصريح" : "מספר היתר"}</Text>
                  <Text>{user?.permitNo}</Text>
                </View>
                <Icons.MaterialCommunityIcons
                  name="card-account-phone"
                  size={20}
                  color={COLORS.blue}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
              {/* Entry hours */}
              <View style={styles.flex}>
                <View style={styles.view}>
                  <Text>{isArabic ? "ساعات الدخول" : "שעות כניסה"}</Text>
                  <Text>
                    {moment(user?.entryFrom).format("LT")} -{" "}
                    {moment(user?.entryTo).format("LT")}
                  </Text>
                </View>
                <Icons.AntDesign
                  name="clockcircle"
                  size={20}
                  color={COLORS.blue}
                />
              </View>
              {/* Number of entry times */}
              <View style={styles.flex}>
                <View style={styles.view}>
                  <Text>{isArabic ? "عدد مرات الدخول" : "מספר כניסות"}</Text>
                  <Text>{user?.entryTimes}</Text>
                </View>
                <Icons.SimpleLineIcons
                  name="logout"
                  size={20}
                  color={COLORS.blue}
                />
              </View>
            </View>

            {/* Overnight stay */}
            <View style={styles.single}>
              <View style={styles.view}>
                <Text>{isArabic ? "المبيت" : "יעד"}</Text>
                <Text>{user?.overnighStay}</Text>
              </View>
              <Icons.Ionicons name="moon" size={20} color={COLORS.blue} />
            </View>

            <View style={{ flexDirection: "row", gap: 10, marginLeft: 10 }}>
              <Pressable style={styles.circle}>
                <Icons.Fontisto name="at" size={25} color={COLORS.blue} />
              </Pressable>
              <Pressable style={styles.circle}>
                <Icons.AntDesign
                  name="pdffile1"
                  size={25}
                  color={COLORS.blue}
                />
              </Pressable>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
              <Text style={styles.btnText}>{isArabic ? "مغلق" : "סגור"}</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default Tab1;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    padding: 10,
  },
  item: {
    borderRadius: 10,
    borderColor: "green",
    borderWidth: 1,
    overflow: "hidden",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d6d6d6",
    padding: 20,
  },
  flex: { flexDirection: "row", gap: 10, flex: 1, justifyContent: "flex-end" },
  single: {
    flexDirection: "row",
    gap: 10,
    alignSelf: "flex-end",
    marginTop: 20,
  },
  view: {
    alignItems: "flex-end",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#efefef",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 150,
    borderRadius: 5,
    height: 40,
    backgroundColor: COLORS.blue,
    alignSelf: "center",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },
});
