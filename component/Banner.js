import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function Banner(props) {
  return (
    <View style={styles.Banner}>
      <Image
        style={styles.bannerPic}
        source={require("../assets/passportbanner.png")}
      />
      <Text style={styles.BannerText}>
        {" "}
        Welcome to Bangladesh e-Passport Protal
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bannerPic: {
    width: "100%",
    height: 400,
  },

  BannerText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 40,
    margin: -80,
    paddingLeft: 80,
  },
  Banner: {
    height: 400,
    backgroundColor: "aliceblue",
  },
});

export default Banner;
