import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import SearchBarComponent from "../components/SearchBarComponent";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import MovieItem from "../components/MovieItem";

const API_KEY2="54a83919a7f93d82a8b8bdd417544d6f";

class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            searchTerm: ""
        }
    }

    

    handleSubmit =(e)=> {
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY2}&query=${this.state.searchTerm}`)
            .then(data => data.json())
            .then(data=> {
                this.setState({
                    movies: [...data.results]
                })
            }) 
    }

    handleChange=(textToSearch)=> {
        this.setState({
            searchTerm: textToSearch
        });
        console.log(this.state.searchTerm)
    }
    render() {
        console.log("PROPSSSSSSS",this.props)
        return(
            <View style={styles.screen}>
                <TextInput 
                    style={styles.input}
                    onSubmitEditing={this.handleSubmit} 
                    onChangeText={(text)=>this.handleChange(text)} 
                    placeholder="Enter Movie" 
                    />
                    <FlatList 
                        data={this.state.movies} 
                        renderItem={({item})=> {
                            return(
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate("MovieItem", {item})}>
                                    <View style={styles.movieItem}>
                                        <Image source={{uri:`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}} 
                                                style={{
                                                    height: 120, 
                                                    width: 100
                                                }}/>
                                            <MovieItem item={item}/>
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
        borderWidth: 5, 
        width:"100%", 
        padding: 20,
        backgroundColor:"white"
    },
    movieItem: {
        margin: 10
    }
})


export default SearchScreen;