import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Button, Segment, Text } from 'native-base';
import { PrimaryColor } from '../../config';
import Header from '../../components/Header';

var windowSize = Dimensions.get('window');

class Notifications extends Component {
  render() {
    return (

      <View>
        <Header
          Back
          navigation={this.props.navigation}
          Heading="Notifications"
        />

        <Segment style={styles.segment}>
          <Button first active>
            <Text>ALERTS</Text>
          </Button>

          <Button last >
            <Text>MESSAGES</Text>
          </Button>
        </Segment>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  segment: {
    backgroundColor: PrimaryColor,
  },
});
export default Notifications;