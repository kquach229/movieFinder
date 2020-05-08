import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from "react-native";
import PopularMovies from "../components/PopularMovies";

const HomeScreen =({navigation})=> {
    const API_KEY1="69be92c192abcf1ad0768b2dc5245417";
    const API_KEY2="54a83919a7f93d82a8b8bdd417544d6f";

    
    return(
        <View style={styles.screen}>
        <View>
            <TouchableOpacity>
                <PopularMovies navigation={navigation} api_key={API_KEY2}/>
            </TouchableOpacity>
        </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default HomeScreen;