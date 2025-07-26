import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

// TODO: Navigation Container

const stack = createNativeStackNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
 
      const uid = user.uid;
      setIsLoggedIn(true); // User is logged in
      console.log("User is logged in:", user.email);

      } else {
      setIsLoggedIn(false);
      console.log("User is logged out"); 
  }
});

  // TODO: research how to convert this code to use a useContext hook (better practice)

  }, []);

  return (
    <NavigationContainer>
      { isLoggedIn ? (
        // If user is logged in, show the main app screens
        <stack.Navigator>
          <stack.Screen name="Profile" component={ProfileScreen} />
          {/* Add other screens here */}
        </stack.Navigator>
      ) : (
        // If user is not logged in, show the auth screen
        <stack.Navigator>
          <stack.Screen name="Login" component={LoginScreen} />
        </stack.Navigator>
      )}
    </NavigationContainer>
  );
}


function createStackNavigator() {
  throw new Error('Function not implemented.');
}
// 1. Setup the navigation or when a user is logged out.
// 2. Setup the navigation or when a user is logged in.
// 3. Listen to wherther a user is logged in or not.