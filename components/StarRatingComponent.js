import React from "react";
import { Alert } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

const StarRatingComponent =(props)=> {

    const handleThankYou=(number)=> {
        Alert.alert("Thank You!", `You voted ${number}/10!`,{text: "ok"})
        console.log("rating", number)
    }

    const isEditable = props.isListView;

    if(props.isListView == true) {
        return(
            <AirbnbRating
            count={10}
            defaultRating={props.rating}
            size={10}
            reviewSize={10}
            isDisabled={isEditable}
        />
        )
    } else {
        return(
            <AirbnbRating
                onFinishRating={(number)=>handleThankYou(number)}
                count={10}
                defaultRating={props.rating}
                size={20}
                reviewSize={20}
                isDisabled={isEditable}
                reviews={["Terrible","Bad", "Poor", "Viewable", "Meh", "It's Alright", "Good", "Enjoyable", "Excellent", "Amazing!" ]}
            />
        )
    }
}


export default StarRatingComponent;
