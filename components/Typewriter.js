import React, { Component } from 'react'
import TypeWriter from 'react-native-typewriter'
import {View} from "react-native"


const Typer=()=> {
    return(
        <View>
            <TypeWriter typing={4}>Hello World!</TypeWriter>
        </View>
    
    )
}
   


export default Typer;