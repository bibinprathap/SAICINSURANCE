import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import RadioForm from 'react-native-simple-radio-button';
import Logo from '../../assets/logo.png';
import {connect} from 'react-redux';
import {storeLanguage} from './store/actions';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Verifiyed from '../../assets/Verifiyed.png';

const normalizedFont = size => {
  return size * (width * 0.0025);
};

class LanguageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      ...props.environment,
      settingsVisible: false,
      types: [{label: 'English', value: 0}, {label: 'Arabic', value: 1}],
    };
  }

  updateCreateScreenState = newState => {
    const {dispatch} = this.props;
    this.setState(newState, () => {
      const {title, baseURL} = this.state;
      const stateToStore = {title, baseURL};
      this.props.changeEnvironment(stateToStore);
      // dispatch(environmentInfoChanged(stateToStore));
    });
  };

  handleFieldChange = async (name, value) => {
    const newState = {};
    newState[name] = value;
    this.updateCreateScreenState(newState);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.Language, 'langage');
  }

  render() {
    const {baseURL, title} = this.state;
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity activeOpacity={0.9}>
            <Image style={styles.logoImage} source={Logo} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'space-around',
            flex: 1,
          }}>
          <Text
            style={{
              fontFamily: 'Lora-Bold',
              textAlign: 'center',
              fontSize: normalizedFont(28),
            }}>
            Choose Your Language
          </Text>
          <RadioForm
            radio_props={this.state.types}
            initial={0}
            style={{
              justifyContent: 'space-around',
              marginHorizontal: 30,
            }}
            formHorizontal={true}
            labelHorizontal={true}
            buttonWrapStyle={{marginLeft: 5}}
            buttonColor={'black'}
            selectedButtonColor={'black'}
            labelStyle={{fontSize: normalizedFont(16)}}
            buttonSize={15}
            animation={true}
            onPress={value => {
              this.setState({value: value}, () => {
                if (value === 0) {
                  this.props.changeLanguage('English');
                } else {
                  this.props.changeLanguage('Arabic');
                }
              });
            }}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              if (this.state.value === 0) {
                this.props.changeLanguage('English');
                this.props.navigation.navigate('auth');
              } else {
                this.props.changeLanguage('Arabic');
                this.props.navigation.navigate('auth');
              }
            }}>
            <Image style={styles.verifiedImage} source={Verifiyed} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reconciliationWrapper: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
  },
  logoImage: {
    width: hp('30'),
    height: hp('15'),
    resizeMode: 'contain',
  },
  verifiedImage: {
    width: hp('10'),
    height: hp('10'),
    resizeMode: 'contain',
  },
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

function mapStateToProps(state) {
  return {
    Language: state.language.defaultLanguage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: value => dispatch(storeLanguage(value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageScreen);
