import React from "react";
import { View, Text, ListView } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

const StarRatingComponent =(props)=> {

    const isEditable = props.isListView;

    if(props.isListView == true) {
        return(
            <AirbnbRating
            count={10}
            defaultRating={props.rating}
            size={10}
            reviewSize={2}
            isDisabled={isEditable}
            reviews={["Terrible","Bad", "Poor", "Viewable", "Meh", "It's Alright", "Good", "Enjoyable", "Excellent", "Amazing!" ]}
        />
        )
    } else {

    return(
        <AirbnbRating
            count={10}
            defaultRating={props.rating}
            size={20}
            reviewSize={2}
            isDisabled={isEditable}
            reviews={["Terrible","Bad", "Poor", "Viewable", "Meh", "It's Alright", "Good", "Enjoyable", "Excellent", "Amazing!" ]}
        />
    )
    }
}


export default StarRatingComponent;