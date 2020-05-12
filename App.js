import 'react-native-gesture-handler';
import React from"react";
import MovieStackRoot from "./root/MovieStackRoot";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutStackRoot from './root/AboutStackRoot';
import TvStackRoot from "./root/TvStackRoot";


const App =()=> {

  const Drawer = createDrawerNavigator();
  return(
      <NavigationContainer>
        <Drawer.Navigator drawerContentOptions={{activeTintColor: 'tomato'}} drawerStyle={{backgroundColor:"papayawhip"}}>
          <Drawer.Screen  options={{title:"Tully Movies"}} name="HomeScreen" component={MovieStackRoot}/>
          <Drawer.Screen  options={{title: "Tully TV"}} name="TvShows" component={TvStackRoot}/>
          <Drawer.Screen  options={{title: "About Tully Movies"}} name="AboutScreen" component={AboutStackRoot}/>  
        </Drawer.Navigator>
      </NavigationContainer>
  )
}


export default App;