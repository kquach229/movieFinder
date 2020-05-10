import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Carousel from "pinar";



const MovieCarousel =()=> {
    return(
        <Carousel style={styles.carouselContainer}>
            <View style={styles.slide1}>
                <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.slide2}>
                <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.slide3}>
                <Text style={styles.text}>3</Text>
            </View>
  </Carousel>
    )
    
}

const styles =  StyleSheet.create({
  carouselContainer: {
    height: 200
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84b59f"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69a297"
  },
  text: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 48,
    fontWeight: "bold"
  }
});


export default MovieCarousel;
