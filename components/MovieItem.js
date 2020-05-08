import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ShadowPropTypesIOS, Image, ScrollView } from "react-native";


const MovieItem=(props)=> {

    console.log("PROPSSSSS", props)
    if(props.navigation == undefined) {
        return(
            <View>
                <Text style={styles.listViewTitle}>{props.item.title}</Text>
            </View>
        )
    } else {
        return(
            <ScrollView>
                <View style={styles.MovieItemContainer}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w1280/${props.route.params.item.poster_path}`}} style={{height: 500, width: 400}}/>
                    <View style={styles.movieItemDetails}>
                        <Text style={styles.movieItemTitle}>{props.route.params.item.title}</Text>
                        <Text>{props.route.params.item.overview}</Text>
                    </View>
               </View>
            </ScrollView>
            
        )
    }
}

const styles = StyleSheet.create({
    MovieItemContainer: {
        flex: 1,
    },
    movieItemTitle: {
        fontFamily:'Courgette',
        fontSize: 20 

    },
    movieItemDetails: {
        justifyContent:"center",
        alignItems:"center"
    },
    listViewTitle: {
        fontFamily:'Courgette'
    },
    
})

export default MovieItem;

