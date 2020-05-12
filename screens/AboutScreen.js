import React from "react";
import { View, Text, StyleSheet, ImageBackground} from "react-native";
import TypeWriter from "../components/Typewriter"

const AboutScreen =()=> {
    return(
        <View style={styles.screen}>
            <ImageBackground style={{height:"100%", width: "100%"}} resizeMode="cover" source={require("../assets/images/park-at-night.jpg")}>
                <TypeWriter/>
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