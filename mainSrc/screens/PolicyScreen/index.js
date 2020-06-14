import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Header from '../../components/Header';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-ionicons';

import {PrimaryColor, assetColor} from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import strings from '../../api/helperServices/language';
import ProfileImg from '../../assets/src_assets_profile.png';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

class PolicyScreen extends Component {
  render() {
    const {language} = this.props;
    return (
      <View style={styles.screen}>
        <Header
          Back
          navigation={this.props.navigation}
          Heading={strings({key: 'PolicyDetails', language})}
        />
        <View
          style={{
            position: 'absolute',
            height: 65,
            right: 0,
            width: 40,
            justifyContent: 'center',
          }}>
          <Icon name="refresh-circle" color="white" size={hp('3')} />
        </View>

        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.mainContainer}>
            <View>
              <Text style={styles.headerText}>
                {strings({key: 'PolicyDetails', language})}
              </Text>

              <View
                style={{
                  width: '100%',
                  height: 100,
                  backgroundColor: 'white',
                  shadowColor: '#515151',
                  shadowOffset: {width: 0, height: 1},
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                }}>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>
                    {strings({key: 'PolicyHolderName', language})}
                  </Text>
                  <Text style={styles.keyValue}>Rjij raju</Text>
                </View>

                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>
                    {' '}
                    {strings({key: 'PolicyisValidUntil', language})}
                  </Text>
                  <Text style={styles.keyValue}>10/05/1992</Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.headerText}>
                {' '}
                {strings({key: 'InsuranceCompanyDetails', language})}
              </Text>

              <View
                style={{
                  width: '100%',
                  height: 200,
                  backgroundColor: 'white',
                  shadowColor: '#515151',
                  shadowOffset: {width: 0, height: 1},
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                }}>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>
                    {' '}
                    {strings({key: 'Name', language})}
                  </Text>
                  <Text style={styles.keyValue}>Rjij raju</Text>
                </View>

                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>
                    {strings({key: 'MaillingAddress', language})}
                  </Text>
                  <Text style={styles.keyValue}>Nassima@gmail.com</Text>
                </View>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>
                    {' '}
                    {strings({key: 'PhoneNumber', language})}
                  </Text>
                  <Text style={styles.keyValue}>919747559615</Text>
                </View>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>
                    {strings({key: 'LocalAddress', language})}
                  </Text>
                  <Text style={[styles.keyValue, {color: assetColor}]}>
                    {strings({key: 'GetDirection', language})}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.headerText}>
                {strings({key: 'AdditionDetails', language})}
              </Text>

              <View
                style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: 'white',
                  shadowColor: '#515151',
                  shadowOffset: {width: 0, height: 1},
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                }}>
                <View style={styles.rowContainer}>
                  <View
                    style={{
                      flex: 0.5,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icons
                      size={hp('2.5')}
                      style={{alignSelf: 'center'}}
                      name="star-border"
                      color={PrimaryColor}
                    />
                    <Text style={[styles.keyValue, {paddingLeft: 5}]}>
                      {strings({key: 'Benefitshighlights', language})}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.4,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Icons
                      size={hp('2.5')}
                      name="keyboard-arrow-right"
                      color="#000"
                    />
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.headerText}>
                {strings({key: 'MyFamilyMembers', language})}
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 150,
                  backgroundColor: 'white',
                  shadowColor: '#515151',
                  shadowOffset: {width: 0, height: 1},
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="person-add" color={PrimaryColor} size={hp('4')} />

                  <Text style={styles.keyValue}>Bibin Prathap</Text>
                  <Text style={styles.keyValue}>Abraham Pratap</Text>
                  <Text style={styles.keyValue}>Principle</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="person" color={PrimaryColor} size={hp('4')} />
                  <Text style={styles.keyValue}>Kenes Bibin</Text>
                  <Text style={styles.keyValue}>Pratap</Text>
                  <Text style={styles.keyValue}>Child</Text>
                </View>
                <View style={{flex: 1}} />
              </View>
            </View>
          </View>
        </ScrollView>
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
    fontSize: normalizeFont(18),
    paddingVertical: 10,
  },
  borderContainer: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
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

const mapStateToProps = state => {
  // Redux Store --> Component
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(PolicyScreen);
