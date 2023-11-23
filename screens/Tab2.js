import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Tab2 = () => {
  return (
    <View style={styles.screen}>
      <Text>Some random text</Text>
    </View>
  );
};

export default Tab2;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
    flex: 1,
  },
});
