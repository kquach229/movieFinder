import React, { Component } from 'react'
import AutoTypingText from 'react-native-auto-typing-text';
import {View, Text, StyleSheet} from "react-native"


const TypeWriter=()=> {

    
    const textObject = {text: `Tully Movie Database movie and TV database is a privately owned company developed by Kenny Quach. Every piece of data has been added by our amazing community dating back to 2008 and has received worldwide recognition. Our goal is to help educate and provide information on a wide variety of movies and tv shows. 
                        -Kenny Quach`}

    return(
        <View style={styles.screen}>
            <Text style={styles.headerText}>About Us</Text>
            <AutoTypingText
                text={textObject.text}
                charMovingTime={80}
                delay={0}
                style={{
                    fontSize: 30,
                    color: "white",
                    padding: 20,
                    fontFamily:"Yesteryear-Regular"
                }}
                onComplete={() => { console.log('done'); }}
                />
        </View>
    
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center"
    },
    headerText: {
        marginTop: 10,
        color: "white",
        fontSize: 30,
        textDecorationColor:"white",
        textDecorationStyle:"solid",
        textDecorationLine:"underline"
    }
})
   


export default TypeWriter;


