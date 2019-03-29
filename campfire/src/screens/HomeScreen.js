import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Settings',
    };

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    }
}
