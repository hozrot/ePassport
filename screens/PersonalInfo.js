import React, { useMemo, useState } from "react";
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
import DatePicker from 'react-native-date-picker';
import RNDateTimePicker from 'react-native-ui-lib';
import { IndexPath, Layout, Select, SelectItem,Datepicker } from '@ui-kitten/components';
import { Dropdown } from 'react-native-element-dropdown';
import TextInput from "../component/TextInput";
import Button from "../component/Button";
import { Entypo as Icon } from "@expo/vector-icons";
const job = [
  { label: 'Government Job', value: '1' },
  { label: 'Private Job', value: '2' },
  { label: 'Business', value: '3' },
  { label: 'Student', value: '4' },
  { label: 'Others', value: '5' },

];
const gender = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
  { label: 'Other', value: '3' },
 

];


  

export default function PersonalInfo({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
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
       Personal  Info
      </Text>
      <View style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        
        flexDirection:'column',
        bottom:10
      }} >
        {/* <Dropdown
          style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={gender}
          labelField="label"
          valueField="value"
          placeholder={!isFocus2 ? 'Select your Gender' : '...'}
          value={value}
          onFocus={() => setIsFocus2(true)}
          onBlur={() => setIsFocus2(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus2(false);
          }}
            /> */}
       <TextInput
            
            placeholder="Enter your Given Name"
            autoCapitalize="none"
            autoCompleteType="name"
            keyboardType="text"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
           <TextInput
            
            placeholder="Enter your Sur  Name"
            autoCapitalize="none"
            autoCompleteType="name"
            keyboardType="text"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
           <TextInput
            
            placeholder="Enter your Full  Name"
            autoCapitalize="none"
            autoCompleteType="name"
            keyboardType="text"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={job}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select your current Profession' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
            />
            
             </View>
             {value == 1  && <Text>Need to provide Government NOC while Enrollment  </Text>}
             {value == 2  && <Text>Need to provide Official  NOC while Enrollment  </Text>}
             {value == 3  && <Text>Need to provide Tread Licence while Enrollment  </Text>}
             {value == 4  && <Text>Need to provide Student ID  while Enrollment  </Text>}
      <Button
        label="Save and Continue"
        onPress={() => navigation.navigate("AddressInfo")}
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
    dropdown: {
      height: 50,
      width:300,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      width:100
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });