import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  ScrollView,
  Radio,
} from "react-native";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";

import TextInput from "../component/TextInput";
import Button from "../component/Button";
import { Entypo as Icon } from "@expo/vector-icons";
import { RadioButton } from "react-native-ui-lib";

export default function PassportType({ navigation }) {
  return (
    <ScrollView>
      <Header />

      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            color: "#223e4b",
            fontSize: 30,
            marginBottom: 16,
            fontWeight: "bold",
          }}
        >
          Select Passport Type here
        </Text>
        <View>
          <RadioButton value={1} label={'Ordinary'} />
          <Text>    </Text>
          <RadioButton value={2} label={'Official'} />

        </View>
       
        <Button
          label="Save and Continue"
          onPress={() => navigation.navigate("PersonalInfo")}
        />


        {/* <View style={styles.Container}>
      <View style={styles.LogIN}>
        <Text> Log in to Online Registration Portal</Text>
        <TextInput placeholder="Enter Email " />

        <TextInput placeholder="Enter Password" />
        <Button
          type="submit"
          title="Login"
          onPress={() => navigation.navigate("Register")}
        /> */}
      </View>
      <Footer />
    </ScrollView>
  )
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