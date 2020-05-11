import 'react-native-gesture-handler';
import React from"react";
import StackRoot from "./root/StackRoot";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutStack from './root/AboutStack';


const App =()=> {

  const Drawer = createDrawerNavigator();
  return(
      <NavigationContainer>
        <Drawer.Navigator drawerContentOptions={{activeTintColor: 'tomato'}} drawerStyle={{backgroundColor:"papayawhip"}}>
          <Drawer.Screen  options={{title:"Home"}} name="HomeScreen" component={StackRoot}/>
          <Drawer.Screen  options={{title: "About Tully Movies"}} name="AboutScreen" component={AboutStack}/> 
        </Drawer.Navigator>
      </NavigationContainer>
  )
}


export default App;