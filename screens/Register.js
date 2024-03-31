import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
function Register(props) {
  return (
    <View>
      <Header />
      <Banner />
      <Text> Register Page </Text>
      <Footer />
      
    </View>
  );
}
const styles = StyleSheet.create({});
export default Register;
