import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {PrimaryColor} from '../../config';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

class ConfirmationScreen extends Component {
  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: '#F7F7F7'}}
        showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: normalizeFont(12)}}>
          Plase review the summary below before submitting your claim
        </Text>
        <View
          style={{
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{paddingVertical: 10, fontSize: normalizeFont(17)}}>
            Claim Details
          </Text>
          <Icons size={hp('2.5')} name="edit" color={PrimaryColor} />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Select Member</Text>
            <Text style={{fontSize: normalizeFont(16)}}>Myself</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>
              Healthcare provider country
            </Text>
            <Text style={{fontSize: normalizeFont(16)}}>UAE</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Service Type</Text>
            <Text style={{fontSize: normalizeFont(16)}}>Consultation</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Service Date</Text>
            <Text style={{fontSize: normalizeFont(16)}}>05/06/2020</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Claim Account</Text>
            <Text style={{fontSize: normalizeFont(16)}}>200</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Currency</Text>
            <Text style={{fontSize: normalizeFont(16)}}>AED</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Add Notes</Text>
            <Text style={{fontSize: normalizeFont(16)}} />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{paddingVertical: 10, fontSize: normalizeFont(17)}}>
            Needed Documents
          </Text>
          <Icons size={hp('2.5')} name="edit" color={PrimaryColor} />
        </View>
        <View
          style={{
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{paddingVertical: 10, fontSize: normalizeFont(17)}}>
            Payment Method
          </Text>
          <Icons size={hp('2.5')} name="edit" color={PrimaryColor} />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Payment Method</Text>
            <Text style={{fontSize: normalizeFont(16)}}>Bank Transfer</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Country</Text>
            <Text style={{fontSize: normalizeFont(16)}}>UAE</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Account Number</Text>
            <Text style={{fontSize: normalizeFont(16)}}>67347116276</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Bank Name</Text>
            <Text style={{fontSize: normalizeFont(16)}}>
              Punjab National Bank
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Bank Address</Text>
            <Text style={{fontSize: normalizeFont(16)}}>
              BENYAS STREET,DEIRA
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Branch</Text>
            <Text style={{fontSize: normalizeFont(16)}}>Maimoora</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>City</Text>
            <Text style={{fontSize: normalizeFont(16)}}>Dubai Central</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Phone</Text>
            <Text style={{fontSize: normalizeFont(16)}}>91-9723459876</Text>
          </View>
          <View style={styles.row}>
            <Text style={{fontSize: normalizeFont(16)}}>Email</Text>
            <Text style={{fontSize: normalizeFont(16)}}>Saic@gmail.com</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default ConfirmationScreen;
