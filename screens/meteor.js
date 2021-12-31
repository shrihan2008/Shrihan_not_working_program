import React,{Component} from 'react'
import {Text,View,StyleSheet, SafeAreaView,StatusBar,Platform,TouchableOpacity,Image,ImageBackground} from 'react-native'
import axios from "axios"
export default class MeteorScreen extends Component{
    constructor(props){
        super(props)
        this.state={meteors:{}}
    }
    getMeteorData=()=>{
        axios
        .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=T7qd61ua7x988YGzRvBTJjkmbi8ZgwSCOg2Hawee")
        .then(response=>{
            this.setState({
                meteors:response.data.near_earth_objects
            })
            .catch(error=>{
                Alert.alert(error.message())
            })
        })

    }

    componentDidMount(){
        this.getMeteorData()
    }
render(){
    if(Object.keys(this.state.meteors).length===0){
        return(<View><Text>Loading.....</Text></View>)
   }
   else{
       let meteors_arr=Object.keys(this.state.meteors).map(meteors_date=>{
           return this.state.meteors[meteors_date]
       })
       let meteors=[].concat.apply([],meteors_arr)

       meteors.forEach(function (element) { 
           let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max) / 2
            let threatScore = (diameter / element.close_approach_data[0].miss_distance.kilometers) * 1000000000
             element.threat_score = threatScore; });
    return(
        <View>
            <Text style={{color:"yellow"}}>Metoer Screen</Text>
        </View>
    )
}
}
}
// T7qd61ua7x988YGzRvBTJjkmbi8ZgwSCOg2Hawe api key