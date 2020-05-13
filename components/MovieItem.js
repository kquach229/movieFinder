import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import StarRatingComponent from "./StarRatingComponent";
import { Card } from "native-base";
import FavoriteComponent from "../components/FavoriteComponent";



const MovieItem=(props)=> {

    const isListView = props.navigation == undefined ? true : false;
    console.disableYellowBox = true;

    if(props.navigation == undefined) {
        return(
           <View style={{flexDirection:"column"}}>
               <View style={{flexDirection: 'row'}}>
                    <Text style={styles.listViewTitle}>{props.item.title}</Text>
               </View>
                <View style={styles.voteContainer}>
                    <StarRatingComponent isListView={isListView} rating={props.item.vote_average}/>
                    <Text style={styles.voteCount}>{`(${props.item.vote_average}/10)`}</Text>
                </View>
          </View>
        )
    } else {
        return(
            <ScrollView>
                <View style={styles.MovieItemContainer}>
                    {<Image source={{uri:`https://image.tmdb.org/t/p/w1280/${props.route.params.item.poster_path}`}} style={{height: 500, width: 420}}/>}
                    <View style={styles.movieItemDetails}>
                        <Card style={styles.card}>
                            <Text style={styles.movieItemTitle}>{props.route.params.item.title}</Text>
                            <View style={styles.movieItemSubinfo}>
                                <Text><Text style={styles.releaseDate}>Release date:</Text> {props.route.params.item.release_date}</Text>
                                <Text><Text style={styles.originalLanguage}>Original language:</Text> {props.route.params.item.original_language.toUpperCase()}</Text>
                            </View>
                            <Text>{props.route.params.item.overview}</Text>
                            <StarRatingComponent rating={props.route.params.item.vote_average}/>
                            <FavoriteComponent title={props.route.params.item.title} />
                        </Card>
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
        fontSize: 20 ,
        paddingBottom: 30,
        textDecorationLine:"underline",
        textDecorationStyle:"solid",
        fontWeight:"bold"

    },
    movieItemDetails: {
        justifyContent:"center",
        alignItems:"center",
        
    },
    movieItemSubinfo: {
        flexDirection: "column",
        padding: 5
    },
    listViewTitle: {
        fontFamily:'Courgette',
        width: 0,
        flexGrow: 1,
        marginBottom: -20
        
    },
    card:{
        padding: 20,
        backgroundColor: "tomato",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 270,
    },
    voteContainer: {
        flexDirection:"row",
        justifyContent: "flex-start",
        alignItems: "center"
        
    },
    voteCount: {
        fontSize:12,
        color: "grey",
        marginTop: 30
    },
    releaseDate: {
        fontWeight: "bold"
    },
    originalLanguage: {
        fontWeight:"bold"
    }

    
})

export default MovieItem;

