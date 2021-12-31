import React,{Component} from 'react'
import {Text,View,StyleSheet, SafeAreaView,StatusBar,Platform,TouchableOpacity,Image,ImageBackground} from 'react-native'

export default class HomeScreen extends Component{
   render(){
       return(
           <View style={styles.container}>
               <SafeAreaView style={styles.SafeAreaViewStyle}/>
               <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
                   <Text style={styles.titleBar} >ISS Tracker App </Text>
                   <TouchableOpacity style={styles.buttonStyle} onPress={()=>
                this.props.navigation.navigate("issLocation")}>
                       <Text style={styles.textStyle}>ISS Location</Text>
                       <Text style={styles.knowMore}>{"Know more ----> "}</Text>
                       <Text style={styles.bgDigit}>1</Text>
                       <Image source={require('../assets/iss_icon.png')} style={styles.icon}></Image>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.buttonStyle} onPress={()=>
                this.props.navigation.navigate("meteor")
                   }>
                       <Text style={styles.textStyle}>Meteor</Text>
                       <Text style={styles.knowMore}>{"Know more ----> "}</Text>
                       <Text style={styles.bgDigit}>2</Text>
                       <Image source={require('../assets/meteor_icon.png')} style={styles.icon}></Image>
                   </TouchableOpacity>
                </ImageBackground>
           </View>
       )
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
        position:"relative",
        height:200,
        width:200,
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
    }
})