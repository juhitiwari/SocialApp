import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class MessageScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text> MessageScreen </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
      }
})
