import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground ,ScrollView, SafeAreaView} from "react-native";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import LatestMovies from "../components/NowPlayingMovies";
import Carousel from "../components/Carousel";


const HomeScreen =({navigation})=> {
    
    const API_KEY2="54a83919a7f93d82a8b8bdd417544d6f";

    return(
        <ImageBackground source={require("../assets/images/admit.jpg")} style={styles.backgroundImage}>   
        <SafeAreaView style={styles.screen}>
        <ScrollView>
        <View style={styles.contentContainer}>
                <Carousel/>
                <View style={styles.flatlistContainer}>
                <LatestMovies navigation={navigation} api_key={API_KEY2} />
                <PopularMovies navigation={navigation} api_key={API_KEY2}/>
                <TopRatedMovies navigation={navigation} api_key={API_KEY2}/>  
                </View>
                
        </View>
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
 
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
    },
    flatlistContainer: {
        marginTop: 30
    }
})

export default HomeScreen;