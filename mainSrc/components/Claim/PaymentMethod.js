import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Panel from '../Panel';
import {PrimaryColor} from '../../config';
import DefaultText from '../DefaultText';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import PaymentMethod from '../PaymentMethod';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

class PaymentMethods extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Panel header="Payment Method" maxItem={120}>
          <View style={{flex: 1}}>
            <View
              style={[
                styles.header,
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingLeft: 10,
                },
              ]}>
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons size={20} name="done" color="white" />
              </View>
              <DefaultText style={{paddingLeft: 10}}>Bank Transfer</DefaultText>
            </View>
          </View>
        </Panel>

        <Panel header="Bank Account Details" maxItem={610}>
          <View style={{flex: 1}}>
            <View style={[styles.header]}>
              <PaymentMethod
                title="Country"
                value="United Arab Emirates"
                nextIcon
                addNotes
                start
              />
              <PaymentMethod title="IBAN" value="" addNotes start />
              <PaymentMethod title="SWIFT/BIC" value="EBILAED" addNotes start />
              <PaymentMethod
                title="Account Number"
                value=""
                nextIcon
                addNotes
                start
              />
              <PaymentMethod title="Account Name" value="" addNotes start />

              <PaymentMethod
                title="Currency"
                value="AED"
                nextIcon
                addNotes
                start
              />
              <PaymentMethod
                title="Bank Name"
                value="Punjab National Bank"
                addNotes
                start
              />
              <PaymentMethod
                title="Bank Address"
                value="BENYAS STREET,DEIRA"
                addNotes
                start
              />
              <PaymentMethod title="Branch" value="" addNotes />
              <PaymentMethod title="City" value="DUBAI" addNotes />
              <PaymentMethod title="Phone" value="" addNotes />
              <PaymentMethod title="Email" value="" addNotes />
            </View>
          </View>
        </Panel>
      </ScrollView>
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

export default PaymentMethods;
