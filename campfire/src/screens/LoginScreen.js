import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';
import { Button, Image, Divider } from 'react-native-elements';
import logo from '../assets/images/logo.png';
import { firebaseAuth } from '../utils/firebase';
import { asyncUserLogin } from '../actions/userActions';
import common from '../styles/common';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
  };

  handleLogin = () => {
    const { email, password } = this.state;
    this.props.asyncUserLogin(email, password)
      .then(() => {
        // Navigate to next page
        this.props.navigation.navigate('Main');
      })
      .catch(() => {
        console.log('WRONG PASSWORD');
        // TODO: maybe that shake thing when you enter the wrong login!
        // Handle incorrect password
      });
  }

  handlePasswordReset = () => {
    firebaseAuth.sendPasswordResetEmail(this.state.email).then(() => {
      // TODO: a version of this without alerts... see functionality of other apps (airbmb)
      Alert.alert('Success', 'Reset password email sent.');
    }).catch(() => {
      Alert.alert('Oops!', "Reset password email couldn't be sent.");
    });
  }

  render() {
    return (
      <View style={styles.frameContainer}>
        <View style={styles.formContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={logo}
            />
          </View>
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.email}
                onChangeText={newEmail => this.setState({ email: newEmail })}
              />
              <Divider style={{ height: 15, backgroundColor: 'transparent' }} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.password}
                onChangeText={newPassword => this.setState({ password: newPassword })}
              />
            </View>
            <Divider style={{ height: 25, backgroundColor: 'transparent' }} />
            <Button
              title="LOG IN"
              buttonStyle={styles.button}
              textStyle={{ fontWeight: 'bold', color: 'white' }}
              onPress={this.handleLogin}
            />
            {/* TODO: some kind of loading spinner... use redux or state if you're lazy */}
          </View>
          <View style={styles.textContainer}>
            <Text
              onPress={() => this.props.navigation.navigate('CreateAccount')}
              style={styles.text}
            >
              Create an Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  frameContainer: common.redContainer,
  formContainer: {
    height: 450,
    justifyContent: 'space-around',
  },
  logoContainer: {
    alignItems: 'center',
  },
  input: common.minimalistInput,
  button: common.minimalistButton,
  textContainer: {
    alignItems: 'center',
  },
  text: {
    ...common.text,
    ...common.textLink,
  },
});

const mapDispatchToProps = dispatch => ({
  asyncUserLogin: (email, password) => dispatch(asyncUserLogin(email, password)),
});

const mapStateToProps = ({ user }) => (
  {
    error: user.error,
    authed: user.authed,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
