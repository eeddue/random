import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, getBottomList } from "../utils";
import { useScreens } from "../context/NavigationContext";
import { useNavigation } from "@react-navigation/native";
import { useLanguage } from "../context/LanguageContext";
import { useAppContext } from "../context/AppContext";

const BottomList = () => {
  const navigation = useNavigation();
  const { setScreen } = useScreens();
  const { lang } = useLanguage();
  const { user } = useAppContext();

  const renderItem = ({ item }) => {
    const onPress = () => {
      if (item.href) {
        if (user) {
          setScreen("Stampler");
        } else {
          setScreen("Form");
        }
        return navigation.navigate("Stack");
      }
      return;
    };
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.item}
        onPress={onPress}
      >
        {item.icon}
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      renderItem={renderItem}
      data={getBottomList(lang)}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{
        gap: 25,
        padding: 20,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default BottomList;

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    gap: 10,
    maxWidth: 130,
  },
  itemText: {
    color: COLORS.blue,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
