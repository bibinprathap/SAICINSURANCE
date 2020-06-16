import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import Panel from '../Panel';
import {PrimaryColor} from '../../config';
import DefaultText from '../DefaultText';
import { Picker, Icon } from 'native-base';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import PaymentMethod from '../PaymentMethod';
import RNPickerSelect from 'react-native-picker-select';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    // borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    // to ensure the text is never behind the icon
  },
});

class PaymentMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentOptions: "",
      currencyselected: "",
      currencyData: [
        {
          "ID": 5,
        "Country": "Iraq",
        "CurrencyCode": "IQD"
        },
      ],
      accountData: [
        {
          "ID": 1,
        "AccountCode": "11113444"
        },
        {
          "ID": 1,
        "AccountCode": "1234567"
        },
        {
          "ID": 1,
        "AccountCode": "987654321"
        },
        {
          "ID": 1,
        "AccountCode": "654345654"
        },
        {
          "ID": 1,
        "AccountCode": "2345678"
        },
      ]
    
    }
    this.placeholder = {
      label: 'Select a value',
      value: null,
    };
  }

  onValueChange(value) {
    this.setState({
      paymentOptions: value
    });
}
onCurrencyValueChange(value) {
  this.props.currencyValueChange(value);
}
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Panel header="Payment Method" maxItem={120}>
          <View style={{flex: 1}}>
            <View
              style={[
                styles.header,
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingLeft: 10,
                },
              ]}>
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons size={20} name="done" color="white" />
              </View>
              {/* <DefaultText style={{paddingLeft: 10}}>Bank Transfer</DefaultText> */}
              <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.state.paymentOptions}
                    onValueChange={this.onValueChange.bind(this)}
                  >     
                      <Picker.Item label="Cash" value="Cash" />           
                      <Picker.Item label="Bank Transfer" value="Bank Transfer" />            
                  </Picker>
            </View>
          </View>
        </Panel>
        {this.state.paymentOptions=="Bank Transfer" ?
        <Panel header="Bank Account Details" maxItem={640}>
          <View style={{flex: 1}}>
            <View style={[styles.header]}>
              <PaymentMethod
                title="Country"
                value="United Arab Emirates"
                nextIcon
                addNotes
                start>
                {/* <RNPickerSelect
                  placeholder={this.placeholder}
                  onValueChange={this.props.myCountryValueChange}
                  value={this.props.myCountry}
                  items={[
                    {label: 'India', value: 'India'},
                    {label: 'China', value: 'China'},
                    {label: 'USA', value: 'USA'},
                    {label: 'France', value: 'France'},
                    {label: 'England', value: 'England'},
                    {label: 'UAE', value: 'UAE'},
                  ]}
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 10,
                      right: 12,
                    },
                  }}
                /> */}
                  <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.props.currencyValue}
                    onValueChange={this.onCurrencyValueChange.bind(this)}
                    
                  >                
                       {this.props.countriesData.map((_ID, index) => (
                      <Picker.Item label={_ID.EName} value={index} />
                    ))}
                  </Picker>
              </PaymentMethod>
              <PaymentMethod title="IBAN" value="" addNotes start>
                <TextInput
                  placeholder="iBAN"
                  value={this.props.iBAN}
                  onChangeText={this.props.iBANValueChange}
                />
              </PaymentMethod>
              <PaymentMethod title="SWIFT/BIC" value="EBILAED" addNotes start>
                <TextInput
                  placeholder="SWIFT/BIC"
                  value={this.props.swiftBIC}
                  onChangeText={this.props.swiftBICValueChange}
                />
              </PaymentMethod>
              <PaymentMethod
                title="Account Number"
                value=""
                nextIcon
                addNotes
                start>
                {/* <RNPickerSelect
                  placeholder={this.placeholder}
                  value={this.props.accountNumber}
                  onValueChange={this.props.accountValueChange}
                  items={[
                    {label: '11113444', value: '1234567'},
                    {label: '1234567', value: '1234567'},
                    {label: '987654321', value: '987654321'},
                    {label: '654345654', value: '4565456'},
                    {label: '2345678', value: '2345678'},
                    {label: '8765432', value: '8765432'},
                  ]}
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 10,
                      right: 12,
                    },
                  }}
                /> */}
                <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.props.currencyValue}
                    onValueChange={this.onCurrencyValueChange.bind(this)}
                    
                  >                
                       {this.state.accountData.map((_ID, index) => (
                      <Picker.Item label={_ID.AccountCode} value={index} />
                    ))}
                  </Picker>

              </PaymentMethod>
              <PaymentMethod title="Account Name" value="" addNotes start>
                <TextInput
                  placeholder="Account Name"
                  value={this.props.accountName}
                  onChangeText={this.props.accountNameChange}
                />
              </PaymentMethod>

              <PaymentMethod
                title="Currency"
                value="AED"
                nextIcon
                addNotes
                start>
                {/* <RNPickerSelect
                  placeholder={this.placeholder}
                  value={this.props.myCurrency}
                  onValueChange={this.props.myCurrencyValue}
                  items={[
                    {label: 'Rupee', value: 'Rupee'},
                    {label: 'Dinar', value: 'Dinar'},
                    {label: 'Doller', value: 'Doller'},
                    {label: 'Euro', value: 'Euro'},
                    {label: 'Yen', value: 'Yen'},
                    {label: 'UAE', value: 'UAE'},
                  ]}
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 10,
                      right: 12,
                    },
                  }}
                /> */}
                   <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.props.currencyValue}
                    onValueChange={this.onCurrencyValueChange.bind(this)}
                    
                  >                
                       {this.props.currencyData.map((_ID, index) => (
                      <Picker.Item label={_ID.CurrencyCode} value={index} />
                    ))}
                  </Picker>
              </PaymentMethod>
              <PaymentMethod
                title="Bank Name"
                value="Punjab National Bank"
                addNotes
                start>
                <TextInput
                  placeholder="Bank Name"
                  value={this.props.bankName}
                  onChangeText={this.props.bankNameChange}
                />
              </PaymentMethod>
              <PaymentMethod
                title="Bank Address"
                value="BENYAS STREET,DEIRA"
                addNotes
                start>
                <TextInput
                  placeholder="Bank Address"
                  value={this.props.bankAddress}
                  onChangeText={this.props.bankAddressChange}
                />
              </PaymentMethod>
              <PaymentMethod title="Branch" value="" addNotes>
                <TextInput
                  placeholder="Branch Name"
                  value={this.props.branchName}
                  onChangeText={this.props.branchNameChange}
                />
              </PaymentMethod>
              <PaymentMethod title="City" value="DUBAI" addNotes>
                <TextInput
                  placeholder="City"
                  value={this.props.cityName}
                  onChangeText={this.props.cityNameChange}
                />
              </PaymentMethod>
              <PaymentMethod title="Phone" value="" addNotes>
                <TextInput
                  placeholder="Phone"
                  keyboardType="phone-pad"
                  returnKeyType="done"
                  value={this.props.phoneNumber}
                  onChangeText={this.props.phoneNumberChange}
                />
              </PaymentMethod>
              <PaymentMethod title="Email" value="" addNotes>
                <TextInput
                  keyboardType="email-address"
                  placeholder="Email"
                  value={this.props.emailName}
                  onChangeText={this.props.emailChange}
                />
              </PaymentMethod>
            </View>
          </View>
        </Panel>
        : 
        null
   }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    margin: 10,
  },

  textObj: {
    fontSize: normalizeFont(14),
    color: 'white',
    fontFamily: 'UberMoveText-Bold',
  },
  topContainer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PaymentMethods;
