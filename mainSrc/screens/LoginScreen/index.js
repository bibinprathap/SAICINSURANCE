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
  ScrollView,
  Modal,
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

import {connect} from 'react-redux';
import {infoChanged} from '../../actions/loginActions';
import alertsHelper from '../../api/helperServices/alerts';
import strings, {
  alignment,
  normalizeFont,
} from '../../api/helperServices/language';
import HeaderGeneric from '../../components/Header/HeaderGeneric';
import ForgetModal from '../../components/Modal/forgotpassword';
import AppApi from '../../api/real'; 
import { environmentInfoChanged } from '../../actions/environmentActions';
import { storeLanguage } from '../../actions/languageActions';

import images from '../../images'; 
const api = new AppApi();

const {width, height} = Dimensions.get('screen');
// const normalizeFont = size => {
//   return size * (width * 0.0025);
// };

const emptyLoginScreenState = {
  username: '',
  password: '',
  acceptPolicy: false,
  keepLogged: false,
  forgotPassword: false,
};
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...emptyLoginScreenState,
      ...props.values,
      ...props.environment,
      settingsVisible: false,
    };
    this.updateLoginScreenState = this.updateLoginScreenState.bind(this);
  }
   
  updateLoginScreenState = (newState,env) => {
   // const {dispatch} = this.props;
    this.setState(newState, () => { 
      if(env)
      {
        const { title, baseURL } = this.state;
        const stateToStore = { title, baseURL };
        this.props.changeEnvironment(stateToStore);
      } else {
        const stateToStore = {...this.state};
        this.props.infoChanged('logindetails', stateToStore);
       // dispatch(infoChanged('logindetails', stateToStore));
      }
    });
  };

  handleFieldChange = async (name, value) => {
    const newState = {};
    newState[name] = value;
    this.updateLoginScreenState(newState);
  };
  handleFieldChangeEnv = async (name, value) => {
    const newState = {};
    newState[name] = value;
    this.updateLoginScreenState(newState, true);
  };
 
  _loginHandler =  async () => {
    if (!this._validateForm()) {
      return false;
    }
    let details = { ...this.state};
    alertsHelper.showAlert('Login', 'Checking User Information');
    try {
      debugger;
      this.props.navigation.navigate('app')
     // const pokemonApiCall = await fetch('https://adroitclouderpreport.ngrok.io/token');
     // const pokemon = await pokemonApiCall.json();
      await api.login({...details,grant_type:'password' });
      this.props.navigation.navigate('app')
    } catch (error) {
      console.log(error);
      //alertsHelper.hideAlert();
      this.props.navigation.navigate('app')
      alertsHelper.show('error', 'Login', 'Invalid Username Or Password');
    }
  };

  _validateForm = () => {
    if (this.state.username.trim() == '' || this.state.password.trim() == '') {
      //alert('invalid username or password');
      alertsHelper.show('error', 'Login', 'Invalid username or password');
      return false;
    }

    return true;
  };

  handleSubmit = values => {
    Actions.homeScreen();
  };

  render() {
    const {username, password, baseURL, title} = this.state;
    const {loading} = this.props;
    return (
      <View style={styles.screen}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.settingsVisible}
          onRequestClose={() => this.setState({settingsVisible: false})}>
          <HeaderGeneric
            backAction={() => this.setState({settingsVisible: false})}
            title="Settings"
          />
          <ScrollView style={styles.reconciliationWrapper}>
            <View style={styles.screen}>
              <KeyboardAvoidingView
                behavior="padding"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  width: '100%',
                  paddingHorizontal: hp('4'),
                }}>
                <Text
                  style={{
                    fontFamily: 'Lora-Bold',
                    textAlign: 'left',
                    fontSize: normalizeFont(21),
                  }}>
                  API Base URI
                </Text>
                <View style={{paddingVertical: hp('2')}}>
                  <View>
                    <View>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: normalizeFont(16),
                          color: PrimaryColor,
                          fontFamily: 'Roboto-Bold',
                          flexWrap: 'wrap',
                          paddingVertical: 15,
                          textAlign: alignment(this.props.language),
                        }}>
                        {'URI'}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: Platform.OS === 'ios' ? 30 : 45,
                        borderBottomColor: '#ddd',
                        borderBottomWidth: 1,
                      }}>
                      <TextInput
                        placeholder="Base Url"
                        placeholderTextColor="#ddd"
                        onChangeText={this.handleFieldChangeEnv.bind(
                          this,
                          'baseURL',
                        )}
                        value={baseURL}
                        style={{
                          fontSize: normalizeFont(18),
                          width: wp('80'),
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    <View>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: normalizeFont(16),
                          color: PrimaryColor,
                          fontFamily: 'Roboto-Bold',
                          flexWrap: 'wrap',
                          paddingVertical: 15,
                          textAlign: alignment(this.props.language),
                        }}>
                        {'Name'}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: Platform.OS === 'ios' ? 30 : 45,
                        borderBottomColor: '#ddd',
                        borderBottomWidth: 1,
                      }}>
                      <TextInput
                        placeholder="Title"
                        placeholderTextColor="#ddd"
                        onChangeText={this.handleFieldChangeEnv.bind(
                          this,
                          'title',
                        )}
                        value={title}
                        style={{
                          fontSize: normalizeFont(18),
                          width: wp('80'),
                        }}
                      />
                    </View>
                  </View>
                </View>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </Modal>

        <ForgetModal
          isVisible={this.state.forgotPassword}
          onBackdropPress={() => this.setState({forgotPassword: false})}
          hideModal={() => this.setState({forgotPassword: false})}
        />
        <KeyboardAvoidingView
          style={{flex: 1, justifyContent: 'center', width: '100%'}}
          keyboardVerticalOffset={54}>
          <Animatable.View
            animation="zoomInUp"
            delay={300}
            
            useNativeDriver>
                  <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.setState({ settingsVisible: true })}
          >
            <Image
              source={images.logo.content}
              resizeMode="contain"
              style={{width: '100%', height: '50%', alignSelf: 'center'}}
            />
             </TouchableOpacity>
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
                  onChangeText={this.handleFieldChange.bind(this, 'username')}
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
                  onChangeText={this.handleFieldChange.bind(this, 'password')}
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
                <TouchableOpacity onPress={this._loginHandler}>
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

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = state => {
  // Redux Store --> Component
  return {
    values: state.login.logindetails,
    language: state.language.defaultLanguage,
    environment: state.environmentReducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    infoChanged: (property,value) => dispatch(infoChanged(property,value)),
    changeLanguage: value => dispatch(storeLanguage(value)),
    changeEnvironment: value => dispatch(environmentInfoChanged(value)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
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

// module.exports = LoginScreen;
