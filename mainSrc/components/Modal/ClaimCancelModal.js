import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import strings from '../../api/helperServices/language';
import {PrimaryColor} from '../../config';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

class AddCustomerModal extends Component {
  render() {
    const {language} = this.props;
    return (
      <Modal
        {...this.props}
        hideModalContentWhileAnimating
        backdropColor="black"
        backdropOpacity={0.5}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={1000}
        animationOutTiming={1500}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        useNativeDriver
        style={{justifyContent: 'center', margin: 0}}>
        <View style={styles.container}>
          <View
            style={{
              height: hp('10'),
              width: hp('10'),
              backgroundColor: PrimaryColor,
              borderRadius: hp('5'),
              marginTop: hp(-'5'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              size={hp('4')}
              style={{alignSelf: 'center'}}
              name="perm-identity"
              color="#fff"
            />
          </View>
          <View
            style={{
              height: 50,
              alignItems: 'flex-end',
              marginTop: hp(-'5'),
              padding: 5,
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={this.props.hideModal}
              style={styles.closeButton}>
              <Icons name="close" color="#A8A7A7" size={hp('3')} />
            </TouchableOpacity>
          </View>
          <View style={{height: 50, marginVertical: 10}}>
            <TouchableOpacity activeOpacity={1} style={styles.titleContainer}>
              <Text style={styles.titleText}>Attention</Text>
            </TouchableOpacity>
            <Text
              style={{
                paddingVertical: 5,
                textAlign: 'center',
                color: '#576574',
                fontFamily: 'Roboto-Medium',
              }}>
              Are you shure want to cancel claim submission
            </Text>
          </View>

          <View style={styles.mainContainer}>
            <View style={styles.viewContainer}>
              <TouchableOpacity
                style={styles.buttonyn}
                onPress={this.props.hideModal}>
                <Text style={styles.addText}>No</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.addButtonContainer}>
              <TouchableOpacity
                style={styles.buttonyn}
                onPress={this.props.addAction}>
                <Text style={styles.addText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: hp('20'),
    borderRadius: 10,
    alignItems: 'center',
    height: 300,
  },
  closeButton: {
    height: hp('4'),
    width: hp('4'),

    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: hp('2'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: hp('3'),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: normalizeFont(18),
    color: '#515050',
    fontFamily: 'Roboto-Medium',
  },
  mainContainer: {
    height: 150,
    paddingVertical: 10,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  textInput: {
    height: hp('5'),
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#515050',
    backgroundColor: '#fff',
    fontSize: normalizeFont(16),
    marginTop: 10,
    paddingLeft: 5,
  },
  addButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: PrimaryColor,
    paddingBottom: 10,
    borderRadius: 5,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
  },
  buttonyn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: PrimaryColor,
    borderRadius: 5,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
  },
  addText: {
    width: '100%',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    color: '#fff',
  },
});

const mapStateToProps = state => {
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(AddCustomerModal);
