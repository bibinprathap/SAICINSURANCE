import React, {Component} from 'react';

import {View, Animated, Easing, TouchableWithoutFeedback} from 'react-native';

export default class RotateButton extends Component {
  constructor(props) {
    super(props);
    this.rotateValue = new Animated.Value(0); // declare animated value
  }

  render() {
    let rotation = this.rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'], // degree of rotation
    });
    let transformStyle = {transform: [{rotate: rotation}]};

    return (
      <TouchableWithoutFeedback
        onPressIn={() => {
          Animated.timing(this.rotateValue, {
            toValue: 0,
            duration: 700,
            easing: Easing.linear,
          }).start();
        }}
        onPressOut={() => {
          this.rotateValue.setValue(0);
          Animated.timing(this.rotateValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
          }).start();
        }}
        onPress={this.props.OnPress}
        style={{backgroundColor: 'yellow'}}>
        <Animated.View
        // style={transformStyle}
        >
          {this.props.children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
