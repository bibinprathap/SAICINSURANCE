import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import {PrimaryColor} from '../../config';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import DefaultText from '../../components/DefaultText';
import {assetColor} from '../../config';
import {touch} from 'redux-form';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

class ConfirmationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claimEdit: false,
      documentsEdit: false,
      paymentEdit: false,
    };
  }
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
          <TouchableOpacity
            onPress={() =>
              this.setState(prevState => {
                return {
                  ...prevState,
                  claimEdit: !prevState.claimEdit,
                };
              })
            }>
            <Icons
              size={hp('2.5')}
              name={this.state.claimEdit ? 'done' : 'edit'}
              color={PrimaryColor}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          {/* <View style={styles.row}>
            {this.state.claimEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Select Member{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Select Member
              </DefaultText>
            )}
            <TextInput
              value={this.props.selectMember}
              onChangeText={this.props.selectMemberChange}
              editable={this.state.claimEdit}
            />
          </View> */}
          {/* <View style={styles.row}>
            {this.state.claimEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Healthcare provider country{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                Healthcare provider country
              </Text>
            )}

            <TextInput
              value={this.props.countyValue}
              onChangeText={this.props.countyValueChange}
              editable={this.state.claimEdit}
            />
          </View> */}
          <View style={styles.row}>
            {this.state.claimEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Service Type{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Service Type</Text>
            )}

            <TextInput
              value={this.props.serviceType}
              onChangeText={this.props.serviceTypeChange}
              editable={this.state.claimEdit}
            />
          </View>
          <View style={styles.row}>
            {this.state.claimEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Service Date{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Service Date</Text>
            )}

            <DatePicker
              date={this.props.serviceDate}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  borderBottomWidth: 0,
                  alignItems: 'flex-end',
                },
                placeholderText: {
                  fontSize: 17,
                  color: 'white',
                },
                dateText: {
                  fontFamily: 'Roboto-Bold',
                  fontSize: 17,
                  color: 'grey',
                },
              }}
              onDateChange={this.props.serviceDateChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.claimEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Claim Account{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Claim Account</Text>
            )}

            <TextInput
              value={this.props.claimAccount}
              onChangeText={this.props.claimAccountChange}
              editable={this.state.claimEdit}
            />
          </View>
          <View style={styles.row}>
            {this.state.claimEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Currency <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Currency</Text>
            )}

            <TextInput
              value={this.props.currencyValue}
              onChangeText={this.props.currencyValueChange}
              editable={this.state.claimEdit}
            />
          </View>
          <View style={styles.row}>
            {this.state.claimEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Currency <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Add Notes</Text>
            )}

            <TextInput
              placeholder="Add notes"
              value={this.props.addNotes}
              onChangeText={this.props.addNotesChange}
              editable={this.state.claimEdit}
            />
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
          <TouchableOpacity
            onPress={() =>
              this.setState(prevState => {
                return {
                  ...prevState,
                  documentsEdit: !prevState.documentsEdit,
                };
              })
            }>
            <Icons
              size={hp('2.5')}
              name={this.state.documentsEdit ? 'done' : 'edit'}
              color={PrimaryColor}
            />
          </TouchableOpacity>
        </View>
        <View>
          {this.props.image && (
            <ImageBackground
              source={this.props.image}
              style={{height: 200, width: '100%'}}
              resizeMethod="resize">
              {this.state.documentsEdit && (
                <TouchableOpacity
                  // onPress={this.showActionSheet}
                  onPress={this.props.showActionSheet}
                  style={{
                    alignItems: 'flex-end',
                    paddingRight: 10,
                    paddingTop: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: assetColor,
                      padding: 10,
                      borderRadius: 20,
                    }}>
                    <Icons size={hp('2.5')} name="edit" color="#fff" />
                  </View>
                </TouchableOpacity>
              )}
            </ImageBackground>
          )}
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
          <TouchableOpacity
            onPress={() =>
              this.setState(prevState => {
                return {
                  ...prevState,
                  paymentEdit: !prevState.paymentEdit,
                };
              })
            }>
            <Icons
              size={hp('2.5')}
              name={this.state.paymentEdit ? 'done' : 'edit'}
              color={PrimaryColor}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Payment Method{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Payment Method</Text>
            )}

            <Text style={{fontSize: normalizeFont(16)}}>Bank Transfer</Text>
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Country <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Country</Text>
            )}

            <TextInput
              placeholder="Country"
              value={this.props.myCountry}
              onChangeText={this.props.myCountryValueChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Account Number{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Account Number</Text>
            )}

            <TextInput
              placeholder="Account Number"
              value={this.props.accountNumber}
              onChangeText={this.props.accountValueChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Bank Name <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Bank Name</Text>
            )}

            <TextInput
              placeholder="Bank Name"
              value={this.props.bankName}
              onChangeText={this.props.bankNameChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Bank Address{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Bank Address</Text>
            )}

            <TextInput
              placeholder="Bank Address"
              value={this.props.bankAddress}
              onChangeText={this.props.bankAddressChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Branch <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Branch</Text>
            )}

            <TextInput
              placeholder="Branch Name"
              value={this.props.branchName}
              onChangeText={this.props.branchNameChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Branch <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>City</Text>
            )}

            <TextInput
              placeholder="City"
              value={this.props.cityName}
              onChangeText={this.props.cityNameChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Phone <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Phone</Text>
            )}

            <TextInput
              placeholder="Phone"
              value={this.props.phoneNumber}
              onChangeText={this.props.phoneNumberChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                Email <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>Email</Text>
            )}

            <TextInput
              placeholder="Email"
              value={this.props.emailName}
              onChangeText={this.props.emailChange}
            />
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
