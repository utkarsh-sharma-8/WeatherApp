import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';
import { deviceHeight, deviceWidth } from './Dimension';

const Details = (props) => {
    const {name}=props.route.params;
    const[data,setData]=useState();
    useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name} &appid=${API_KEY}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(e=>console.log(e))
    },[])
    const Data=({title,value})=>
    <View style={styleSheet.DataView}>
      <Text style={styleSheet.DataText}>{title}</Text>
      <Text style={styleSheet.DataText}>{value}</Text>
    </View>
  return (
    <View>
      <View>
        <ImageBackground source={require('./images/background2.jpg')} style={styleSheet.image}/>
        <View style={styleSheet.menu_icon}>
            <Icon name='arrow-back-circle-outline' size={50} color='white' onPress={()=>props.navigation.goBack()} />
        </View>
      </View>
      {
        data?
        <View style={styleSheet.screen}>
          <View>
            <Text style={{fontSize:40,color:'white'}}>{name}</Text>
            <Text style={styleSheet.weatherText}>{data['weather'][0]['main']}</Text>
          </View>
          <Text style={styleSheet.tempText}>{(data['main']['temp']-273).toFixed(2)}&deg; C</Text>
          <Text style={{color:'white',fontSize:25}}>
            Weather Details
          </Text>
          <View style={{width:deviceWidth-60,}}>
            <Data value={data['wind']['speed']} title='Wind'/>
            <Data value={data['main']['pressure']} title='Pressure'/>
            <Data value={data['main']['humidity']} title='Humidity'/>
            <Data value={data['visibility']} title='Visibility'/>
          </View>
        </View> :null
      }
    </View>
  )
}
export default Details

const styleSheet= StyleSheet.create({
  image:{
      height:deviceHeight,
      width:deviceWidth,
      opacity:.8
  },
  menu_icon:{
      position:'absolute',
      paddingTop:20,
      flex:1,
      justifyContent:"space-between"
  },
  screen:{
    position:'absolute',
    marginTop:50,
    marginLeft:90,
    flexDirection:'column',
    justifyContent:'space-evenly',
    height:deviceHeight-100,
  },
  weatherText:{
    fontSize:25,
    color:'white',
  },
  tempText:{
    fontSize:45,
    color:'white',
  },
  DataView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginRight:70

  },
  DataText:{
    color:'white',
    fontSize:25
  }

})