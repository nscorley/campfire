import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class VerifyEmailScreen extends React.Component {
    static navigationOptions = {
      title: 'Verify Email',
    };

    render() {
      debugger;
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Please verify your email.</Text>
        </View>
      );
    }
}
