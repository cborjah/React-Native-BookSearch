import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Featured extends Component {
    render() {
        return (
    	    <View style={styles.container}>
  	        <Text style={styles.description}>
          	  Featured Tab
  	        </Text>
    	    </View>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    fontSize: 20,
    backgroundColor: 'white'
  }
});

export default Featured;
