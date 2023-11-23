import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import MovingText from "../components/MovingText";
import AnotherView from "../components/AnotherView";
import Corousel from "../components/Corousel";
import * as Icons from "@expo/vector-icons";
import BottomList from "../components/BottomList";
import { COLORS } from "../utils";
import BottomView from "../components/BottomView";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "arabic";

  const listHeader = () => {
    return (
      <View style={{ flex: 1 }}>
        <MovingText />
        <AnotherView />
        <Corousel />
        <View style={styles.flex}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {isArabic ? "الطلبات" : "פניות"}
          </Text>
          <Icons.Feather name="send" size={20} color="white" />
        </View>
        <BottomList />
        <View style={{ height: 30, backgroundColor: COLORS.blue }} />
        <BottomView />
      </View>
    );
  };
  return (
    <View style={{ backgroundColor: COLORS.lblue, flex: 1 }}>
      <FlatList ListHeaderComponent={listHeader} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    backgroundColor: COLORS.blue,
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
