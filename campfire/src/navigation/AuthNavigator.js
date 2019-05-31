import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import VerifyEmailScreen from '../screens/VerifyEmailScreen';

export default createStackNavigator(
  {
    Welcome: WelcomeScreen,
    CreateAccount: CreateAccountScreen,
    Login: LoginScreen,
    VerifyEmail: VerifyEmailScreen,
  },
  {
    initialRouteName: 'Login',
  },
);
