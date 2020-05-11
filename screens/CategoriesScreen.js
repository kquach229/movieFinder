import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";


const CategoriesScreen =()=> {

    const API_KEY2="54a83919a7f93d82a8b8bdd417544d6f";

    const [ genres, setGenres ] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY2}`);
            setGenres(response.data.genres);
        }
        fetchData();
    }, []);
    

    return(
        <View style={styles.screen}>
            <FlatList
                contentContainerStyle={styles.list}
                data={genres} 
                renderItem={({item})=> {
                return(
                <View style={styles.genreItem}>
                    <Text>{item.name}</Text>
                </View>
                )
            }} />
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"tomato"
    },
    genreItem: {
        flex: 1,
        height: 50,
    },
    list: {
       width: 300,
       paddingTop: 20
    }
})

export default CategoriesScreen;