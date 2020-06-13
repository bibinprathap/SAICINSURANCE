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
import ProfileImg from '../../assets/src_assets_profile.png';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

class PolicyScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Header
          Back
          navigation={this.props.navigation}
          Heading="Policy Details"
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
              <Text style={styles.headerText}>Policy Details</Text>

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
                  <Text style={styles.keyValue}>Policy Holder Name</Text>
                  <Text style={styles.keyValue}>Rjij raju</Text>
                </View>

                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Policy is Valid Until</Text>
                  <Text style={styles.keyValue}>10/05/1992</Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.headerText}>Insurence Company Details</Text>

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
                  <Text style={styles.keyValue}>Name</Text>
                  <Text style={styles.keyValue}>Rjij raju</Text>
                </View>

                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Mailling Address</Text>
                  <Text style={styles.keyValue}>Nassima@gmail.com</Text>
                </View>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Phone Number</Text>
                  <Text style={styles.keyValue}>919747559615</Text>
                </View>
                <View style={styles.rowContainer}>
                  <Text style={styles.keyValue}>Local Address</Text>
                  <Text style={[styles.keyValue, {color: assetColor}]}>
                    Get Direction
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.headerText}>Addition Details</Text>

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
                      Benefits highlights
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
              <Text style={styles.headerText}>My Family Members </Text>
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

export default PolicyScreen;
