import React, { useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';
import { deviceHeight, deviceWidth } from './Dimension';
const HomeScreen=()=>{
    const [city,setCity]=useState('')
    const cities=[
        {
            name:'New Delhi',
            image:require('./images/Background.jpg'),
        },
        {
            name:'London',
            image:require('./images/Background.jpg'),
        },
        {
            name:'New York',
            image:require('./images/Background.jpg'),
        },
        {
            name:'San Francisco',
            image:require('./images/Background.jpg'),
        },
        {
            name:'New Jersey',
            image:require('./images/Background.jpg'),
        },
    ]
    return (
        <View>
            <ImageBackground source={require('./images/background2.jpg')} style={styleSheet.image}/>
            <View style={styleSheet.menu_icon}>
                <Icon name='ellipsis-vertical' size={30} color='white' />
            </View>
            <View style={styleSheet.textinputView}>
                <TouchableOpacity>
                <Icon name='search' size={25} color='white' style={styleSheet.icon}/>
                </TouchableOpacity>
                <TextInput style={styleSheet.text} onChangeText={(val)=>setCity(val)} value={city} placeholder="Enter city name" placeholderTextColor={'white'}/>
                
            </View>
            <View style={styleSheet.mainLocation}>
                <Text style={styleSheet.mainLocText}>My Locations</Text>
                <FlatList 
                style={styleSheet.flatlist}
                data={cities} 
                horizontal
                renderItem={({item})=>(
                    <Cards name={item.name} image={item.image}/>
                )}/>
            </View>
        </View>
    )
}

export default HomeScreen;

const styleSheet= StyleSheet.create({
    image:{
        height:deviceHeight,
        width:deviceWidth,
        opacity:.7
    },
    menu_icon:{
        position:'absolute',
        paddingTop:20,
        flex:1,
        justifyContent:"space-between"
    },
    textinputView:{
        justifyContent:'space-between',
        flexDirection:'row-reverse',
        position:'absolute',
        padding:0,
        margin:50,
        marginTop:200,
        borderWidth:3,
        borderRadius:20,
        borderColor:'white',
        height:60,
        width:deviceWidth-100,
    },
    text:{
        padding:3,
        fontSize:20,
        color:'white',
    },
    icon:{
        padding:15,
    },
    mainLocText:{
        fontSize:35,
        color:'black',
    },
    mainLocation:{
        position:'absolute',
        marginTop:450,
        marginLeft:50,
    },
    flatlist:{
        marginRight:30,
    }
})