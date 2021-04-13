import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Weather from './weather'
import Forecast from './forecast'

const API_KEY = '849338767c0e95025b5559533d26b7c4';
const cloudy = { uri: "https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-sunny-sky-sunny-blue-sky-white-clouds-background-skywhite-cloudsbackground-image_85793.jpg" };
const rainy = {uri : "https://freedesignfile.com/upload/2018/03/Rainy-background-vector.jpg"};
const thunderstorm = {uri : "https://i.pinimg.com/originals/f6/88/b7/f688b74c09ed2f0804dea2620b43a378.jpg"};
const clear = {uri : "https://www.uidownload.com/files/827/76/24/sunny-blue-sky-background-vector.jpg"};
const snow = {uri : "https://media.istockphoto.com/videos/snow-falling-on-blue-sky-with-cloud-in-the-winter-christmas-stock-video-id1165249275?b=1&k=6&m=1165249275&s=640x640&h=2y6rx6yj9ekXgaIEmNstZ1sYdaRPNVnYqhvF_X0rWKQ="};
const haze = {uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FNdCmbsTJEpQhsN-NsmAiwTr1dJzcw6lg&usqp=CAU"};
const mist = {uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FNdCmbsTJEpQhsN-NsmAiwTr1dJzcw6lg&usqp=CAU"}; 
export default class App extends Component {
	state = {
		isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error : null,
    city : null,
	};
  componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			position => {
				this.fetchWeather(position.coords.latitude, position.coords.longitude);
			},
			error => {
				this.setState({
					error: 'Error Getting Weather Conditions'
				});
			}
		);
	}

	fetchWeather(lat = 25, lon = 25) {
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
		)
			.then(res => res.json())
			.then(json => {
				this.setState({
					temperature: json.main.temp,
					weatherCondition: json.weather[0].main,
					isLoading: false,
          city : json.name,
				});
			});
	}
  
	render() {
    var image;
        if(this.state.weatherCondition=='Rain')
            image = rainy
        if(this.state.weatherCondition=='Clear')
            image = clear
        if(this.state.weatherCondition=='Thunderstorm')
            image = thunderstorm
        if(this.state.weatherCondition=='Clouds')
            image = cloudy
        if(this.state.weatherCondition=='Snow')
            image = snow
        if(this.state.weatherCondition=='Drizzle'||this.state.weatherCondition=='Haze')
            image = haze
        if(this.state.weatherCondition=='Mist')
            image = mist
		return (
			<SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.headerContainer}><Weather temp={this.state.temperature} weath={this.state.weatherCondition} city={this.state.city}></Weather></View>
          <View style={styles.headerContainer}><Forecast></Forecast></View>
        </ImageBackground>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection: "column"
  },
	welcome: {
		fontSize: 20,
		textAlign: 'left',
		margin: 10,
	},
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  bodyContainer: {
		flex: 2,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		paddingLeft: 25,
		marginBottom: 40
	},
  headerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})