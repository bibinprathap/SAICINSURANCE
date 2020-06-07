import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {PrimaryColor} from '../config';
import DefaultText from './DefaultText';
const {width, height} = Dimensions.get('screen');

import Icons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const normalizeFont = size => {
  return size * (width * 0.0025);
};
const ClaimDetails = props => {
  return (
    <View
      style={{
        flex: 1,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <DefaultText
          style={{
            fontSize: normalizeFont(14),
            fontFamily: 'UberMoveText-Regular',
          }}>
          {props.title}
          {!props.addNotes && (
            <>
              <Text
                style={{
                  fontSize: normalizeFont(20),
                  color: PrimaryColor,
                }}>
                *
              </Text>
              {/* <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: 'green',
                  borderRadius: 10,
                }}
              /> */}
            </>
          )}
        </DefaultText>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'grey', fontSize: normalizeFont(14)}}>
            {props.value}
          </Text>
          {props.nextIcon && (
            <Icons size={hp('3')} name="keyboard-arrow-right" color="grey" />
          )}
        </View>
      </View>
    </View>
  );
};

export default ClaimDetails;
