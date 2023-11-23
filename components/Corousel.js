import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../utils";

const items = [
  {
    title: "Lorem ipsum dolor sit amet",
    image:
      "https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish.jpg",
  },
  {
    title: "Ut venenatis bibendum",
    image:
      "https://wallpapers.com/images/featured/beautiful-scenery-pictures-ycxy8o2ii84zsgiv.jpg",
  },
  {
    title: "Nunc orci ex",
    image:
      "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
  },
  {
    title: "Suspendisse",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttJmTvrCleoKjshnNJpvijzgl3WSA0e2JHnBsG2db&s",
  },
  {
    title: "mauris eget interdum",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTQqKq2_uL8q_3YxDm8T0tMFgsXUiEm_PMzHEa0OhoKFKimHQlc8DaCEdi3tpHJ7TubA&usqp=CAU",
  },
];

const { width } = Dimensions.get("window");

const Corousel = () => {
  const [active, setActive] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <ImageBackground
        source={{ uri: item.image }}
        style={{ height: 330, width }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.5)"]}
          style={{ ...StyleSheet.absoluteFillObject }}
        />

        <Text style={styles.title}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({ _, index }) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  active === index ? COLORS.blue : "rgba(255,255,255,0.3)",
              },
            ]}
          />
        )}
        keyExtractor={(item) => item.toString()}
        style={styles.indicator}
      />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        bounces={false}
        onMomentumScrollEnd={(e) => {
          const scrollX = e.nativeEvent.contentOffset.x;
          const index = Math.floor(scrollX / width);
          setActive(index);
        }}
      />
    </View>
  );
};

export default Corousel;

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 15,
  },
  title: {
    color: "white",
    alignSelf: "flex-end",
    marginTop: "auto",
    marginBottom: 40,
    padding: 10,
  },
  indicator: {
    position: "absolute",
    bottom: 20,
    zIndex: 333,
    flexDirection: "row",
    gap: 5,
    alignSelf: "center",
  },
});
