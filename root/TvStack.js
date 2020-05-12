import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TvScreen from "../screens/TvShows";
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
                    }} name="TvScreen" component={TvScreen} />
        </Stack.Navigator>
    )
}


export default TvStack;