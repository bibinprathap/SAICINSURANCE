import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Screen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
