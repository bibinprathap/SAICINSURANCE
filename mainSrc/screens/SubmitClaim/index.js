import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {PrimaryColor, assetColor} from '../../config';
import Icons from 'react-native-vector-icons/MaterialIcons';
import StepIndicator from 'react-native-step-indicator';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultText from '../../components/DefaultText';
import ClaimDetails from '../../components/Claim/ClaimDetails';
import PaymentMethod from '../../components/Claim/PaymentMethod';
import NeededDocuments from '../../components/Claim/NeededDocuments';
import Confirmation from '../../components/Claim/confirmation';
import CancelClaimModal from '../../components/Modal/ClaimCancelModal';
import {ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

const labels = [
  'Claim Details',
  'Needed Documents',
  'Payment Method',
  'Confirmation',
];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#000',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: 'white',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: 'white',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: PrimaryColor,
  stepIndicatorUnFinishedColor: '#ccc',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 10,
  currentStepIndicatorLabelFontSize: 10,
  stepIndicatorLabelCurrentColor: 'green',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#000',
  labelColor: '#999999',
  labelSize: 12,
  currentStepLabelColor: 'white',
};

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claimID: 'P/01/1307/2019/9640',
      currentPosition: 0,
      cancelModal: false,
    };
  }
  render() {
    const {claimID} = this.state;
    return (
      <View style={styles.screen}>
        <CancelClaimModal
          isVisible={this.state.cancelModal}
          onBackdropPress={() => this.setState({cancelModal: false})}
          hideModal={() => this.setState({cancelModal: false})}
          addAction={() =>
            this.setState({cancelModal: false}, () =>
              this.props.navigation.goBack(),
            )
          }
        />
        <View style={styles.Headercontainer}>
          <View style={styles.topContainer}>
            <Text
              // onPress={() => this.props.navigation.goBack()}
              onPress={() => this.setState({cancelModal: true})}
              style={styles.textObj}>
              Cancel
            </Text>
            <Text style={[styles.textObj, {color: '#000'}]}>Save</Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.textObj,
                {textAlign: 'center', fontSize: normalizeFont(17)},
              ]}>
              Submit ReimbursementClaims
            </Text>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
          <View
            style={{
              flex: 0.2,
              backgroundColor: PrimaryColor,
              paddingHorizontal: 15,
            }}>
            <View style={styles.topContainer}>
              <Text style={styles.textObj}>PolicyNumber</Text>
              <View
                style={{
                  flex: 0.65,
                  flexDirection: 'row',
                }}>
                <Text style={[styles.textObj, {paddingHorizontal: hp('1')}]}>
                  {claimID}
                </Text>
                <Icons size={hp('2.5')} name="arrow-forward" color="white" />
              </View>
            </View>

            <View style={{flex: 1}}>
              <StepIndicator
                onPress={item => this.setState({currentPosition: item})}
                style={{width: '100%'}}
                customStyles={customStyles}
                currentPosition={this.state.currentPosition}
                labels={labels}
                stepCount={4}
              />
            </View>
          </View>
          <View style={{flex: 1, backgroundColor: '#F7F7F7', padding: 10}}>
            {this.state.currentPosition == 0 ? (
              <ClaimDetails />
            ) : this.state.currentPosition === 1 ? (
              <NeededDocuments />
            ) : this.state.currentPosition === 2 ? (
              <PaymentMethod />
            ) : (
              <Confirmation />
            )}
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              backgroundColor: PrimaryColor,
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <DefaultText style={{color: 'white', fontSize: 20}}>
              Continue
            </DefaultText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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

export default Screen;
