import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const API_KEY = '849338767c0e95025b5559533d26b7c4';
export default class Forecast extends Component{
    constructor(props){
        super(props)
    }
    state = {
            error:null,
            d1_tmax:null,
            d1_tmin:null,
            d1_wcond:null,
            d1_unix : null,
            d2_tmax:null,
            d2_tmin:null,
            d2_wcond:null,
            d2_unix : null,
            d3_tmax:null,
            d3_tmin:null,
            d3_wcond:null,
            d3_unix : null,
            d4_tmax:null,
            d4_tmin:null,
            d4_wcond:null,
            d4_unix : null,
            d5_tmax:null,
            d5_tmin:null,
            d5_wcond:null, 
            d5_unix : null,
            d6_tmax:null,
            d6_tmin:null,
            d6_wcond:null,
            d6_unix : null,

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

	fetchWeather(lat, lon) {
		fetch(
			 `https://api.openweathermap.org/data/2.5/onecall?lat=19.8762&lon=75.3433&exclude=current,minutely,hourly,alerts&appid=849338767c0e95025b5559533d26b7c4&units=metric`
		)
			.then(res => res.json())
			.then(json => {
                this.setState({
                    d1_tmax : json.daily[0].temp.max,
                    d1_tmin : json.daily[0].temp.min,
                    d1_wcond : json.daily[0].weather[0].main,
                    d1_unix : json.daily[0].dt,
                    d2_tmax : json.daily[1].temp.max,
                    d2_tmin : json.daily[1].temp.min,
                    d2_wcond : json.daily[1].weather[0].main,
                    d2_unix : json.daily[1].dt,
                    d3_tmax : json.daily[2].temp.max,
                    d3_tmin : json.daily[2].temp.min,
                    d3_wcond : json.daily[2].weather[0].main,
                    d3_unix : json.daily[2].dt,
                    d4_tmax : json.daily[3].temp.max,
                    d4_tmin : json.daily[3].temp.min,
                    d4_wcond : json.daily[3].weather[0].main,
                    d4_unix : json.daily[3].dt,
                    d5_tmax : json.daily[4].temp.max,
                    d5_tmin : json.daily[4].temp.min,
                    d5_wcond : json.daily[4].weather[0].main,
                    d5_unix : json.daily[4].dt,
                    d6_tmax : json.daily[5].temp.max,
                    d6_tmin : json.daily[5].temp.min,
                    d6_wcond : json.daily[5].weather[0].main,
                    d6_unix : json.daily[5].dt,
                })
                
			});
	}
    render(){
        var d1,d2,d3,d4,d5,d6,unix,date;

        unix = this.state.d1_unix
        date = new Date(unix*1000);
        d1 = date.toLocaleDateString();

        
        unix = this.state.d2_unix
        date = new Date(unix*1000);
        d2 = date.toLocaleDateString();

        
        unix = this.state.d3_unix
        date = new Date(unix*1000);
        d3 = date.toLocaleDateString();

        
        unix = this.state.d4_unix
        date = new Date(unix*1000);
        d4 = date.toLocaleDateString();

        
        unix = this.state.d5_unix
        date = new Date(unix*1000);
        d5 = date.toLocaleDateString();

        
        unix = this.state.d6_unix
        date = new Date(unix*1000);
        d6 = date.toLocaleDateString();

        return(
            <View style={styles.mainContainer}>
                <Card >
                <Card.Title>{d1}</Card.Title>
                    <Icon size={36} name={icon[this.state.d1_wcond]} color={'#fff'} />
                    <Text>{this.state.d1_tmax} {'\u2103'}</Text>
                    <Text>{this.state.d1_tmin} {'\u2103'}</Text>
                </Card>
                <Card >
                <Card.Title>{d2}</Card.Title>
                    <Icon size={36} name={icon[this.state.d2_wcond]} color={'#fff'} />
                    <Text>{this.state.d2_tmax} {'\u2103'}</Text>
                    <Text>{this.state.d2_tmin} {'\u2103'}</Text>
                </Card>
                <Card >
                <Card.Title>{d3}</Card.Title>
                    <Icon size={36} name={icon[this.state.d3_wcond]} color={'#fff'} />
                    <Text>{this.state.d3_tmax} {'\u2103'}</Text>
                    <Text>{this.state.d3_tmin} {'\u2103'}</Text>
                </Card>
                <Card >
                <Card.Title>{d4}</Card.Title>
                    <Icon size={36} name={icon[this.state.d4_wcond]} color={'#fff'} />
                    <Text>{this.state.d4_tmax} {'\u2103'}</Text>
                    <Text>{this.state.d4_tmin} {'\u2103'}</Text>
                </Card>
                <Card >
                <Card.Title>{d5}</Card.Title>
                    <Icon size={36} name={icon[this.state.d5_wcond]} color={'#fff'} />
                    <Text>{this.state.d5_tmax} {'\u2103'}</Text>
                    <Text>{this.state.d5_tmin} {'\u2103'}</Text>
                </Card>
                <Card >
                <Card.Title>{d6}</Card.Title>
                    <Icon size={36} name={icon[this.state.d6_wcond]} color={'#fff'} />
                    <Text>{this.state.d6_tmax} {'\u2103'}</Text>
                    <Text>{this.state.d6_tmin} {'\u2103'}</Text>
                </Card>
          </View>
        )
    }
}
const icon = {
    'Rain' : 'weather-rainy',
    'Clear' : 'weather-sunny',
    'Thunderstorm' : 'weather-lightning',
    'Clouds' : 'weather-cloudy',
    'Snow' : 'weather-snowy',
    'Mist' : 'weather-fog',
    'Haze' : 'weather-hail',
    'Drizzle' : 'weather-hail'
}
const styles = StyleSheet.create({
    mainContainer: {
          flex : 2,
          flexWrap: 'wrap',
          flexDirection: 'row'
    },
  })