import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from "../screens/AboutScreen";
import Icon from 'react-native-vector-icons/Entypo';

const AboutStackRoot =({navigation})=> {

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
                    headerTitle: "Tully Movies",
                    headerTitleStyle: {
                        fontFamily: "Yesteryear-Regular",
                        fontSize: 30,
                        color:"tomato"
                    }
                    }} name="AboutScreen" component={AboutScreen} />
        </Stack.Navigator>
    )
}


export default AboutStackRoot;