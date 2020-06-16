import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {assetColor, PrimaryColor} from '../../config';
import AppApi from '../../api/real';
import DefaultText from '../../components/DefaultText';
import DatePicker from 'react-native-datepicker';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';
import strings from '../../api/helperServices/language';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};
const api = new AppApi();
let Today;
class Screen extends Component {
  constructor(props) {
    super(props);
    var today = new Date().toISOString().split('T')[0];
    var td = today
      .split('/')
      .reverse()
      .join('/');
    var tdd = td
      .split('/')
      .reverse()
      .join('/');
    Today = tdd
      .split('-')
      .reverse()
      .join('/');

    this.state = {
      CardNumber: '',
      YearOFBirth: '',
      Name: '',
      phoneNumber: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
      dateInput: Today,
      acceptPolicy: false,
    };
  }

  submitAction = async () => {
    const {
      CardNumber,
      Name,
      acceptPolicy,
      Email,
      PhoneNumber,
      Password,
      ConfirmPassword,
    } = this.state;

    if (!CardNumber.length || !Name.length) {
      alert('Complete form before Submit');
      return;
    }

    if (Password !== ConfirmPassword) {
      alert('Password and Confirm Password are not matched.');
      return;
    }
    if (acceptPolicy == false) {
      alert('Accept the policy before submit');
      return;
    }
    let details = {...this.state};
    const data = await api.signup({...details});
    if (data.Message == 'created sucessfully') {
      Alert.alert('Successfully Created', '', [
        {
          text: 'OK',
          onPress: () => this.props.navigation.goBack(),
        },
      ]);
    } else {
      alert(data.Message);
      return;
    }
  };
  render() {
    const {language} = this.props;
    return (
      <View style={styles.screen}>
        <KeyboardAvoidingView style={{flex: 1}} keyboardVerticalOffset={54}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icons
                size={hp('4')}
                style={{alignSelf: 'center'}}
                name="navigate-before"
                color="#A8A7A7"
              />
            </TouchableOpacity>

            <Text
              onPress={() => this.props.navigation.goBack()}
              style={styles.skipText}>
              {strings({key: 'SKIP', language})}
            </Text>
          </View>
          <View style={{flex: 0.9}}>
            <View style={styles.titleContainer}>
              <Text style={styles.hiText}>
                {' '}
                {strings({key: 'Hi', language})}
              </Text>
              <Text>{strings({key: 'LetsGetsStarted', language})}</Text>
            </View>
            <View style={{flex: 0.8, paddingHorizontal: 20}}>
              <ScrollView>
                <Text
                  style={{
                    color: PrimaryColor,
                    fontFamily: 'Roboto-Bold',
                    fontSize: normalizeFont(16),
                  }}>
                  {strings({key: 'IdentifyYourself', language})}
                </Text>

                <TextInput
                  style={styles.inputStyle}
                  onChangeText={text => this.setState({CardNumber: text})}
                  placeholderTextColor="grey"
                  placeholder="Card Number, National ID, Unique ID"
                  underlineColorAndroid="transparent"
                />

                {/* <DatePicker
                style={[styles.inputStyle, {paddingVertical: 8}]}
                date={this.state.dateInput}
                mode="date"
                placeholder="select date"
                format="DD/MM/YYYY"
                confirmBtnText={strings({key: 'Confirm', language})}
                cancelBtnText={strings({key: 'Cancel', language})}
                showIcon={false}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    borderBottomWidth: 0,
                    alignItems: 'flex-start',
                  },
                  placeholderText: {
                    fontSize: 17,
                    color: 'white',
                  },
                  dateText: {
                    fontFamily: 'Roboto-Bold',
                    fontSize: 17,
                    color: 'grey',
                  },
                }}
                onDateChange={date => {
                  this.setState({dateInput: date, loaded: false});
                }}
              /> */}

                <TextInput
                  style={styles.inputStyle}
                  onChangeText={text => this.setState({Name: text})}
                  placeholderTextColor="grey"
                  placeholder="Name"
                  underlineColorAndroid="transparent"
                />
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={text => this.setState({Email: text})}
                  placeholderTextColor="grey"
                  placeholder="Email"
                  underlineColorAndroid="transparent"
                />
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={text => this.setState({PhoneNumber: text})}
                  keyboardType="numeric"
                  placeholderTextColor="grey"
                  placeholder="Phone Number"
                  underlineColorAndroid="transparent"
                />
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={text => this.setState({Password: text})}
                  placeholderTextColor="grey"
                  secureTextEntry={true}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                />
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={text => this.setState({ConfirmPassword: text})}
                  placeholderTextColor="grey"
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                />
                <View style={{flexDirection: 'row', paddingRight: 5}}>
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
                      paddingRight: 10,
                    }}
                  />
                  <DefaultText>
                    I have read and accept the{' '}
                    <Text style={{color: PrimaryColor}}>
                      Terms and condition
                    </Text>{' '}
                    and the{' '}
                    <Text style={{color: PrimaryColor}}> Cookeis Policy</Text>
                  </DefaultText>
                </View>
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>

        <Button
          onPress={() => this.submitAction()}
          activeOpacity={0.8}
          style={styles.submitButton}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  skipText: {
    fontFamily: 'Roboto-Bold',
    color: assetColor,
    fontSize: normalizeFont(18),
  },
  titleContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hiText: {
    color: assetColor,
    fontSize: normalizeFont(35),
    fontFamily: 'Lora-Bold',
  },
  inputStyle: {
    marginVertical: 10,
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    paddingVertical: 13,
    fontSize: 18,
    color: '#ccc',
    width: '100%',
    paddingHorizontal: 15,
    fontFamily: Platform.OS == 'android' ? 'Roboto-Bold' : 'Roboto-Bold',
  },
  submitButton: {
    height: 50,
    width: '100%',
    backgroundColor: PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: normalizeFont(18),
    fontFamily: 'Roboto-Bold',
  },
});

const mapStateToProps = state => {
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(Screen);
