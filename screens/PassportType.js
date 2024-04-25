import React,{ useMemo, useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
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
//import { RadioButton } from "react-native-ui-lib";




export default function PassportType({ navigation }) {
  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Ordinary',
        value: 'ordinary'
    },
    {
        id: '2',
        label: 'Official',
        value: 'official'
    }
  ]), []);
  
  const [selectedId, setSelectedId] = useState();
  
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
        <View  style={{
           justifyContent:'center',
           alignItems:'center'
          }}>

          <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
        />
         {selectedId == 1  && <Text> Provide NOC/ Student Id / Tread Licence According to your profession  </Text>}
        {selectedId == 2  && <Text> Provide NOC or GO </Text>}
   
         
        </View>
     
        <Button
          label="Save and Continue"
          onPress={() => navigation.navigate("PersonalInfo")}
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