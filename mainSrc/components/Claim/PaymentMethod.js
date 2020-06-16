import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import Panel from '../Panel';
import strings from '../../api/helperServices/language';
import {connect} from 'react-redux';
import DefaultText from '../DefaultText';
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
    this.placeholder = {
      label: 'Select a value',
      value: null,
    };
    this.placeholderAR = {
      label: 'تحديد قيمة',
      value: null,
    };
  }
  render() {
    const {language} = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Panel header={strings({key: 'PaymentMethod', language})} maxItem={120}>
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
              <DefaultText style={{paddingLeft: 10}}>
                {strings({key: 'BankTransfer', language})}
              </DefaultText>
            </View>
          </View>
        </Panel>

        <Panel
          header={strings({key: 'BankAccountDetails', language})}
          maxItem={640}>
          <View style={{flex: 1}}>
            <View style={[styles.header]}>
              <PaymentMethod
                title={strings({key: 'Country', language})}
                nextIcon
                addNotes
                start>
                <RNPickerSelect
                  placeholder={
                    language === 'English'
                      ? this.placeholder
                      : this.placeholderAR
                  }
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
                />
              </PaymentMethod>
              <PaymentMethod title="IBAN" value="" addNotes start>
                <TextInput
                  placeholder="iBAN"
                  value={this.props.iBAN}
                  onChangeText={this.props.iBANValueChange}
                />
              </PaymentMethod>
              <PaymentMethod title="SWIFT/BIC" addNotes start>
                <TextInput
                  placeholder="SWIFT/BIC"
                  value={this.props.swiftBIC}
                  onChangeText={this.props.swiftBICValueChange}
                />
              </PaymentMethod>
              <PaymentMethod
                title={strings({key: 'AccountNumber', language})}
                value=""
                nextIcon
                addNotes
                start>
                <RNPickerSelect
                  placeholder={
                    language === 'English'
                      ? this.placeholder
                      : this.placeholderAR
                  }
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
                />
              </PaymentMethod>
              <PaymentMethod
                title={strings({key: 'AccountName', language})}
                value=""
                addNotes
                start>
                <TextInput
                  placeholder={strings({key: 'AccountName', language})}
                  value={this.props.accountName}
                  onChangeText={this.props.accountNameChange}
                />
              </PaymentMethod>

              <PaymentMethod
                title={strings({key: 'Currency', language})}
                nextIcon
                addNotes
                start>
                <RNPickerSelect
                  placeholder={
                    language === 'English'
                      ? this.placeholder
                      : this.placeholderAR
                  }
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
                />
              </PaymentMethod>
              <PaymentMethod
                title={strings({key: 'BankName', language})}
                addNotes
                start>
                <TextInput
                  placeholder={strings({key: 'BankName', language})}
                  value={this.props.bankName}
                  onChangeText={this.props.bankNameChange}
                />
              </PaymentMethod>
              <PaymentMethod
                title={strings({key: 'BankAddress', language})}
                value="BENYAS STREET,DEIRA"
                addNotes
                start>
                <TextInput
                  placeholder={strings({key: 'BankAddress', language})}
                  value={this.props.bankAddress}
                  onChangeText={this.props.bankAddressChange}
                />
              </PaymentMethod>
              <PaymentMethod
                title={strings({key: 'Branch', language})}
                value=""
                addNotes>
                <TextInput
                  placeholder={strings({key: 'Branch', language})}
                  value={this.props.branchName}
                  onChangeText={this.props.branchNameChange}
                />
              </PaymentMethod>
              <PaymentMethod
                title={strings({key: 'City', language})}
                value="DUBAI"
                addNotes>
                <TextInput
                  placeholder={strings({key: 'City', language})}
                  value={this.props.cityName}
                  onChangeText={this.props.cityNameChange}
                />
              </PaymentMethod>
              <PaymentMethod
                title={strings({key: 'Phone', language})}
                value=""
                addNotes>
                <TextInput
                  placeholder={strings({key: 'Phone', language})}
                  keyboardType="phone-pad"
                  returnKeyType="done"
                  value={this.props.phoneNumber}
                  onChangeText={this.props.phoneNumberChange}
                />
              </PaymentMethod>
              <PaymentMethod
                title={strings({key: 'Email', language})}
                value=""
                addNotes>
                <TextInput
                  keyboardType="email-address"
                  placeholder={strings({key: 'Email', language})}
                  value={this.props.emailName}
                  onChangeText={this.props.emailChange}
                />
              </PaymentMethod>
            </View>
          </View>
        </Panel>
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

const mapStateToProps = state => {
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(PaymentMethods);
