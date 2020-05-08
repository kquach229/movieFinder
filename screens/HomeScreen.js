import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground} from "react-native";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import LatestMovies from "../components/NowPlayingMovies";


const HomeScreen =({navigation})=> {
    const API_KEY1="69be92c192abcf1ad0768b2dc5245417";
    const API_KEY2="54a83919a7f93d82a8b8bdd417544d6f";

    
    return(
        <View style={styles.screen}>
            <ImageBackground source={require("../assets/images/admit.jpg")} style={styles.backgroundImage}>   
        <View>
                <LatestMovies navigation={navigation} api_key={API_KEY2} />
                <PopularMovies navigation={navigation} api_key={API_KEY2}/>
                <TopRatedMovies navigation={navigation} api_key={API_KEY2}/>  
        </View>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
})

export default HomeScreen;