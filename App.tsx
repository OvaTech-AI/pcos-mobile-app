/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorHomeScreen from './src/screens/DoctorPortal/DoctorHomeScreen';
import PatientDashboardScreen from './src/screens/DoctorPortal/PatientDashboardScreen';
import UltrasoundUploadPopupScreen from './src/screens/DoctorPortal/UltrasoundUploadPopupScreen';
import UltrasoundUploadedScreen from './src/screens/DoctorPortal/UltrasoundUploadedScreen';
import LoadingPage from './src/screens/DoctorPortal/LoadingScreen';
import UltrasoundPrediction from './src/screens/DoctorPortal/UltrasoundPrediction';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333333' : '#FFFFFF',
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator initialRouteName="DoctorHome">
          {/* <Stack.Screen
            name="DoctorHome"
            component={DoctorHomeScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="PatientDashboard"
            component={PatientDashboardScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="UltrasoundUploadPopup"
            component={UltrasoundUploadPopupScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="UltrasoundUploaded"
            component={UltrasoundUploadedScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="Loading"
            component={LoadingPage}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="UltrasoundPrediction"
            component={UltrasoundPrediction}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
