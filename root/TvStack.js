import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TvShows from "../screens/TvShows";
import TvItem from "../components/TvItem";
import Icon from 'react-native-vector-icons/Entypo';


const TvStack =({navigation})=> {

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }}}>
            <Stack.Screen options={{
                headerLeft: ()=> (<Icon.Button 
                    name="menu" 
                    size={35} 
                    color="tomato" 
                    backgroundColor="papayawhip" 
                    onPress={()=>navigation.openDrawer()}
                />),
                    headerTitleAlign:"center",
                    headerTitle: "Tully TV",
                    headerTitleStyle: {
                        fontFamily: "Yesteryear-Regular",
                        fontSize: 30,
                        color:"tomato"
                    }
                    }} name="TvShows" component={TvShows} />
                    <Stack.Screen name="TvItem" component={TvItem}/>
        </Stack.Navigator>
    )
}


export default TvStack;