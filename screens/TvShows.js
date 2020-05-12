import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import PopularTv from "../components/PopularTv"


const TvShows =(props)=> {
    console.log("TVPROPS",props)
    return(
        <ImageBackground source={require("../assets/images/tv.jpg")} style={styles.background}>
            <PopularTv navigation={props.navigation}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    background: {
        flex: 1,
    }
})


export default TvShows;