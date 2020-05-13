import React, { useState } from "react";
import { View, Text, Button } from "react-native";



const FavoriteComponent =(props)=> {



    console.log("FAVORITES< ", props)

    const [favoriteMovies, setFavoriteMovies] = useState([])

    handleToggle=(movieTitle)=> {
        setFavoriteMovies(movieTitle);
        console.log("TOGGLLLEEEEEE", movieTitle);
    }
    
    return(
        <View>
            <Button title="toggle" onPress={()=> handleToggle(props.title) }/>
        </View>
    )
}


export default FavoriteComponent;