import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    // fetch user ID from AsyncStorage on mount
    this.fetchUserIDAndNavigate();
  }

  // fetch the token from storage then navigate to our appropriate place
  fetchUserIDAndNavigate = async () => {
    const userToken = await AsyncStorage.getItem('userID');

    // if token is found, navigate to the main stack; otherwise, bring to authentication stack
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
