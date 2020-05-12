import React, { useState , useEffect} from "react";
import { View, Text, StyleSheet , FlatList, TouchableOpacity, Image} from "react-native";
import { Card } from 'native-base';
import axios from "axios";
import globalStyles from "../styles/globalStyles";
import TvItem from "./TvItem";

const PopularTv = (props) => {
   
    const [popularTv, setPopularTv] = useState([]);

     useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${props.api_key}&language=en-US&page=1`);
            setPopularTv(response.data.results);
            console.log("PopularTV!!!!!!", response.data.results)
        }
        fetchData();
    }, [])
    
    console.log("POPULARTVVVV!!!!!!", props.navigation.navigate)
    return(
        <View style={styles.screen}>
            <Text style={globalStyles.sectionHeaderFont}>Popular TV Shows</Text>
            <FlatList horizontal data={popularTv} renderItem={({item})=> {
                return(
                    <View>
                        <TouchableOpacity onPress={()=> props.navigation.navigate("TvItem", {item})}>
                            <Card style={{flexDirection:"row"}}>
                                <Image source={{uri:`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}} style={{height: 120, width: 100}}/>
                                <View style={{padding: 10}}>
                                    <TvItem item={item}/>
                                    <Text>{`First Aired: ${item.first_air_date}`}</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>
                )
            }} />
        </View>
    )
}


const styles= StyleSheet.create({
    screen: {
        marginTop: 30,
        flex: 2/8,
        justifyContent:"center",
        alignItems:"flex-start",
        padding: 10
        
    }
})

export default PopularTv;