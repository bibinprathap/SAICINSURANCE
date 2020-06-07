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
const NeededDocuments = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
      }}>
      <View style={{flexDirection: 'row', paddingTop: 10}}>
        <DefaultText
          style={{
            fontSize: normalizeFont(16),
            fontFamily: 'UberMoveText-Regular',
          }}>
          <View
            style={{
              height: 15,
              width: 15,
              backgroundColor: 'green',
              borderRadius: 10,
            }}
          />{' '}
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
            </>
          )}
        </DefaultText>
      </View>
    </View>
  );
};

export default NeededDocuments;
