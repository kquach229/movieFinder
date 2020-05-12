import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import SearchScreen from "../screens/SearchScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TvShows from "../screens/TvShows";

const Tab = createBottomTabNavigator();

const TabRoot=()=> {
  return (
    <Tab.Navigator
        tabBarOptions={{style: {backgroundColor:"papayawhip"}}}>
      <Tab.Screen options={{
          tabBarLabel: 'Tv',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} name="TvShows" component={TvShows} />
    </Tab.Navigator>
  );
}


export default TabRoot;