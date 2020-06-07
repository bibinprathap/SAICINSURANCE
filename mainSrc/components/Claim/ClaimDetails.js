import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Panel from '../Panel';
import {PrimaryColor} from '../../config';
import ClaimDetails from '../ClaimDetails';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

class ClaimDetailScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Panel header="Claim Details" maxItem={400}>
          <View style={{flex: 1}}>
            <View style={styles.header}>
              <ClaimDetails title="Select Number" value="Myself" nextIcon />
              <ClaimDetails
                title="Healthcare Provider Country"
                value="United Arab Emirates"
                nextIcon
              />
              <ClaimDetails
                title="Service type"
                value="Consultation"
                nextIcon
              />
              <ClaimDetails title="Service Date" value="12-03-2020" />
              <ClaimDetails title="Claim Account" value="200" />
              <ClaimDetails title="Currency" value="AED" nextIcon />
              <ClaimDetails title="Add notes" value="" addNotes />
            </View>
          </View>
        </Panel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    margin: 10,
  },
  Headercontainer: {
    height: 60,
    backgroundColor: PrimaryColor,

    paddingHorizontal: 15,
  },
  textObj: {
    fontSize: normalizeFont(14),
    color: 'white',
    fontFamily: 'UberMoveText-Bold',
  },
  topContainer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ClaimDetailScreen;
