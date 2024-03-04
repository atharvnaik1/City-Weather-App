import { View, Text, ImageBackground,Image, TextInput,TouchableOpacity,
  FlatList, } from 'react-native'
import React,{useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';




export default function Home(props) {
  const[city,setCity]=useState("");
  
  const cities=[
    {
      name:'New Delhi',
      image:require('../assets/images/image3.jpg')
    },
    {
      name:'New York',
      image:require('../assets/images/image4.jpg')
    },
    {
      name:'London',
      image:require('../assets/images/image5.jpg')

    },
    {
      name:'New Jersey',
      image:require('../assets/images/image6.jpg')
    },
    {
      name:'San Francisco',
      image:require('../assets/images/image7.jpg')
    },
  ];
  return (

  <View>
    <ImageBackground source={require('../assets/images/image2.jpg')}
    style={{height: deviceHeight, width: deviceWidth}}
    imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
    />
   <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
  <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth-20,
          }}>
  <Icon name="menu" size={46} color="white" />
  <Image
            source={require('../assets/images/user.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
          </View>
  
  <View style={{paddingHorizontal: 20, marginTop: 100}}>
    <Text style={{fontSize: 40, color: 'white'}}>
    Hello User
  </Text>
  <Text style={{color: '#ffff99', fontSize: 22, fontWeight: 'bold'}}
  >Search:CityName
  </Text>
  <View  style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 16,
              paddingHorizontal: 10,
            }}  >
    <TextInput
     placeholder='Search City'
     placeholderTextColor="white"
     value={city}
     onChangeText={val =>setCity(val)}
    style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
    />
     <TouchableOpacity onPress={() => 
      {props.navigation.navigate('Search',{name:city})}}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>

  </View>
  <Text style={{color:'white',fontSize:22,paddingHorizontal:10}}
  >My Locations</Text>
   <FlatList
   horizontal 
   data={cities} 
   renderItem={({item})=>(
    <Cards name={item.name} image={item.image}
    navigation={props.navigation}
    />
  )}/>
    </View>
</View>
        </View>   
  
  );
}