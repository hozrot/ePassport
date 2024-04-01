import React, { useState } from "react";
import { View, StyleSheet, Text, DatePickerIOS } from "react-native";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TextInput from "../component/TextInput";
//const [chosenDate, setChosenDate] = useState(new Date());

//npx expo install @react-native-community/datetimepicker

import DateTimePickerModal from "react-native-modal-datetime-picker";
//npx expo install react-native-modal-datetime-picker @react-native-community/datetimepicker
import DateTimePicker from "@react-native-community/datetimepicker";
//npm install @react-native-community/datetimepicker --save
function ApplicationPage(props) {
    return (
        <View>
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
                    Please fill in all required information step by step in each section
                </Text>
                <View
                    style={{
                        padding: 32,
                        marginBottom: 16,
                        width: "25%",

                    }}
                >
                    <Text style={{ fontWeight: "bold", padding: 10, }} >
                        Date of Birth:
                    </Text>
                    <TextInput
                        icon="calendar"
                        placeholder="Enter your Date of Birth "
                        returnKeyType="next"
                    />
                    <Text style={{ padding: 10, color: 'red' }} >
                        # If age is less than 2 years , A 3R size photo need to submit during enrolment
                    </Text>

                    <Text style={{ fontWeight: "bold", padding: 10, }} >
                        NID no:
                    </Text>
                    <TextInput
                        icon="document"
                        placeholder="Enter your NID No. "
                        returnKeyType="next"
                    />
                    <Text style={{ padding: 10, color: 'red' }} >
                        # If age is greater than 18 Years you must have to give NID information {'\n'}
                    </Text>
                    <Text style={{ fontWeight: "bold", padding: 10, }} >
                        Birth Reg. No. :
                    </Text>
                    <TextInput
                        icon="news"
                        placeholder="Enter your BRC No."
                        returnKeyType="next"
                    />
                    <Text style={{ padding: 10, color: 'red' }} >

                        # If age is less than 18 Years you can give only BRC no.
                    </Text>
                    {/* <DatePickerIOS date={chosenDate} onDateChange={setChosenDate} /> */}
                    {/* <RNDateTimePicker mode="time" /> */}
                </View>
            </View>

            <Footer />
        </View>
    );
}
const styles = StyleSheet.create({});
export default ApplicationPage;
