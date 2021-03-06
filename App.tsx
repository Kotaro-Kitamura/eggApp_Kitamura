import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import egg01 from "./assets/egg01.png";
import egg02 from "./assets/egg02.png";
import egg03 from "./assets/egg03.png";

export default function App() {
  let [count, setCount] = useState(100);

  const countDown = () => {
    setCount(count - 1);
  };

  let comment
  if (count === 75) {
    comment = "まだまだ！";
  } else if (count === 50) {
    comment = "ま、まだまだ！";
  } else if (count === 20) {
    comment = "割れそう・・・";
  } else if (count === 0) {
    comment = "パッカ〜ン！";
  } else if (count < 0) {
    comment = "お疲れ様でした！";
  } else {
    comment = count;
  }

  let eggImg = egg01;
  if (count <= 50 && count > 0) {
    eggImg = egg02;
  } else if (count <= 0) {
    eggImg = egg03;
  } else {
    eggImg = egg01;
  }

  const clearButton = () => {
    setCount(count * 0 + 100);
  };

  return (
    <View style={styles.container}>
      <View style={styles.remainingCountContainer}>
        <Text style={styles.remainingCountText}>{comment}</Text>
      </View>

      <View>
        <Pressable onPress={countDown}>
          <Image source={eggImg} style={styles.egg} />
        </Pressable>
      </View>

      <View style={styles.clearButton}>
        <Pressable onPress={clearButton}>
          <Text style={styles.buttonText}>クリア</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  remainingCountContainer: {
    width: 360,
    height: 70,
    position: "absolute",
    top: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderRadius: 10,
  },

  remainingCountText: {
    color: "#00FF00",
    fontSize: 30,
  },

  egg: {
    width: 280,
    height: 280,
    marginBottom: 30,
  },

  clearButton: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 70,
    borderRadius: 10,
    position: "absolute",
    bottom: 90,
  },

  buttonText: {
    fontSize: 30,
    color: "#fff",
  },
});

<<<<<<< HEAD
=======


>>>>>>> feature
