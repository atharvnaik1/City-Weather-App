import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';
import { deviceHeight, deviceWidth } from './Dimensions';

export default Search = (props) => {
  const { name } = props.route.params;

  const [data, setData] = useState();

  useEffect(() => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then(res => {
      if (res || res.weather) {
        // Check if the necessary weather data is present in the response
        setData(res);
      } else {
        console.error('Invalid or missing weather data in the API response');
      }
    })
    .catch(err => {
      console.error('Error fetching data:', err);
    });
}, [name]);
   

  const Data = ({ title, value }) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{ color: 'gray', fontSize: 22 }}>{title}</Text>
      <Text style={{ color: 'white', fontSize: 22 }}>{value}</Text>
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image1.jpg')}
        style={{ height: deviceHeight, width: deviceWidth }}
        imageStyle={{ opacity: 0.6, backgroundColor: 'black' }}
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
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require('../assets/images/user.jpg')}
            style={{ height: 46, width: 46, borderRadius: 50 }}
          />
        </View>
        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <Text style={{fontSize: 22, color: 'white', textAlign:"center"}}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{color: 'white', fontSize: 64}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
            <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>Weather Details</Text>
            <View style={{width: deviceWidth - 60}}>
              <Data value={data['wind']['speed']} title="Wind" />
              <Data value={data['main']['pressure']} title="Pressure" />
              <Data value={`${data['main']['humidity']}%`} title="Humidity" />
              <Data value={data['visibility']} title="Visibility" />
            </View>
            </View>
          </View>
        ) : null}
        

      </View>
    </View>
  );
}