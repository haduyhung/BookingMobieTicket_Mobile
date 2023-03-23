import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreens/Home';
import MovieScreen from '../screens/HomeScreens/Movie';
import FoodScreen from '../screens/HomeScreens/Movie';
import TicketScreen from '../screens/HomeScreens/Ticket';
import PersonalInfoScreen from '../screens/HomeScreens/PersonalInfo';
import LoginScreen from '../screens/AuthScreens/Login';
import RegisterScreen from '../screens/AuthScreens/Register';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Movie" component={MovieScreen} />
      <Tab.Screen name="Food" component={FoodScreen} />
      <Tab.Screen name="Ticket" component={TicketScreen} />
      <Tab.Screen name="PersonalInfo" component={PersonalInfoScreen} />
    </Tab.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthScreen"
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
