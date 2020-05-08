import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import AboutScreen from "../screens/AboutScreen";
import MovieItem from "../components/MovieItem";
import PopularMovies from "../components/PopularMovies";


const Root =()=> {

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen options={{title:"DISCOVER"}} name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
            <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
            <Stack.Screen name="MovieItem" component={MovieItem}/>
        </Stack.Navigator>
    )
}


export default Root;