import React from "react";
import { View, Text, StyleSheet} from "react-native";

const AboutScreen =()=> {
    return(
        <View style={styles.screen}>
            <Text>This is the AboutScreen</Text>
        </View>
    )
}


styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
    
})

export default AboutScreen;