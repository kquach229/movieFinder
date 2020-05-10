import React, { useState , useEffect} from "react";
import { View, Text, StyleSheet , FlatList, TouchableOpacity, Image} from "react-native";
import { Card } from 'native-base';
import axios from "axios";
import MovieItem from "./MovieItem";
import globalStyles from "../styles/globalStyles";

const TopRatedMovies = (props) => {
   
    const [topRatedMovies, setTopRatedMovies] = useState([]);
     useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${props.api_key}`);
            setTopRatedMovies(response.data.results);
        }
        fetchData();
    }, [])
    
    return(
        <View style={styles.screen}>
            <Text style={globalStyles.sectionHeaderFont}>Top Rated MOVIE</Text>
            <FlatList data={topRatedMovies} horizontal renderItem={({item})=> {
                return(
                    <View>
                        <TouchableOpacity onPress={()=> props.navigation.navigate("MovieItem", {item})}>
                            <Card style={{flexDirection:"row"}}>
                                <Image source={{uri:`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}} style={{height: 120, width: 100}}/>
                                    <View style={{padding: 10}}>
                                        <MovieItem item={item}/>
                                        <Text>{`Date of release: ${item.release_date}`}</Text>
                                    </View>
                            </Card>
                        </TouchableOpacity>
                    </View>
                )
            }}/>
        </View>
    )
}

const styles= StyleSheet.create({
    screen: {
        flex: 2/8,
        justifyContent:"center",
        alignItems:"flex-start"
    }
})

export default TopRatedMovies;