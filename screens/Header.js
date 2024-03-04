import * as React from 'react';
import { Appbar,Title } from 'react-native-paper';
import {View,Text}from 'react-native'
const MyComponent = (props) => {
 
  return (
    <Appbar.Header
     theme={{
        colors:{
        primary:"#8c7d37",
        
        }
        
     }}
     style={{flexDirection:"row",justifyContent:"center"}}
     >
      {/* <Title style={{color:"white"}}>
          {props.name}
      </Title> */}
     
      <Title style={{color:"orange"}}>{props.name}</Title>
     
    </Appbar.Header>
  );
};

export default MyComponent;