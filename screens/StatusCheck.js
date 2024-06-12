import { StyleSheet, Text, View ,Image ,ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../component/Header';
import Banner from '../component/Banner';
import Footer from '../component/Footer';

export default function StatusCheck({navigation}) {
  return (
    <ScrollView >
        <Header/>
        <Banner/>
        <View style={styles.MenuBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
        <TouchableOpacity onPress={() => navigation.navigate("StatusCheck")}>
          <Text style={styles.menuText}> Check Status </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Contact </Text>
        </TouchableOpacity>
        
      </View>
        <View style={styles.container}>
      <View style={styles.Leftcontainer}>
        <Text> status </Text>

      </View>
      <View style={styles.Rightcontainer}>
      <Image
       style={{ resizeMode: 'stretch',
       width:500,
       height:500}}
        source={require("../assets/status.jpeg")}
      />
          <Text> Check status </Text>
      </View>
      </View>
      <Footer />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row',
        padding:20,
        margin:20
      },
      Leftcontainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
        padding:20,
        margin:20

      },
      Rightcontainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:20,
        margin:20

      },
      statusPic:{
        resizeMode: 'stretch',
        width:500,
        height:500
       


      },
      menuText: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 20,
      },
      MenuBar: {
        backgroundColor: "#F7F7F7",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
      },
})




// export default function StatusCheck({ navigation, route }) {
//   return (
//     <ScrollView style={styles.container}>
      
//     </ScrollView>
//   )
// }

