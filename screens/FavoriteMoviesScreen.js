import React from "react";
import { View, Text, StyleSheet} from "react-native";

const FavoriteMoviesScreen =(props)=> {
    console.log("FAVORITES SCREEN",props)
    return(
        <View style={styles.screen}>
            <Text>This is the FavoritesScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"tomato"
    }
})

export default FavoriteMoviesScreen;