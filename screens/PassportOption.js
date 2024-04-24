import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";

import TextInput from "../component/TextInput";
import Button from "../component/Button";
import { Entypo as Icon } from "@expo/vector-icons";

export default function PassportOption({navigation}) {
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
       Passport Option
      </Text>
      <View
        style={{
          padding: 32,
          marginBottom: 16,
          width: "25%",
          height: 50,
        }}
      >
        <TextInput
          icon="mail"
          placeholder="Enter your email"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View
        style={{ padding: 32, marginBottom: 16, width: "25%", height: 50 }}
      >
        <TextInput
          icon="key"
          placeholder="Enter your password"
          secureTextEntry
          autoCompleteType="password"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <Button
        label="Save and Continue"
        onPress={() => navigation.navigate("DelevaryOption")}
      />
    
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