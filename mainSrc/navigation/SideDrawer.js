import React from 'react';

import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const normalizeFont = size => {
  return size * (width * 0.0025);
};
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PrimaryColor} from '../config';
import {NavigationActions, StackActions} from 'react-navigation';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Login'})],
});

const datas = [
  {
    name: 'SAIC',
    route: 'Home',
    icon: 'error-outline',
    index: 0,
    key: [0],
  },
  {
    name: 'Settings',
    route: 'Settings',
    icon: 'brightness-high',
    index: 1,
    key: [1],
  },
  {
    name: 'Legal',
    route: 'Legal',
    icon: 'my-location',
    index: 2,
    key: [2],
  },
];

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      user_type: '',
      loaded: false,
    };
  }

  render() {
    var menus = datas;

    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          {menus.map((data, index) => (
            <View>
              <TouchableOpacity
                key={index}
                style={styles.buttonContainer}
                onPress={() => {
                  this.props.navigation.toggleDrawer();
                  this.props.navigation.navigate({
                    routeName: data.route,
                    key: data.index,
                    params: {
                      token: this.state.token,
                    },
                  });
                }}>
                <Icon
                  style={[
                    styles.searchIcon,
                    {
                      color:
                        data.name == 'SAIC'
                          ? PrimaryColor
                          : data.name == 'Settings'
                          ? 'orange'
                          : '#4F107B',
                    },
                  ]}
                  name={data.icon}
                  size={hp('3.5')}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color:
                        data.name == 'SAIC'
                          ? PrimaryColor
                          : data.name == 'Settings'
                          ? 'orange'
                          : '#4F107B',
                    },
                  ]}>
                  {data.name.toUpperCase()}
                </Text>
              </TouchableOpacity>
              <View style={styles.subTitleContainer}>
                <View style={{flex: 0.25}} />
                <View style={{flex: 1}}>
                  {data.name === 'SAIC' ? (
                    <Text style={styles.text}>About Us</Text>
                  ) : data.name === 'Settings' ? (
                    <Text style={styles.text}>Languages</Text>
                  ) : (
                    <Text style={styles.text}>Privacy Notice</Text>
                  )}
                  {data.name === 'SAIC' ? (
                    <Text style={styles.text}>Contact Us</Text>
                  ) : data.name === 'Legal' ? (
                    <Text style={styles.text}>Terms & Conditions</Text>
                  ) : null}
                  {data.name === 'SAIC' ? (
                    <Text style={styles.text}>FAQs</Text>
                  ) : data.name === 'Legal' ? (
                    <Text style={styles.text}>Cookies Policy</Text>
                  ) : null}
                </View>
              </View>
            </View>
          ))}
          <TouchableOpacity
            onPress={() => this.props.navigation.dispatch(resetAction)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 60,
              paddingLeft: hp('2'),
            }}>
            <Icon
              style={[styles.searchIcon, {color: 'red'}]}
              name="power-settings-new"
              size={hp('3.5')}
            />
            <Text
              style={[
                styles.text,
                {
                  fontSize: normalizeFont(16),
                  color: 'red',
                },
              ]}>
              LOGOUT
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: normalizeFont(16),
    marginLeft: 20,
    fontFamily: 'Roboto-Bold',
    paddingVertical: hp('1'),
    color: '#576574',
  },
  searchIcon: {
    alignSelf: 'center',
    color: '#22539F',
    borderRadius: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    paddingLeft: hp('2'),
  },
  subTitleContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
