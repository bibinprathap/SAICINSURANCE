import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import DefaultText from '../../components/DefaultText';
import {PrimaryColor} from '../../config';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import Loginform from '../../components/Loginform';

import ForgetModal from '../../components/Modal/forgotpassword';

const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

export default class LoginScreen extends React.Component {
  state = {
    username: '',
    password: '',
    acceptPolicy: false,
    keepLogged: false,
    forgotPassword: false,
  };

  _loginHandler = () => {
    if (!this._validateForm()) {
      return false;
    }

    let details = {
      username: this.state.username,
      password: this.state.password,
    };
  };

  _validateForm = () => {
    if (this.state.username.trim() == '' || this.state.password.trim() == '') {
      alert('invalid username or password');
      return false;
    }

    return true;
  };

  handleSubmit = values => {
    Actions.homeScreen();
  };

  render() {
    const {username, password} = this.state;
    const {loading} = this.props;
    return (
      <View style={styles.screen}>
        <ForgetModal
          isVisible={this.state.forgotPassword}
          onBackdropPress={() => this.setState({forgotPassword: false})}
          hideModal={() => this.setState({forgotPassword: false})}
          title="FORGOT PASSWORD"
          iconName="work"
          subTitle="Please fill the following info"
          forgot
        />
        <KeyboardAvoidingView
          style={{flex: 1, justifyContent: 'center', width: '100%'}}
          keyboardVerticalOffset={54}>
          <Animatable.View
            animation="zoomIn"
            style={{
              flex: 0.7,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginHorizontal: 10,
            }}
            useNativeDriver>
            <Image
              source={require('../../assets/logo.png')}
              resizeMode="contain"
              style={{width: '100%', height: '50%', alignSelf: 'center'}}
            />
          </Animatable.View>
          <View style={{flex: 1}}>
            <View style={[styles.inputContainer]}>
              <Animatable.View
                animation="zoomInUp"
                delay={300}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                useNativeDriver>
                <TextInput
                  style={styles.inputStyle}
                  value={username}
                  onChangeText={text => this.setState({username: text})}
                  placeholderTextColor="#ccc"
                  placeholder="Username"
                  secureTextEntry={false}
                  underlineColorAndroid="transparent"
                />
              </Animatable.View>
            </View>
            <View style={styles.inputContainer}>
              <Animatable.View
                animation="zoomInUp"
                delay={300}
                style={{justifyContent: 'center', alignItems: 'center'}}
                useNativeDriver>
                <TextInput
                  style={styles.inputStyle}
                  value={password}
                  onChangeText={text => this.setState({password: text})}
                  placeholderTextColor="#ccc"
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                />
              </Animatable.View>
            </View>

            <Animatable.View
              style={{
                paddingHorizontal: '10%',
                flexDirection: 'row',
              }}
              animation="zoomInUp"
              delay={600}
              useNativeDriver>
              <TouchableOpacity
                onPress={() =>
                  this.setState(prevState => ({
                    acceptPolicy: !prevState.acceptPolicy,
                  }))
                }
                style={{
                  height: hp('1.5'),
                  width: hp('1.5'),
                  backgroundColor: this.state.acceptPolicy
                    ? PrimaryColor
                    : 'white',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  margin: 5,
                }}
              />
              <DefaultText>
                I have read and accept the{' '}
                <Text style={{color: PrimaryColor}}>Terms and condition</Text>{' '}
                and the{' '}
                <Text style={{color: PrimaryColor}}> Cookeis POlicy</Text>
              </DefaultText>
            </Animatable.View>
            <Animatable.View
              animation="zoomInUp"
              delay={600}
              style={{
                padding: 15,
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 5,
              }}
              useNativeDriver>
              <LinearGradient
                start={{x: 0.5, y: 0.0}}
                end={{x: 1.1, y: 1.1}}
                colors={['#4F107B', PrimaryColor]}
                style={styles.LinearGradient}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('app')}>
                  <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
              </LinearGradient>
            </Animatable.View>
            <Animatable.View
              style={{
                paddingHorizontal: '10%',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              animation="zoomInUp"
              delay={600}
              useNativeDriver>
              <TouchableOpacity
                onPress={() =>
                  this.setState(prevState => ({
                    keepLogged: !prevState.keepLogged,
                  }))
                }
                style={{
                  height: hp('1.5'),
                  width: hp('1.5'),
                  backgroundColor: this.state.keepLogged
                    ? PrimaryColor
                    : 'white',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  margin: 5,
                }}
              />
              <DefaultText>Keep Logged in</DefaultText>
            </Animatable.View>

            <Animatable.View
              style={{
                paddingHorizontal: '10%',
                paddingVertical: 20,
              }}
              animation="zoomInUp"
              delay={600}
              useNativeDriver>
              <DefaultText
                onPress={() => this.setState({forgotPassword: true})}
                style={{textAlign: 'center'}}>
                Forget Password
              </DefaultText>
            </Animatable.View>
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            height: hp('5'),
            width: '100%',
            backgroundColor: '#d35400',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <DefaultText
            onPress={() => this.props.navigation.navigate('Signup')}
            style={{textAlign: 'center', color: '#fff'}}>
            Not Yet Registerd ? <Text>REGISTER NOW</Text>
          </DefaultText>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  inputContainer: {
    width: '100%',
    height: 70,
    paddingLeft: 20,
    paddingRight: 20,
    // marginTop: 50
  },
  inputStyle: {
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    paddingVertical: 13,
    fontSize: normalizeFont(17),
    color: 'grey',
    width: '90%',
    paddingHorizontal: 15,
    fontFamily: Platform.OS == 'android' ? 'Roboto-Bold' : 'Roboto-Bold',
  },
  buttonContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  LinearGradient: {
    paddingVertical: 13,
    height: 50,
    width: '90%',
    elevation: 2,
    borderColor: '#FFFDE4',
    borderRadius: 6,
  },
  loginText: {
    textAlign: 'center',
    fontSize: normalizeFont(19),
    color: 'white',
  },
});

module.exports = LoginScreen;
