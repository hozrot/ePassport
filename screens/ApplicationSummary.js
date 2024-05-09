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
function ApplicationSummary({ navigation }) {
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
          Application Summary
        </Text>

        <View
          style={{
            height: 500,
            width: "60%",
            backgroundColor: "gray",
            padding: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.3,
                
              }}
            >
              <Text  style={{
            color: "#223e4b",
            fontSize: 18,
            marginBottom: 16,
           
          }}>Passport Type: </Text>
            </View>
            <View
              style={{
                flex: 0.7,
                padding: 20,
              }}
            >
              <Text  style={{
            color: "#223e4b",
            fontSize: 18,
           
            fontWeight: "bold",
          }}>Ordinary passport </Text>
            </View>
          </View>
          
        </View>

        {/* <Button
          label="Payment"
          onPress={() => navigation.navigate("#")}
        />
        */}
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
export default ApplicationSummary;
