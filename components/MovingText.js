import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import * as Icons from "@expo/vector-icons";
import { COLORS } from "../utils";

const { width } = Dimensions.get("window");

const MovingText = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateText = () => {
      animatedValue.setValue(0);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 5000, // Adjust the duration as needed
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => animateText());
    };

    animateText();
  }, []);

  const marginLeft = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width], // Adjust these values to control the movement
  });

  return (
    <View
      style={{
        backgroundColor: COLORS.lblue,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View style={{ zIndex: 1, backgroundColor: COLORS.lblue, padding: 5 }}>
        <Icons.EvilIcons name="chevron-down" size={25} color={COLORS.blue} />
      </View>
      <Animated.Text
        style={{
          marginLeft,
          fontSize: 12,
          color: COLORS.blue,
          writingDirection: "rtl",
          textAlign: "right",
        }}
        numberOfLines={1}
        ellipsizeMode="head"
      >
        | اهلا وسهلا.. انتم مع تطبيق المنسق. بامكانكم مشاهدة التصاريح وفحص
      </Animated.Text>
    </View>
  );
};

export default MovingText;

const styles = StyleSheet.create({});
