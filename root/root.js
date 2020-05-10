import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import AboutScreen from "../screens/AboutScreen";
import MovieItem from "../components/MovieItem";
import Icon from 'react-native-vector-icons/Entypo';


const Root =({navigation})=> {

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }}}>
            <Stack.Screen 
                name="HomeScreen" component={HomeScreen}
                options={{
                    headerTitleAlign:"center",
                    headerTitle: "Tully Movies",
                    headerTitleStyle: {
                        fontFamily: "Yesteryear-Regular",
                        fontSize: 30,
                        color:"tomato"
                    },
                    headerLeft: ()=> (
                        <Icon.Button 
                            name="menu" size={35} 
                            color="tomato" backgroundColor="papayawhip" 
                            onPress={()=>navigation.openDrawer()}
                        />)
                 }}/>
            <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
            <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
            <Stack.Screen name="MovieItem" component={MovieItem}/>
        </Stack.Navigator>
    )
}


export default Root;