import React,{Component} from "react";
import {Text,View,StyleSheet, SafeAreaView,StatusBar,Platform,TouchableOpacity,Image,ImageBackground, Alert} from 'react-native'
import Mapview,{Marker} from  'react-native-maps'
import axios from 'axios'
export default class IssLocationScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            location:{}
        }
    }
    getIssLocation=()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response=>{
            this.setState({
                location:response.data
            })
            .catch(error=>{
                Alert.alert(error.message())
            })
        })

    }
    componentDidMount(){
        this.getIssLocation()
    }
render(){
    if(Object.keys(this.state.location).length===0){
         return(<View><Text>Loading</Text></View>)
    }
    else{


    return(
     <View style={styles.container}>
         <SafeAreaView/>
         <ImageBackground source={require('../assets/iss_bg.jpg')} style={styles.backgroundImage}>
             <View><Text style={styles.titleBar} >ISS Location </Text>
             </View>
            <View style={styles.mapContainer}> <Mapview style={styles.map}
            region={{
                latitude:this.state.location.latitude,
                longitude:this.state.location.longitude,
                latitudeDelta:100,
                longitudeDelta:100
            }}>
                <Marker coordinate={{
                    latitude:this.state.location.latitude,
                    longitude:this.state.location.longitude}}>
                         <Image source={require('../assets/iss_icon.png')} style={styles.icon}>
                        </Image></Marker>
                </Mapview>
                 </View>
                 <View><Text>
                     latitude:{this.state.location.latitude}
                     longitude:{this.state.location.longitude}
                     altitude:{this.state.location.altitude}
                     velocity:{this.state.location.velocity}</Text></View>
         </ImageBackground>
     </View> 
    )
}
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    SafeAreaViewStyle:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center",
        color:"yellow",
        fontSize:40
    },
    buttonStyle:{
        flex:0.25,
        marginLeft:50,
        marginTop:50,
        marginBottom:50,
        marginRight:50,
        borderRadius:20,
        backgroundColor:"red"
    },

    textStyle:{
        color:"blue",
        fontWeight:"bold",
        fontSize:30,
        marginTop:75,
        paddingLeft:30
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    icon:{
  
        height:60,
        width:60,
        resizeMode:'contain',
        right:20,
        top:-80,
    },
    knowMore:{
        paddingLeft:30,
        color:"orange",
        fontSize:15,
    },
    bgDigit:{
        position:"absolute",
        color:"green",
        fontSize:200,
        right:20,
        bottom:-15,
        zIndex:-1
    },
    mapContainer:{
        flex:0.6
    },
    map:{
        width:"90%",
        height:"90%"
    }
})