import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const TabRoot=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} name="HomeScreen" component={HomeScreen} />
      <Tab.Screen options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}  name="FavoritesScreens" component={FavoritesScreen} />
         <Tab.Screen options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="folder-multiple" color={color} size={size} />
          ),
        }}  name="CategoriesScreens" component={CategoriesScreen} />
    </Tab.Navigator>
  );
}


export default TabRoot;