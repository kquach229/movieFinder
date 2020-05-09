import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StarRatingComponent from "./StarRatingComponent";
import { ScrollView } from "react-native-gesture-handler";
import {Card} from "native-base";


const MovieItem=(props)=> {

    console.log("PROPSSSSS", props)
    if(props.navigation == undefined) {
        return(
           <View style={{flexDirection:"column"}}>
               <View style={{flexDirection: 'row'}}>
                    <Text style={styles.listViewTitle}>{props.item.title}</Text>
                </View>
                <View>
                    <StarRatingComponent rating={props.item.vote_average}/>
                </View>
              </View>
        )
    } else {
        return(
            <ScrollView>
                 <View style={styles.MovieItemContainer}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w1280/${props.route.params.item.poster_path}`}} style={{height: 500, width: 420}}/>
                    <View style={styles.movieItemDetails}>
                        <Card style={styles.card}>
                            <Text style={styles.movieItemTitle}>{props.route.params.item.title}</Text>
                            <Text>{props.route.params.item.overview}</Text>
                            <StarRatingComponent rating={props.route.params.item.vote_average}/>
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
        fontSize: 20 

    },
    movieItemDetails: {
        justifyContent:"center",
        alignItems:"center"
    },
    listViewTitle: {
        fontFamily:'Courgette',
        width: 0,
        flexGrow: 1,
        
    },
    card:{
        padding: 20,
        backgroundColor:"tomato",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        minHeight: 250
    }
    
})

export default MovieItem;

