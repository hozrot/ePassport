# First need to install Node 
# then * npx create-expo-app appname
# * cd appname
# To run the project on the web, we need to install the following dependencies that will help to run the project on the web:
# * npx expo install react-dom react-native-web @expo/metro-runtime
# then import { NavigationContainer } from '@react-navigation/native';
# import { createNativeStackNavigator } from '@react-navigation/native-stack';
# and call const Stack = createNativeStackNavigator();
# the structure of navigation will be like 
# * <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
# * Also need to import import HomePage from './screens/HomePage';