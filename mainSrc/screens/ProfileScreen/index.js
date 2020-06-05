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
import {PrimaryColor, assetColor} from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProfileImg from '../../assets/src_assets_profile.png';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Header Back navigation={this.props.navigation} Heading="Profile" />
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={ProfileImg} style={{height: 100, width: 100}} />
          </View>
          <View style={styles.mainContainer}>
            <View
              style={{
                flex: 1,
              }}>
              <View style={{flex: 0.25}}>
                <Text style={styles.headerText}>Personal Information</Text>
              </View>
              <View style={styles.borderContainer}>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Full Name</Text>
                  <Text style={styles.keyValue}>Rjij raju</Text>
                </View>

                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Date of Birth</Text>
                  <Text style={styles.keyValue}>10/05/1992</Text>
                </View>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Gender</Text>
                  <Text style={styles.keyValue}>Female</Text>
                </View>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Mobile Number</Text>
                  <Text style={styles.keyValue}>+91-9747559615</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <View style={{flex: 0.25}}>
                <Text style={styles.headerText}>Account Settings</Text>
              </View>
              <View style={styles.borderContainer}>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Change Email</Text>
                  <Icons
                    size={hp('2.5')}
                    style={{alignSelf: 'center'}}
                    name="keyboard-arrow-right"
                    color="#000"
                  />
                </View>

                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Change Password</Text>
                  <Icons
                    size={hp('2.5')}
                    style={{alignSelf: 'center'}}
                    name="keyboard-arrow-right"
                    color="#000"
                  />
                </View>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Change Mobile</Text>
                  <Icons
                    size={hp('2.5')}
                    style={{alignSelf: 'center'}}
                    name="keyboard-arrow-right"
                    color="#000"
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                  }}>
                  <Text
                    onPress={() => this.props.navigation.navigate('Login')}
                    style={[styles.keyValue, {color: assetColor}]}>
                    Logout
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flex: 0.6}}>
              <View style={{flex: 0.35}}>
                <Text style={styles.headerText}>Addition Information</Text>
              </View>

              <View style={[styles.borderContainer, {flex: 0.8}]}>
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
                      name="gps-fixed"
                      color="#000"
                    />
                    <Text style={[styles.keyValue, {paddingLeft: 5}]}>
                      Address Book
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
                      name="input"
                      color="#000"
                    />
                    <Text style={[styles.keyValue, {paddingLeft: 5}]}>
                      My Documents
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

export default ProfileScreen;
