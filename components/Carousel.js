import React, { useState, useEffect } from "react";
import Carousel from 'react-native-snap-carousel';
import { View , Text, Image } from "react-native";
import axios from "axios";



class MyCarousel extends React.Component {

   
    state = {
        entries: []
    }

   
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.api_key}`)
        .then(response=> this.setState({entries: response.data.results}))
        console.log(this.state.entries)
    }

    
    _renderItem ({item, index}) {
        return (
            <View>
               <Image source={{uri:`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}} style={{height: 220, width: 300}}/>
            </View>
        );
    }
    render() {
 
        console.log(this.state.entries)
        return (
            <Carousel
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={500}
              itemWidth={700}
              containerCustomStyle={{flexGrow: 0}}
              contentContainerCustomStyle={{ justifyContent:"center", alignItems:"center"}}
            />
        );
    }
}
   
export default MyCarousel;

