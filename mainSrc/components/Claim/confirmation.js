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
import {connect} from 'react-redux';
import strings from '../../api/helperServices/language';
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
    const {language} = this.props;
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
            {strings({key: 'ClaimDetails', language})}
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
          <View style={styles.row}>
            {this.state.claimEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Servicetype', language})}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Servicetype', language})}
              </Text>
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
                {strings({key: 'ServiceDate', language})}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'ServiceDate', language})}
              </Text>
            )}

            <DatePicker
              date={this.props.serviceDate}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              confirmBtnText={strings({key: 'Confirm', language})}
              cancelBtnText={strings({key: 'Cancel', language})}
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
                {strings({key: 'ClaimAccount', language})}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'ClaimAccount', language})}
              </Text>
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
                {strings({key: 'Currency', language})}{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Currency', language})}
              </Text>
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
                {strings({key: 'Addnotes', language})}{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Addnotes', language})}
              </Text>
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
            {strings({key: 'NeededDocuments', language})}
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
          {this.props.children}
          {/* {this.props.image && (
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
          )} */}
        </View>

        <View
          style={{
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{paddingVertical: 10, fontSize: normalizeFont(17)}}>
            {strings({key: 'PaymentMethod', language})}
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
                {strings({key: 'PaymentMethod', language})}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'PaymentMethod', language})}
              </Text>
            )}

            <Text style={{fontSize: normalizeFont(16)}}>
              {strings({key: 'BankTransfer', language})}
            </Text>
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Country', language})}{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {' '}
                {strings({key: 'Country', language})}
              </Text>
            )}

            <TextInput
              placeholder={strings({key: 'Country', language})}
              value={this.props.myCountry}
              onChangeText={this.props.myCountryValueChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'AccountNumber', language})}{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'AccountNumber', language})}
              </Text>
            )}

            <TextInput
              placeholder={strings({key: 'AccountNumber', language})}
              value={this.props.accountNumber}
              onChangeText={this.props.accountValueChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'BankName', language})}{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'BankName', language})}
              </Text>
            )}

            <TextInput
              placeholder={strings({key: 'BankName', language})}
              value={this.props.bankName}
              onChangeText={this.props.bankNameChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'BankAddress', language})}{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'BankAddress', language})}
              </Text>
            )}

            <TextInput
              placeholder={strings({key: 'BankAddress', language})}
              value={this.props.bankAddress}
              onChangeText={this.props.bankAddressChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Branch', language})}{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Branch', language})}
              </Text>
            )}

            <TextInput
              placeholder={strings({key: 'Branch', language})}
              value={this.props.branchName}
              onChangeText={this.props.branchNameChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'City', language})}{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'City', language})}
              </Text>
            )}

            <TextInput
              placeholder={strings({key: 'City', language})}
              value={this.props.cityName}
              onChangeText={this.props.cityNameChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Phone', language})}{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Phone', language})}
              </Text>
            )}

            <TextInput
              placeholder={strings({key: 'Phone', language})}
              value={this.props.phoneNumber}
              onChangeText={this.props.phoneNumberChange}
            />
          </View>
          <View style={styles.row}>
            {this.state.paymentEdit ? (
              <DefaultText style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Email', language})}{' '}
                <Text style={{fontSize: normalizeFont(16)}}>*</Text>
              </DefaultText>
            ) : (
              <Text style={{fontSize: normalizeFont(16)}}>
                {strings({key: 'Email', language})}
              </Text>
            )}

            <TextInput
              placeholder={strings({key: 'Email', language})}
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

const mapStateToProps = state => {
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(ConfirmationScreen);
