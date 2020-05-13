import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TvShows from "../screens/TvShows";
import SearchTvScreen from "../screens/SearchTvScreen";

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
         <Tab.Screen options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}  name="SearchTvScreen" component={SearchTvScreen} />
    </Tab.Navigator>
  );
}


export default TabRoot;