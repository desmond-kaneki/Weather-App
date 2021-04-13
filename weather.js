import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Weather extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <View>
                <View >
                    <Icon size={72} name={icon[this.props.weath]} color={'#fff'} />
                    <Text style={styles.tempText}>{this.props.temp+" \u2103"}</Text>
                    <Text style={styles.title}>{this.props.weath}</Text>
                    <Text style={styles.title}>{this.props.city}</Text>
                </View>
                
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
	tempText: {
		fontSize: 48,
		color: '#fff'
	},
    headerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
    title: {
		fontSize: 48,
		color: '#fff'
	}
})