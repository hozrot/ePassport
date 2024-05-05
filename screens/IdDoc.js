import React, { useMemo, useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
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
function IdDoc({ navigation }) {
  const radioButtons = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Yes MRP',
      value: 'ordinary '
    },
    {
      id: '2',
      label: 'Yes ePP',
      value: 'official'
    },
    {
      id: '3',
      label: 'No',
      value: 'official'
    }
  ]), []);

  const [selectedId, setSelectedId] = useState();

  return (
    <ScrollView>
      <Header />
      <View style={styles.MenuBar}>
        <TouchableOpacity>
          <Text style={styles.menuText}>Home </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.menuText}>Apply Online  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>5 Step to e-Pasport  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}> Urgent Application   </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Instructions </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}> Passport Fees  </Text>
        </TouchableOpacity>
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
      <View style={{
        paddingLeft: 200
      }}>
        <Text style={{
          color: "#223e4b",
          fontSize: 30,
          marginBottom: 16,
          fontWeight: "bold",
        }}> Please fill in all required information step by step </Text>
      </View>
      <View style={{
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: 200
      }}>
        <View style={styles.sideBlock}>
          <TouchableOpacity onPress={() => navigation.navigate("PassportType")}>
            <Text style={styles.sidemenu}>Passport Type </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("PersonalInfo")}>
            <Text style={styles.sidemenu}>Parsonal Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AddressInfo")}>
            <Text style={styles.sidemenu}>Address </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'gray', }}>
            <Text style={styles.sidemenu}>ID Document  </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Parental Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Spouse Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Emergency Contact  </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Passport Option </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Delivary Option and Appionment  </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width: "80%",
          padding: 20
        }}>
          <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              fontWeight: "bold",
              padding: 20
            }}
          >
            ID Document
          </Text>
          <Text style={{
            fontWeight: "bold",
            paddingBottom: 10
          }}> Do you have any previous Passport?</Text>

          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout='row'
          />

          {selectedId == 1 && <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
            paddingTop: 10
          }}> ** Provide Your MRP data and Bring that passport while Enrollment  </Text>}
          {selectedId == 2 && <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
            paddingTop: 10
          }}> **  Provide Your ePP data and Bring that passport while Enrollment </Text>}
          {selectedId == 3 && <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
            paddingTop: 10
          }}> **  Do you have passport of other Countries </Text>}

          <Text style={{
            fontWeight: "bold",
            padding: 10,

          }}> Identification Information  </Text>

          <View style={styles.InputView}>
            <Text style={styles.InputTitle}> NID or BRC </Text>
            <TextInput
              placeholder="Enter yourIdentification no."
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <Button
            label="Save and Continue"
            onPress={() => navigation.navigate("ParentalInfo")}
          />

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
  InputTitle:{
    fontWeight: "bold",
    paddingBottom: 10,
  },
  InputView: {
    width: "40%",
    padding: 10
  },
  sidemenu: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    padding: 10
  },
  MenuBar: {
    backgroundColor: "#F7F7F7",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  menuText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default IdDoc;
