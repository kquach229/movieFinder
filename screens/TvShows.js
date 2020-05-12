import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import PopularTv from "../components/PopularTv";
import MovieCarousel from "../components/MovieCarousel";
import { ScrollView } from "react-native-gesture-handler";


const TvShows =(props)=> {

    const API_KEY2 = "69be92c192abcf1ad0768b2dc5245417";

    console.log("TVPROPS",props)
    return(
        
        <ImageBackground source={require("../assets/images/tv.jpg")} style={styles.background}>
            <ScrollView>
            <MovieCarousel navigation={props.navigation}/>
                <PopularTv api_key={API_KEY2} navigation={props.navigation}/>
            </ScrollView>     
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