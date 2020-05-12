import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteMoviesScreen from "../screens/FavoriteMoviesScreen";
import MovieItem from "../components/MovieItem";
import Icon from 'react-native-vector-icons/Entypo';
import MoviesTabRoot from "../root/MoviesTabRoot";

const MovieStackRoot =({navigation})=> {

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }}}>
            <Stack.Screen 
                name="HomeScreen" 
                component={MoviesTabRoot}
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
                            name="menu" 
                            size={35} 
                            color="tomato" 
                            backgroundColor="papayawhip" 
                            onPress={()=>navigation.openDrawer()}
                        />)
                 }}/>
            <Stack.Screen name="FavoriteMoviesScreen" component={FavoriteMoviesScreen} />
            <Stack.Screen name="MovieItem" component={MovieItem}/>
        </Stack.Navigator>
    )
}


export default MovieStackRoot;