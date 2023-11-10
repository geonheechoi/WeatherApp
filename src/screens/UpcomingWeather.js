import React from 'react'
import { SafeAreaView ,StyleSheet, FlatList,View,StatusBar,ImageBackground} from 'react-native'
import ListItem from '../components/ListItem'
    // Fix the indentation of the provided DATA object

const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({ item }) => (
        <ListItem 
            condition={item.weather[0].description} 
            dt_txt={item.dt_txt} 
            min={item.main.temp_min} 
            max={item.main.temp_max}
        />
    )
      const {container,image}=styles
    return (
        <SafeAreaView style={container}>
            
            <ImageBackground source ={require('../../assets/upcoming-background.jpg')} style={image}>
            <FlatList data={weatherData} renderItem={renderItem} keyExtractor={item => item.dt.toString()} />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
    },
   
    image:{
        flex:1
    }
})

export default UpcomingWeather;
