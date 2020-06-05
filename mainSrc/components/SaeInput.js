import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Sae} from 'react-native-textinput-effects';
import React from 'react';
import {View} from 'react-native';
const saeInput = props => (
  <View
    style={{
      backgroundColor: 'yellow',
      height: 100,
      width: '100%',
      borderColor: '#ccc',
      borderWidth: 1,
    }}>
    <Sae
      {...props}
      label={'Email Address'}
      iconClass={FontAwesomeIcon}
      iconName={'pencil'}
      iconColor={'#ccc'}
      labelHeight={24}
      autoCapitalize={'none'}
      autoCorrect={false}
    />
  </View>
);

export default saeInput;
