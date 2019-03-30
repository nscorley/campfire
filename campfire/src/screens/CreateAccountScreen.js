import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class CreateAccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Account',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Create an account. Stiven's a scrub.</Text>
      </View>
    );
  }
}
