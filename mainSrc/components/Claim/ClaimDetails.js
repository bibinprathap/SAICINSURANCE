import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import Panel from '../Panel';
import {PrimaryColor} from '../../config';
import ClaimDetails from '../ClaimDetails';
import DatePicker from 'react-native-datepicker';
const {width, height} = Dimensions.get('screen');
import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';
const normalizeFont = size => {
  return size * (width * 0.0025);
};
const emptyLoginScreenState = {
  selectNumber: '',
  country: '',
  acceptPolicy: false,
  keepLogged: false,
  forgotPassword: false,
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
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

class ClaimDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...emptyLoginScreenState,
    };
    this.placeholder = {
      label: 'Select a value',
      value: null,
    };
  }

  handleFieldChange = async (name, value) => {
    const newState = {};
    newState[name] = value;
    console.log(newState, 'NewState');
  };

  render() {
    return (
      <View>
        <Panel header="Claim Details" maxItem={300}>
          <View style={{flex: 1}}>
            <View style={styles.header}>
              <ClaimDetails title="Select Number" value="Myself" nextIcon>
                <RNPickerSelect
                  placeholder={this.placeholder}
                  onValueChange={this.props.selectNumber}
                  value={this.props.selectNumberValue}
                  modalViewBottom={{backgroundColor: 'yellow'}}
                  items={[
                    {label: '97', value: '97'},
                    {label: '100', value: '100'},
                    {label: '101', value: '101'},
                    {label: '150', value: '150'},
                    {label: '200', value: '200'},
                    {label: '201', value: '201'},
                  ]}
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 10,
                      right: 12,
                    },
                  }}
                />
              </ClaimDetails>
              {/* <ClaimDetails
                title="Healthcare Provider Country"
                value="United Arab Emirates"
                nextIcon>
                <RNPickerSelect
                  placeholder={this.placeholder}
                  onValueChange={this.props.countyValueChange}
                  value={this.props.countryValue}
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
              </ClaimDetails> */}
              <ClaimDetails title="Service type" value="Consultation" nextIcon>
                <RNPickerSelect
                  placeholder={this.placeholder}
                  onValueChange={this.props.serviceTypeChange}
                  value={this.props.serviceType}
                  items={[
                    {label: 'Consultaion', value: 'Consultaion'},
                    {label: 'Doctor', value: 'Docter'},
                    {label: 'Engineer', value: 'Engineer'},
                    {label: 'Merchant', value: 'Merchant'},
                    {label: 'Bussiness', value: 'Bussiness'},
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
              </ClaimDetails>
              <ClaimDetails title="Service Date" value="12-03-2020">
                {/* <TextInput
                  placeholder="12-03-2020"
                  value={this.props.serviceDate}
                  onChangeText={this.props.serviceDateChange}
                /> */}

                <DatePicker
                  date={this.props.serviceDate}
                  mode="date"
                  placeholder="select date"
                  format="DD-MM-YYYY"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      borderWidth: 0,
                      borderBottomWidth: 0,
                      alignItems: 'flex-end',
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
                  onDateChange={this.props.serviceDateChange}
                />
              </ClaimDetails>
              <ClaimDetails title="Claim Account" value="200">
                <TextInput
                  placeholder="200"
                  returnKeyType="done"
                  keyboardType="numeric"
                  value={this.props.claimAccount}
                  onChangeText={this.props.claimAccountChange}
                />
              </ClaimDetails>
              <ClaimDetails title="Currency" value="AED" nextIcon>
                <RNPickerSelect
                  placeholder={this.placeholder}
                  onValueChange={this.props.currencyValueChange}
                  value={this.props.currencyValue}
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
              </ClaimDetails>
              <ClaimDetails title="Add notes" value="" addNotes>
                <TextInput
                  placeholder="Add notes"
                  value={this.props.addNotes}
                  onChangeText={this.props.addNotesChange}
                />
              </ClaimDetails>
            </View>
          </View>
        </Panel>
      </View>
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
  Headercontainer: {
    height: 60,
    backgroundColor: PrimaryColor,

    paddingHorizontal: 15,
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

export default ClaimDetailScreen;
