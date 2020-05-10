import 'react-native-gesture-handler';
import React from"react";
import { View, Text } from "react-native";
import Root from "./root/root";
import AboutScreen from "./screens/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";


const App =()=> {

  const Drawer = createDrawerNavigator();
  return(
      <NavigationContainer>
        <Drawer.Navigator drawerContentOptions={{activeTintColor: 'tomato',}} drawerStyle={{backgroundColor:"papayawhip"}}>
          <Drawer.Screen options={{title:"Home"}} name="HomeScreen" component={Root}/>
          <Drawer.Screen  options={{title:"About"}} name="AboutScreen" component={AboutScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
  )
}


export default App;