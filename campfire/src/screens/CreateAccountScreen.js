import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {
  Button, Image, Divider,
} from 'react-native-elements';
import logo from '../assets/images/logo.png';
import common from '../styles/common';
import { isValidEmail, isUnusedEmail } from '../utils/helpers';
import { createUser } from '../actions/userActions';

class CreateAccountScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSignUp = () => {
    // TODO: handle invalid emails, previously used emails here
    // TODO: password requirements
    if (isValidEmail(this.state.email) && isUnusedEmail(this.state.email)) {
      createUser(this.state.email, this.state.password)
        .then(() => {
          // TODO: send verification email
        });
    }
  }

  render() {
    return (
      <View style={styles.frameContainer}>
        <View style={styles.formContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={logo}
              style={styles.logo}
            />
            <Text style={styles.titleText}>Create an Account</Text>
          </View>
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.username}
                onChangeText={newUsername => this.setState({ username: newUsername })}
              />
              <Divider style={{ height: 10, backgroundColor: 'transparent' }} />
              <TextInput
                style={styles.input}
                placeholder="College Email"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.email}
                onChangeText={newEmail => this.setState({ email: newEmail })}
              />
              <Divider style={{ height: 10, backgroundColor: 'transparent' }} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="white"
                autoCapitalize="none"
                secureTextEntry
                spellCheck={false}
                value={this.state.password}
                onChangeText={newPassword => this.setState({ password: newPassword })}
              />
              <Divider style={{ height: 10, backgroundColor: 'transparent' }} />
              <TextInput
                style={styles.input}
                placeholder="Re-Enter Password"
                placeholderTextColor="white"
                autoCapitalize="none"
                secureTextEntry
                spellCheck={false}
                value={this.state.confirmPassword}
                onChangeText={newConfirmPassword => this.setState({ confirmPassword: newConfirmPassword })}
              />
            </View>
            <Divider style={{ height: 25, backgroundColor: 'transparent' }} />
            <Button
              title="SIGN UP"
              buttonStyle={styles.button}
              textStyle={{ fontWeight: 'bold', color: 'white' }}
              onPress={this.handleSignUp}
            />
            {/* TODO: some kind of loading spinner... use redux or state if you're lazy */}
            <Divider style={{ height: 15, backgroundColor: 'transparent' }} />
            <View style={styles.textContainer}>
              <Text
                onPress={() => this.props.navigation.navigate('Login')}
                style={styles.text}
              >
                Log In
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createAccount: () => console.log('Great!'),
});

const styles = StyleSheet.create({
  frameContainer: common.redContainer,
  formContainer: {
    height: 500,
    justifyContent: 'space-around',
  },
  logoContainer: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
  },
  input: common.minimalistInput,
  button: common.minimalistButton,
  textContainer: {
    alignItems: 'center',
  },
  titleText: common.titleText,
  text: {
    ...common.text,
    ...common.textLink,
  },
});

export default connect(null, mapDispatchToProps)(CreateAccountScreen);
