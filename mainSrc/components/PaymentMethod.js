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
const PaymentMethod = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingVertical: 10,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <DefaultText
          style={{
            fontSize: normalizeFont(16),
            fontFamily: 'UberMoveText-Regular',
          }}>
          {props.bankTransfer && (
            <View
              style={{
                backgroundColor: 'green',
                borderRadius: 10,
              }}>
              <Icons size={20} name="done" color="white" />
            </View>
          )}{' '}
          {props.title}
          {props.start && (
            <Text
              style={{
                fontSize: normalizeFont(20),
                color: PrimaryColor,
              }}>
              *
            </Text>
          )}
          {!props.addNotes && (
            <>
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 10,
                }}
              />
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
          {props.children}
          {/* {props.nextIcon && (
            <Icons size={hp('3')} name="keyboard-arrow-right" color="grey" />
          )} */}
        </View>
      </View>
    </View>
  );
};

export default PaymentMethod;
