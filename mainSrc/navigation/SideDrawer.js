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
import {connect} from 'react-redux';
import strings from '../api/helperServices/language';

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

const dataAr = [
  {
    name: 'سايك',
    route: 'Home',
    icon: 'error-outline',
    index: 0,
    key: [0],
  },
  {
    name: 'الإعدادات',
    route: 'Settings',
    icon: 'brightness-high',
    index: 1,
    key: [1],
  },
  {
    name: 'قانوني',
    route: 'Legal',
    icon: 'my-location',
    index: 2,
    key: [2],
  },
];

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      user_type: '',
      loaded: false,
    };
  }

  render() {
    const {language} = this.props;
    var menus = this.props.language === 'English' ? datas : dataAr;

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
                  {data.name === 'SAIC' || data.name === 'سايك' ? (
                    <Text style={styles.text}>
                      {strings({key: 'AboutUs', language})}
                    </Text>
                  ) : data.name === 'Settings' || data.name === 'الإعدادات' ? (
                    <Text style={styles.text}>
                      {' '}
                      {strings({key: 'Languages', language})}
                    </Text>
                  ) : (
                    <Text style={styles.text}>
                      {strings({key: 'PrivacyNotice', language})}
                    </Text>
                  )}
                  {data.name === 'SAIC' || data.name === 'سايك' ? (
                    <Text style={styles.text}>
                      {strings({key: 'ContactUs', language})}
                    </Text>
                  ) : data.name === 'Legal' || data.name === 'قانوني' ? (
                    <Text style={styles.text}>
                      {' '}
                      {strings({key: 'TermsConditions', language})}
                    </Text>
                  ) : null}
                  {data.name === 'SAIC' || data.name === 'سايك' ? (
                    <Text style={styles.text}>
                      {strings({key: 'FAQs', language})}
                    </Text>
                  ) : data.name === 'Legal' || data.name === 'قانوني' ? (
                    <Text style={styles.text}>
                      {strings({key: 'CookiesPolicy', language})}
                    </Text>
                  ) : null}
                </View>
              </View>
            </View>
          ))}
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('AuthLoading')}
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
              {strings({key: 'LOGOUT', language})}
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

const mapStateToProps = state => {
  // Redux Store --> Component
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(SideBar);
