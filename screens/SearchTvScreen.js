import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import TvItem from "../components/TvItem";
    
const API_KEY2 = "69be92c192abcf1ad0768b2dc5245417";

class SearchTvScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shows: [],
            searchTerm: "",
        }
    }

    handleSubmit =(e)=> {

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY2}&query=${this.state.searchTerm}`)
            .then(data => data.json())
            .then(data=> {
                this.setState({
                    shows: [...data.results]
                });
                console.log("RESPONSE FROM THIS.STATE.SHOWSS", this.state.shows[0].poster_path)
                console.log("RESPONSE FROM THIS.STATE.shows.POSTER_PATH",this.state.shows.poster_path)
                
            }) 
                
    }

    handleChange=(textToSearch)=> {
        this.setState({
            searchTerm: textToSearch
        });
    }

    render() {
    
        return(

                <View style={styles.screen}>
                <TextInput 
                    style={styles.input}
                    onSubmitEditing={this.handleSubmit} 
                    onChangeText={(text)=>this.handleChange(text)} 
                    placeholder="Enter TV Show" 
                    />
                    <FlatList 
                        data={this.state.shows} 
                        renderItem={({item})=> {
                            return(
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate("TvItem", {item})}>
                                    <View style={styles.movieItem}>
                                        <Image source={{uri:`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}} 
                                            style={{
                                                height: 220, 
                                                width: 200
                                            }}/>
                                        <TvItem item={item}/>
                                    </View>
                                </TouchableOpacity>
                                )
                    }} />
            </View>
        )
    }
}
    

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor:"tomato",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },
    input: {
        borderStyle:"solid", 
        borderWidth: 1, 
        width:"100%", 
        padding: 20,
        backgroundColor:"white",
        fontFamily:"Yesteryear-Regular",
        fontSize: 20,
        color:"tomato",
        borderRadius: 2
    },
    movieItem: {
        marginTop: 20,
        marginBottom: 20
    },
    
})


export default SearchTvScreen;