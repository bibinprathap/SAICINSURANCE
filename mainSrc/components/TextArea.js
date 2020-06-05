import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';

import PropTypes from 'prop-types';
import {Field} from 'redux-form';

const {height} = Dimensions.get('window');

const TextArea = props => {
  const {input, ...inputProps} = props;

  return (
    <View
      style={{
        height: props.height,
        backgroundColor: props.backgroundColor,
        width: props.width,
        borderColor: '#ccc',
        borderWidth: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingLeft: '5%',
        }}>
        <View
          style={{
            flex: 2,
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            paddingRight: '3%',
          }}>
          <Text
            style={{
              fontSize: height * 0.02,
              fontFamily: 'Roboto-Medium',
              color: '#666666',
            }}>
            {props.label}
          </Text>
          {props.labelCondition && (
            <Text
              style={{
                marginLeft: '2%',
                fontSize: height * 0.02,
                fontFamily: 'Roboto-Light',
                color: '#666666',
              }}>
              {`(Max ${props.charLimit} chars)`}
            </Text>
          )}
        </View>
        {props.popoverMessage && (
          <View
            style={{
              flex: 1,
              minHeight: 50,
              paddingTop: props.detail ? '3%' : '5%',
              paddingRight: '5%',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            {/* <Popover message={props.popoverMessage} /> */}
          </View>
        )}
      </View>
      {props.detail && (
        <View
          style={{
            flex: 1,
            paddingLeft: '5%',
            paddingRight: '10%',
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Light',
              fontSize: height * 0.015,
            }}>
            {props.detail}
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Light',
              fontSize: height * 0.015,
            }}>
            {props.subDetail}
          </Text>
        </View>
      )}
      <View
        style={{
          flex: 2,
          paddingLeft: Platform.OS === 'ios' ? '5%' : '4%',
          paddingRight: '2%',
          justifyContent: 'flex-start',
        }}>
        <TextInput
          meta={inputProps.meta}
          onChangeText={text => {
            if (props.onChange) props.onChange(text);
            input.onChange(text);
          }}
          onBlur={() => {
            if (props.onBlur) props.onBlur();
            input.onBlur();
          }}
          onFocus={input.onFocus}
          value={input.value}
          style={{
            flex: 1,
            fontSize: height * 0.02,
            fontFamily: 'Roboto-Bold',
          }}
          multiline
          maxLength={props.charLimit}
          numberOfLines={2}
          placeholderTextColor="#B4B4B4"
          placeholder={props.placeholder}
          textAlignVertical="top"
          underlineColorAndroid="rgba(0,0,0,0)"
        />
      </View>
    </View>
  );
};

TextArea.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  placeholder: PropTypes.string,
  height: PropTypes.number,
  popoverMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  detail: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  subDetail: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  labelCondition: PropTypes.bool,
  input: PropTypes.shape({}).isRequired,
  charLimit: PropTypes.number,
};

TextArea.defaultProps = {
  backgroundColor: '#FFF',
  placeholder: '',
  height: 120,
  width: 350,
  popoverMessage: false,
  detail: false,
  subDetail: false,
  labelCondition: false,
  charLimit: 500,
};

const CustomField = props => <Field {...props} component={TextArea} />;
export default CustomField;
