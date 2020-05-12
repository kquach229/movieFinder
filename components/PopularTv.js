import React, { useState , useEffect} from "react";
import { View, Text, StyleSheet , FlatList, TouchableOpacity, Image} from "react-native";
import { Card } from 'native-base';
import axios from "axios";
import globalStyles from "../styles/globalStyles";

const PopularTv = (props) => {

    const API_KEY2="54a83919a7f93d82a8b8bdd417544d6f";
   
    const [popularTv, setPopularTv] = useState([]);

     useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY2}&language=en-US&page=1`);
            setPopularTv(response.data.results);
            console.log("PopularTV!!!!!!", response.data.results)
        }
        fetchData();
    }, [])
    
    
    return(
        <View style={styles.screen}>
            <Text style={globalStyles.sectionHeaderFont}>Popular TV Shows</Text>
            <FlatList horizontal data={popularTv} renderItem={({item})=> {
                return(
                    <View>
                        <TouchableOpacity onPress={()=> props.navigation.navigate("MovieItem", {item})}>
                            <Card style={{flexDirection:"row"}}>
                                <Image source={{uri:`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}} style={{height: 120, width: 100}}/>
                                <View style={{padding: 10}}>
                                    <Text>{`Date of release: ${item.release_date}`}</Text>
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
        
    }
})

export default PopularTv;