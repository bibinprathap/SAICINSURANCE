import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {PrimaryColor} from '../config';
import {
  View,
  TextInput,
  Text,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import {Button, Icon} from 'native-base';

import FaceProfile from 'react-native-vector-icons/MaterialCommunityIcons';

import Icons from 'react-native-vector-icons/MaterialIcons';

import {NavigationActions, StackActions} from 'react-navigation';

export default class Header extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
    statusColor: PropTypes.string,
    navigation: PropTypes.any,
  };

  HomeScreen = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Drawer'})],
    });

    this.props.navigation.dispatch(resetAction);
  };

  render() {
    const {Back} = this.props;
    return (
      <View
        style={{
          height: 65,
          flexDirection: 'row',
          backgroundColor: PrimaryColor,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {this.props.Back ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icons
                size={40}
                style={{margin: 5, alignSelf: 'center'}}
                name="navigate-before"
                color="#ccc"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon
                name={Back ? 'ios-arrow-round-back' : 'menu'}
                style={{fontSize: 35, color: 'white'}}
              />
            </Button>

            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  paddingTop: 5,
                }}>
                {this.props.Heading}
              </Text>
            </View>
          </View>
        )}

        {this.props.Back && (
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontFamily: 'Roboto-Medium',
              }}>
              {this.props.Heading}
            </Text>
          </View>
        )}
        {this.props.Claims ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icons
                size={25}
                style={{margin: 10, alignSelf: 'center'}}
                name="email"
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icons
                size={25}
                style={{margin: 10, alignSelf: 'center'}}
                name="tune"
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        ) : this.props.profile ? (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <FaceProfile
              size={30}
              style={{margin: 18, alignSelf: 'center'}}
              name="face-profile"
              color="#ccc"
            />
          </TouchableOpacity>
        ) : (
          <View style={{width: 50, backgroundColor: 'red'}} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
