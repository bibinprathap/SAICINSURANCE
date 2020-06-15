import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Header from '../../components/Header';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PrimaryColor, assetColor } from '../../config';
import AppApi from '../../api/real';
import DefaultText from '../../components/DefaultText';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { Radio } from 'react-native';
import { Picker, Icon } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};
const api = new AppApi();

class searchWithFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Select",
      providerType: [],
      location: [],
      serviceType: [],
      dataSource: [
        {
          "ID": 0,
          "EName": "None"
        },
        {
          "ID": 1,
          "EName": "IRAQ"
        },
        {
          "ID": 2,
          "EName": "BAHRAIN"
        },
        {
          "ID": 3,
          "EName": "IRAN"
        },

      ],
      providerData: [
        {
          "ID": 0,
          "Name": "None"
        },
      ],
      serviceData: [
        {
          "ID": 0,
          "Ename": "None"
        },
      ]
    };
  }
  onValueChange2(value) {
    this.setState({
      selected: value
    });
  }

  Providers = async() => { 
    try {
  const    data = await api.getProviders();
  this.setState({
    loading: false,
    providerData: data
  })
    } catch (error) {
      console.log(error); 
    }
  };

  ServiceType = async() => { 
    try {
  const    data = await api.getServiceType();
  this.setState({
    loading: false,
    serviceData: data
  })
    } catch (error) {
      console.log(error); 
    }
  };

  componentDidMount() {
    this.Providers();
    this.ServiceType();
  }
  render() {
    return (
      <View style={styles.screen}>
        <Header Back navigation={this.props.navigation} />
        <ScrollView contentContainerStyle={{ flex: 1 }}>

          <View style={styles.mainContainer}>
            <View
              style={{
                flex: 1,
              }}>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.headerText}>Beneficiary</Text>
              </View>
              <View style={[styles.borderContainer, { flex: 0.5 }]}>
                <View style={styles.rowContainer}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.state.selected}
                  >                
                      <Picker.Item label="My Self" value="My Self" />
                      <Picker.Item label="Dependent" value="Dependent" />
                  </Picker>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.headerText}>Provider Type</Text>
              </View>

              <View style={[styles.borderContainer, { flex: 0.5 }]}>
                <View style={styles.rowContainer}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.state.selected}

                  >
                    {this.state.providerData.map((_ID, index) => (
                      <Picker.Item label={_ID.Name} value={index} />
                    ))}

                  </Picker>
                </View>
              </View>
            </View>
            {/* <View
              style={{
                flex: 1,
              }}>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.headerText}>Location</Text>
              </View>
              <View style={[styles.borderContainer, { flex: 0.5 }]}>
              <View style={styles.rowContainer}>
              <Picker
              mode="dropdown"
              iosHeader="Select"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
              selectedValue={this.state.selected}
              
            >
                {this.state.dataSource.map((_ID, index) => (
         <Picker.Item label={_ID.EName} value={index} />
    ))}
             
            </Picker>
            </View>
              </View>
            </View> */}
            <View
              style={{
                flex: 1,
              }}>
              <View style={{ flex: 0.9 }}>
                <Text style={styles.headerText}>Date</Text>
              </View>
              <View style={[styles.dateContainer, { flex: 1 }]}>
                <RadioGroup style={styles.rowContainer}
                  size={19}
                  thickness={1}
                  color='#9575b2'
                  selectedIndex={0}
                >
                  <RadioButton value={'1 month ago'}  >
                    <Text>1 month ago</Text>
                  </RadioButton>

                  <RadioButton value={'2 month ago'}>
                    <Text>2 month ago</Text>
                  </RadioButton>

                  <RadioButton value={'3 month ago'}>
                    <Text>3 month ago</Text>
                  </RadioButton>
                </RadioGroup>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.headerText}>Claim Status</Text>
              </View>
              <View style={[styles.borderContainer, { flex: 0.5 }]}>
                <View style={styles.rowContainer}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.state.selected}
                  >      
                      <Picker.Item label="Pending" value="Pending" />          
                      <Picker.Item label="Submitted" value="Submitted" />
                      <Picker.Item label="Approved" value="Approved" />
                      
                  </Picker>
                </View>
              </View>
            </View>
            {/* <View
              style={{
                flex: 1,
              }}>
              <View style={{ flex: 0.9 }}>
                <Text style={styles.headerText}>Additinal Status</Text>
              </View>
              <View style={[styles.dateContainer, { flex: 1 }]}>
                <RadioGroup
                  style={styles.rowContainer}
                  size={19}
                  color='#9575b2'
                  selectedIndex={0}
                >
                  <RadioButton value={'Pending'}  >
                    <Text>Pending</Text>
                  </RadioButton>

                  <RadioButton value={'Not Used'}>
                    <Text>Not Used</Text>
                  </RadioButton>

                  <RadioButton value={'Declined'}>
                    <Text>Declined</Text>
                  </RadioButton>
                </RadioGroup>
              </View>
            </View> */}
            <View
              style={{
                flex: 1,
              }}>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.headerText}>Claim Type</Text>
              </View>
              <View style={[styles.borderContainer, { flex: 0.5 }]}>
                <View style={styles.rowContainer}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.state.selected}
                  >                
                      <Picker.Item label="Direct" value="Direct" />
                     
                  </Picker>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginBottom: 30
              }}>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.headerText}>Service Type</Text>
              </View>
              <View style={[styles.borderContainer, { flex: 0.5 }]}>
                <View style={styles.rowContainer}>

                  <Picker
                    mode="dropdown"
                    iosHeader="Select"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 14 }} />}
                    selectedValue={this.state.selected}

                  >
                    {this.state.serviceData.map((_ID, index) => (
                      <Picker.Item label={_ID.Ename} value={index} />
                    ))}

                  </Picker>
                </View>
              </View>
            </View>


          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Claim')}
          activeOpacity={0.9}
          style={{
            backgroundColor: PrimaryColor,
            height: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <DefaultText style={{ color: 'white', fontSize: 20 }}>
            <Text>APPLY FILTERS</Text>
          </DefaultText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
    color: PrimaryColor,
    fontSize: normalizeFont(14),
    paddingVertical: 10,
  },
  borderContainer: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5,
  },
  dateContainer: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5,
  },
  rowContainer: {
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  keyValue: {
    fontFamily: 'Roboto-Light',
    fontSize: normalizeFont(14),
  },
});

export default searchWithFilters;