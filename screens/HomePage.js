import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Modal from "react-native-modal";

function HomePage({ navigation }) {
  return (
    <ScrollView style={styles.Container}>
      <Header />
      <View style={styles.MenuBar}>
        <TouchableOpacity>
          <Text style={styles.menuText}>Home </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.menuText}>Instructions </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}> Fees Details </Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.menuText}>Log in </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.menuText}>Sing Up</Text>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Text style={styles.menuText}> Check Status </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.menuText}>Sign in </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Sign up </Text>
        </TouchableOpacity> */}
      </View>
      <Banner />
      <View
        style={{ justifyContent: "center", alignItems: "center", height: 200 }}
      >
        <Text
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 10,
          }}
        >
          5 Step to Apply Passport
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 250,
        }}
      >
        <TouchableOpacity style={styles.five}>
          <MaterialCommunityIcons
            name={"magnify-expand"}
            size={80}
            color={"green"}
          />
          <Text style={styles.menuText}>Check availability</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.five}>
          <MaterialCommunityIcons
            name={"playlist-edit"}
            size={80}
            color={"green"}
          />
          <Text style={styles.menuText}>e-Passport application </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.five}>
          <MaterialCommunityIcons
            name={"cash-check"}
            size={80}
            color={"green"}
          />
          <Text style={styles.menuText}> Pay passport fees </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.five}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <MaterialCommunityIcons
              name={"fingerprint"}
              size={50}
              color={"green"}
            />
            <MaterialCommunityIcons name={"camera"} size={50} color={"green"} />
          </View>
          <Text style={styles.menuText}>Biometric enrolment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.five}>
          <MaterialCommunityIcons
            name={"passport-biometric"}
            size={80}
            color={"green"}
          />
          <Text style={styles.menuText}>Collect your e-Passport</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.ContentBlock}>
        <TouchableOpacity style={styles.block}>
          <MaterialCommunityIcons
            name={"desktop-mac"}
            size={100}
            color={"green"}
          />
          <Text style={styles.menuText}> Apply Online </Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.ContentBlock}>
        <TouchableOpacity style={styles.FeesBlock}>
          <Text style={styles.menuText}> Fees for RPO </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.block}>
          <Text style={styles.menuText}>
            5 Year / 48 Page {"\n"}
            {"\n"}
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {" "}
            Regular : 3400 Taka {"\n"}Express : 3400 Taka {"\n"}
            Super Express : 3400 Taka {"\n"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.menuText}>
            5 Year / 64 Page {"\n"}
            {"\n"}
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {" "}
            Regular : 3400 Taka {"\n"}Express : 3400 Taka {"\n"}
            Super Express : 3400 Taka {"\n"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.menuText}>
            10 Year / 48 Page {"\n"}
            {"\n"}
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {" "}
            Regular : 3400 Taka {"\n"}Express : 3400 Taka {"\n"}
            Super Express : 3400 Taka {"\n"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.menuText}>
            10 Year / 64 Page {"\n"}
            {"\n"}
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {" "}
            Regular : 3400 Taka {"\n"}Express : 3400 Taka {"\n"}
            Super Express : 3400 Taka {"\n"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ContentBlock}>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.menuText}>
            {" "}
            Regular {"\n"}
            {"\n"}
          </Text>
          <Text>
            {" "}
            5 Year / 48 Page : 3400 Taka {"\n"}5 Year / 64 Page : 3400 Taka{" "}
            {"\n"}
            10 Year / 48 Page : 3400 Taka {"\n"}
            10 Year / 64 Page : 3400 Taka{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.menuText}>
            5 Year / 64 Page {"\n"}
            {"\n"}
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {" "}
            Regular : 3400 Taka {"\n"}Express : 3400 Taka {"\n"}
            Super Express : 3400 Taka {"\n"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.menuText}>
            {" "}
            5 Year : 48 Page {"\n"}
            {"\n"}
          </Text>
          <Text> Regular : 3400 Taka </Text>
          <Text> Express: 3400 Taka </Text>
          <Text> Super Express : 3400 Taka </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.FeesBlock}>
          <Text style={styles.menuText}> Fees for BM </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ContentBlock}>
        <TouchableOpacity style={styles.FeesBlock}>
          <Text style={styles.menuText}> Student and Labour </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.block}>
          <Text style={styles.menuText}>
            {" "}
            Regular {"\n"}
            {"\n"}
          </Text>
          <Text>
            {" "}
            5 Year / 48 Page : 3400 Taka {"\n"}5 Year / 64 Page : 3400 Taka{" "}
            {"\n"}
            10 Year / 48 Page : 3400 Taka {"\n"}
            10 Year / 64 Page : 3400 Taka{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.menuText}>
            Express{"\n"}
            {"\n"}
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {" "}
            5 Year / 48 Page : 3400 Taka {"\n"}5 Year / 64 Page : 3400 Taka{" "}
            {"\n"}
            10 Year / 48 Page : 3400 Taka {"\n"}
            10 Year / 64 Page : 3400 Taka{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <Text style={styles.menuText}>
            {" "}
            Super Express {"\n"}
            {"\n"}
          </Text>
          <Text> 5 Year / 48 Page : 3400 Taka </Text>
          <Text> 5 Year / 64 Page : 3400 Taka </Text>
          <Text> 10 Year / 48 Page : 3400 Taka </Text>
          <Text> 10 Year / 64 Page : 3400 Taka </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ justifyContent: "center", alignItems: "center", height: 100 }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 10,
          }}
        >
          Passport Category
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {" "}
        <TouchableOpacity style={styles.five}>
          <MaterialCommunityIcons name={"book"} size={80} color={"red"} />
          <Text style={styles.menuText}>Red or Deplomatic </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.five}>
          <MaterialCommunityIcons name={"book"} size={80} color={"green"} />
          <Text style={styles.menuText}>Green or Ordinary </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.five}>
          <MaterialCommunityIcons name={"book"} size={80} color={"blue"} />
          <Text style={styles.menuText}>Blue Or Government Official </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          height: 400,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 40,
            }}
          >
            {" "}
            72{" "}
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Regional Passport Office (RPO){" "}
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 40,
            }}
          >
            {" "}
            43{" "}
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Bangladesh Mission (BM)
          </Text>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  ContentBlock: {
    flexDirection: "row",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  MenuBar: {
    backgroundColor: "#F7F7F7",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  block: {
    backgroundColor: "#FFFFFF",
    flex: 0.3,
    height: 150,
    margin: 5,
    padding: 10,
    borderRadius: 35,
    flexDirection: "column",

    alignItems: "center",
  },
  FeesBlock: {
    backgroundColor: "yellow",
    flex: 0.2,
    height: 50,
    margin: 5,
    padding: 10,
    borderRadius: 35,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  five: {
    backgroundColor: "#FFFFFF",
    flex: 0.3,
    height: 150,
    margin: 10,
    padding: 10,
    flexDirection: "column",
    borderColor: "black",
    // borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  blockHead: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HomePage;
