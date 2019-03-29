import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Alert,
} from 'react-native';
import { Button } from 'react-native-elements';
import { firebaseAuth } from '../utils/firebase';
import { asyncUserLogin } from '../actions/userActions';

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
        { /* TODO: maybe that shake thing when you enter the wrong login! */ }
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
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: 'https://www.natezeman.com/images/xl/0551_NZ_Sky_Dance_WM.jpg' }}
      >
        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Campfire</Text>
          </View>
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
          <Button
            title="LOG IN"
            buttonStyle={styles.button}
            textStyle={{ fontWeight: 'bold', color: 'white' }}
            onPress={this.handleLogin}
          />
          {/* TODO: link to create an account here */}
          {/* TODO: some kind of loading spinner... use redux or state if you're lazy */}

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    height: 200,
    justifyContent: 'space-around',
  },
  inputContainer: {
    height: 100,
    justifyContent: 'space-around',

  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    color: 'white',
    padding: 7,
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
  },
});

const mapDispatchToProps = dispatch => ({
  asyncUserLogin: (email, password) => dispatch(asyncUserLogin(email, password)),
});

const mapStateToProps = ({ error, authed }) => (
  {
    error,
    authed,
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
