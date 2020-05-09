import React from "react";
import { View, Text } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';





const StarRatingComponent =(props)=> {

    console.log("STARRRR COMPONENT!!!!!",props)
    console.log(props);

    return(
        <AirbnbRating
            count={10}
            defaultRating={props.rating}
            size={10}
            reviewSize={8}
        />
    )
}


export default StarRatingComponent;
