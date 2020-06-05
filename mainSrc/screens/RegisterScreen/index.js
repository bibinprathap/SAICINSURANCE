import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
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
import DefaultText from '../../components/DefaultText';
import DatePicker from 'react-native-datepicker';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};
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
      dateInput: Today,
      acceptPolicy: false,
    };
  }

  submitAction = () => {
    const {CardNumber, Name, acceptPolicy} = this.state;
    if (!CardNumber.length || !Name.length) {
      alert('Complete form before Submit');
      return;
    }
    if (acceptPolicy == false) {
      alert('Accept the policy before submit');
      return;
    }

    Alert.alert('Successfully Created', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => this.props.navigation.goBack(),
      },
    ]);
  };
  render() {
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
              SKIP
            </Text>
          </View>
          <View style={{flex: 0.9}}>
            <View style={styles.titleContainer}>
              <Text style={styles.hiText}>HI</Text>
              <Text>Lets Gets Started</Text>
            </View>
            <View style={{flex: 0.8, paddingHorizontal: 20}}>
              <Text
                style={{
                  color: PrimaryColor,
                  fontFamily: 'Roboto-Bold',
                  fontSize: normalizeFont(16),
                }}>
                Identify Yourself
              </Text>

              <TextInput
                style={styles.inputStyle}
                onChangeText={text => this.setState({CardNumber: text})}
                placeholderTextColor="grey"
                placeholder="Card Number, National ID, Unique ID"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
              />

              <DatePicker
                style={[styles.inputStyle, {paddingVertical: 8}]}
                date={this.state.dateInput}
                mode="date"
                placeholder="select date"
                format="DD/MM/YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
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
              />

              <TextInput
                style={styles.inputStyle}
                onChangeText={text => this.setState({Name: text})}
                placeholderTextColor="grey"
                placeholder="Name"
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
                  <Text style={{color: PrimaryColor}}>Terms and condition</Text>{' '}
                  and the{' '}
                  <Text style={{color: PrimaryColor}}> Cookeis Policy</Text>
                </DefaultText>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={() => this.submitAction()}
          activeOpacity={0.8}
          style={styles.submitButton}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
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

export default Screen;
