import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { deviceHeight, deviceWidth } from './Dimension';
const Cards=({name,image,navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Details',{name})}>
                <ImageBackground source={image} style={styleSheet.imageBackground} imageStyle={{borderRadius:20}}/>
                <View style={styleSheet.textView}>
                    <Text style={styleSheet.text}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Cards;

const styleSheet=StyleSheet.create({
    imageBackground:{
        height:deviceHeight/5,
        width:deviceWidth/2-50,
        padding:1,
        margin:5,
    },
    text:{
        fontSize:20,
        textAlign:'center',
        textAlignVertical:'center',
        color:'white',
        height:'100%',
        width:'100%',
    },
    textView:{
        position:'absolute',
        height:'100%',
        width:'100%',
    }
})