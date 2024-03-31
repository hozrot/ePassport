import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  ScrollView,
} from "react-native";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";

function LogIn(props) {
  return (
    <ScrollView>
      <Header />
      <Banner />
      <View style={styles.Container}>
        <View style={styles.LogIN}>
          <Text> Log in to Online Registration Portal</Text>
          <TextInput  placeholder="Enter Email " />
          <TextInput placeholder="Enter Password" />

          <Text> Login</Text>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 400,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  LogIn: {
    flex: 0.2,
    backgroundColor: "gray",
  },
});
export default LogIn;
