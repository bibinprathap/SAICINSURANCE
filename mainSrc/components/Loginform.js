import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {
  View,
  Button,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import UserInput from './UserInput';

import usernameImg from '../assets/username.png';
import passwordImg from '../assets/password.png';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <Field
          name="username"
          component={UserInput}
          source={usernameImg}
          placeholder="Email"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: 50,
    width: '100%',
  },
});

export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
})(LoginForm);
