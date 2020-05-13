import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import FavoriteMoviesScreen from "../screens/FavoriteMoviesScreen";
import SearchMoviesScreen from "../screens/SearchMoviesScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const MoviesTabRoot=()=> {
  return (
    <Tab.Navigator
        tabBarOptions={{style: {backgroundColor:"papayawhip"}}}>
      <Tab.Screen options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} name="HomeScreen" component={HomeScreen} />
         <Tab.Screen options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}  name="SearchMoviesScreen" component={SearchMoviesScreen} />
    </Tab.Navigator>
  );
}


export default MoviesTabRoot;