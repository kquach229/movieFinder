import React from "react";
import { View, Text, StyleSheet, ImageBackground} from "react-native";

const AboutScreen =()=> {
    return(
        <View style={styles.screen}>
            <ImageBackground style={{height:"100%", width: "100%"}} resizeMode="cover" source={require("../assets/images/park-at-night.jpg")}>
            <Text style={{color:"red"}}>This is the AboutScreen</Text>
            </ImageBackground>
           
        </View>
    )
}

styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"tomato"
        
    }
})

export default AboutScreen;