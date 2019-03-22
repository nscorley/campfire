import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  Alert,
} from 'react-native';
import {firebaseAuth} from '../utils/firebase'
import { Button } from 'react-native-elements'
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  state = { email: '', password: '' };
  
  static navigationOptions = {
    header: null,
  };

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
              onChangeText={(newEmail) => this.setState({ email: newEmail })}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              autoCapitalize="none"
              spellCheck={false}
              value={this.state.password}
              onChangeText={(newPassword) => this.setState({ password: newPassword })}
            />
          </View>
          <Button
            title='LOG IN'
            buttonStyle={styles.button}
            textStyle={{ fontWeight: 'bold', color: 'white' }}
            onPress={this.handleLogin}
          />
        </View>
      </ImageBackground>
    );
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(() => { Alert.alert("Success!", "You're all set.") })
      .catch(() => {
        Alert.alert("Login Failed!", "Incorrect Email/Password.",
          [
            { text: 'Send Reset Password Email', onPress: this.handlePasswordReset },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        );
      });
  }

  handlePasswordReset = () => {
    firebaseAuth.sendPasswordResetEmail(this.state.email).then(function () {
      Alert.alert("Success", "Reset password email sent.");
    }).catch(function (error) {
      Alert.alert("Oops!", "Reset password email couldn't be sent.");
    });
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
    //marginBottom: 40,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
  },
});
