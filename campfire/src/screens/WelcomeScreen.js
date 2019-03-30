import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Campfire',
    };

    render() {
      debugger;
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Welcome!</Text>
          <Button
            title="Create an Account"
            onPress={() => this.props.navigation.navigate('CreateAccount')}
          />
          <Text>OR</Text>
          <Button
            title="Log In"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      );
    }
}
