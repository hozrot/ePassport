import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  StatusBar,
  Linking
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Modal from "react-native-modal";
import TextTicker from "react-native-text-ticker";

import MarqueeText from "react-native-marquee";
function HomePage({ navigation }) {
  return (
    <ScrollView style={styles.Container}>
      <Header />
      <Banner />
      <View style={styles.MenuBar}>
        <TouchableOpacity>
          <Text style={styles.menuText}>Home </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.menuText}>Apply Online </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.menuText}>5 Step to e-Pasport  </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity>
          <Text style={styles.menuText}> Urgent Application   </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Instructions </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}> Passport Fees  </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.menuText}>Sign in </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.menuText}>Sing Up</Text>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Text style={styles.menuText}> Check Status </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Contact </Text>
        </TouchableOpacity>
        
      </View>
      <View
        style={{backgroundColor:"green"}}
      >
      <MarqueeText
          style={{ fontSize: 24 }}
          speed={.25}
          marqueeOnStart={true}
          loop={true}
          delay={1000}
         
        >
          <TouchableOpacity   onPress={() => Linking.openURL("https://www.epassport.gov.bd/landing/notices/156")}>
          <Text style={{color:'yellow'}} >   ** Enrolment of Biometric data for the Citizens older than 06 (six) years.
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.epassport.gov.bd/landing/notices/33")}>
          <Text style={{color:'white'}} >  ** List of functional e-Passport Offices
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.epassport.gov.bd/landing/notices/151")}>
          <Text style={{color:'blue'}} >  ** Temporary halt of 64 pages passport booklet delivery
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.epassport.gov.bd/landing/notices/34")}>
          <Text style={{color:'white'}} >  ** Documents need to be carried while enrolment at Passport offices.
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.epassport.gov.bd/landing/notices/39")}>
          <Text style={{color:'black'}} >  ** Guidelines for e-Passport application of government employees
        </Text>
        </TouchableOpacity>
       </MarqueeText>
     </View>
      

      <View
        style={{ justifyContent: "center", alignItems: "center", height: 100,}}
      >
        <Text
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          5 Step to Apply Passport
        </Text>
        
        {/* <TextTicker
         style={{ fontSize: 24 }}
         duration={30}
         loop
         bounce={false}
         shouldAnimateTreshold={40}
         repeatSpacer={50}
         marqueeDelay={10}
        >
         test tet setst ets te
        </TextTicker> */}
        
    
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 250,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            flex: 0.3,
            height: 150,
            margin: 10,
            padding: 10,
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              alignContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>1</Text>
          </View>
          <View style={styles.five}>
            <MaterialCommunityIcons
              name={"magnify-expand"}
              size={80}
              color={"green"}
            />
            <Text style={styles.menuText}>Check availability</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            flex: 0.3,
            height: 150,
            margin: 10,
            padding: 10,
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              alignContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>2</Text>
          </View>
          <View style={styles.five}>
            <MaterialCommunityIcons
              name={"playlist-edit"}
              size={80}
              color={"green"}
            />
            <Text style={styles.menuText}>e-Passport application </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            flex: 0.3,
            height: 150,
            margin: 10,
            padding: 10,
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              alignContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>3</Text>
          </View>
          <View style={styles.five}>
            <MaterialCommunityIcons
              name={"cash-check"}
              size={80}
              color={"green"}
            />
            <Text style={styles.menuText}> Pay passport fees </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            flex: 0.3,
            height: 150,
            margin: 10,
            padding: 10,
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              alignContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>4</Text>
          </View>
          <View style={styles.five}>
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
              <MaterialCommunityIcons
                name={"camera"}
                size={50}
                color={"green"}
              />
            </View>
            <Text style={styles.menuText}>Biometric enrolment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            flex: 0.3,
            height: 150,
            margin: 10,
            padding: 10,
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              alignContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>5</Text>
          </View>
          <View style={styles.five}>
            <MaterialCommunityIcons
              name={"passport-biometric"}
              size={80}
              color={"green"}
            />
            <Text style={styles.menuText}>Collect your e-Passport</Text>
          </View>
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
        <TouchableOpacity style={styles.five} onPress={() => navigation.navigate("Application")}>
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
          height: 300,
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
      <MarqueeText>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry and typesetting industry.
      </MarqueeText>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePage;
