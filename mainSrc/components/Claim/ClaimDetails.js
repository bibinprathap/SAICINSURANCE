import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import Panel from '../Panel';
import {PrimaryColor} from '../../config';
import ClaimDetails from '../ClaimDetails';
import DatePicker from 'react-native-datepicker';
const {width, height} = Dimensions.get('screen');
import RNPickerSelect from 'react-native-picker-select';
import {Picker, Icon} from 'native-base';
import strings from '../../api/helperServices/language';
import AppApi from '../../api/real';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
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

const api = new AppApi();

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
      ...emptyLoginScreenState,  serviceselected: '',
      typeselected: '',
      currencyselected: '', 
        typeselected: "Dentel",
      currencyselected: "",  dataSource: [
        {
          ID: 0,
          EName: 'None',
        },
      ],
      providerData: [
        {
          ID: 0,
          Name: 'None',
        },
      ],
      serviceData: [
        {
          ID: 0,
          Ename: 'None',
        },
      ],
      currencyData: [
        {
          ID: 5,
          Country: 'Iraq',
          CurrencyCode: 'IQD',
        },
      ],
    };

    this.placeholder = {
      label: 'Select a value',
      value: null,
    };
    this.placeholderAR = {
      label: 'تحديد قيمة',
      value: null,
    };
  }
 
  Providers = async () => {
    try {
      const data = await api.getProviders();
      this.setState({
        loading: false,
        providerData: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  ServiceType = async () => {
    try {
      const data = await api.getServiceType();
      this.setState({
        loading: false,
        serviceData: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Currency = async () => {
    try {
      const data = await api.getCurrency();
      this.setState({
        loading: false,
        currencyData: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.Providers();
    this.ServiceType();
    this.Currency();
  }

  onValueChange(value) {
    this.setState({
      serviceselected: value,
    });
  }

  onTypeValueChange(value) {
    this.setState({
      typeselected: value,
    });
  }
  onCurrencyValueChange(value) {
    this.setState({
      currencyselected: value,
    });
  } 
  // Providers = async() => { 
  //   try {
  // const    data = await api.getProviders();
  // this.setState({
  //   loading: false,
  //   providerData: data
  // })
  //   } catch (error) {
  //     console.log(error); 
  //   }
  // };
  // ServiceType = async() => { 
  //   try {
  // const    data = await api.getServiceType();
  // this.setState({
  //   loading: false,
  //   serviceData: data
  // })
  //   } catch (error) {
  //     console.log(error); 
  //   }
  // };
  // Currency = async() => { 
  //   try {
  // const    data = await api.getCurrency();
  // this.setState({
  //   loading: false,
  //   currencyData: data
  // })
  //   } catch (error) {
  //     console.log(error); 
  //   }
  // };


  // componentDidMount() {
    
  //   this.Providers();
  //   this.ServiceType();
  //   this.Currency();
  // }

  onValueChange(value) {
        this.props.onSelectNumber(value);
  }

  onTypeValueChange(value) {
    this.props.serviceTypeChange(value);
}
onCurrencyValueChange(value) {
  this.props.currencyValueChange(value);
} 
render() {
    const {language} = this.props;
    return (
      <View>
        <Panel header={strings({key: 'ClaimDetails', language})} maxItem={300}>
          <View style={{flex: 1}}>
            <View style={styles.header}>
              <ClaimDetails title="Select Number" value="Myself" nextIcon>
    <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.props.selectNumberValue}
                    onValueChange={this.onValueChange.bind(this)}
                  >                
                      <Picker.Item label="97" value="97" />
                      <Picker.Item label="100" value="100" />
                      <Picker.Item label="101" value="101" />
                      <Picker.Item label="150" value="150" />
                      <Picker.Item label="200" value="200" />
                      <Picker.Item label="201" value="201" />
                      
                  </Picker> 
                {/* <RNPickerSelect
                  placeholder={this.placeholder}
                  onValueChange={this.props.selectNumber}
                  value={this.props.selectNumberValue}
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
                /> */}
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
                {/* <RNPickerSelect
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
                /> */} 
                  <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.props.serviceType}
                    onValueChange={this.onTypeValueChange.bind(this)}
                  >                
                        {this.props.serviceData.map((_ID, index) => (
                      <Picker.Item label={_ID.Ename} value={index} />
                    ))}
                  </Picker> 
              </ClaimDetails>
              <ClaimDetails
                title={strings({key: 'ServiceDate', language})}
                value="12-03-2020">
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
                  confirmBtnText={strings({key: 'Confirm', language})}
                  cancelBtnText={strings({key: 'Cancel', language})}
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
              <ClaimDetails
                title={strings({key: 'ClaimAccount', language})}
                value="200">
                <TextInput
                  placeholder="200"
                  returnKeyType="done"
                  keyboardType="numeric"
                  value={this.props.claimAccount}
                  onChangeText={this.props.claimAccountChange}
                />
              </ClaimDetails>
              <ClaimDetails title="Currency" value="AED" nextIcon>
                {/* <RNPickerSelect
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
              </ClaimDetails>
              <ClaimDetails
                title={strings({key: 'Addnotes', language})}
                value=""
                addNotes>
                <TextInput
                  placeholder={strings({key: 'Addnotes', language})}
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

const mapStateToProps = state => {
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(ClaimDetailScreen);
