import React, {useState, useEffect} from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Carousel from 'react-native-snap-carousel';
import axios from "axios";
import { Card } from "native-base";
import gloalStyles from "../styles/globalStyles";



const MyCarousel =({navigation})=> {

    const API_KEY2 = "69be92c192abcf1ad0768b2dc5245417";

    const [popularMovies, setPopularMovies] = useState([]);
     useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY2}`);
            setPopularMovies(response.data.results);
            console.log("AIRING TODAY:", response.data)
        }
        fetchData();
    }, [])

    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity onPress={()=> navigation.navigate("TvItem", {item})}>
                <Card>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}} style={styles.carouselImage} />
                    <Text style={styles.movieInfo}>{item.name}</Text>
                </Card>
        
            </TouchableOpacity>
        );
    }

        return (
            <View style={styles.slide}>
                <Text style={gloalStyles.sectionHeaderFont}>Airing Today</Text>
                    <Carousel
                        layout={'stack'} layoutCardOffset={`3`}
                        ref={(c) => { this._carousel = c; }}
                        data={popularMovies}
                        renderItem={this._renderItem}
                        sliderWidth={400}
                        itemWidth={180}
                    />
            </View>
           
        );
}


const styles = StyleSheet.create({
    carouselImage: {
        height: 300,
        width: 300
    },
    slide: {
        padding: 30
    },
    movieInfo: {
        width: "100%", 
        backgroundColor:"tomato",
        fontFamily:'Courgette',
        flex: 1
    }
   
})

   
export default MyCarousel;
    
