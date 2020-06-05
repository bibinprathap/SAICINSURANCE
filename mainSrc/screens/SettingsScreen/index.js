import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Header
          {...this.props}
          navigation={this.props.navigation}
          Heading="Settings"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SettingsScreen;
