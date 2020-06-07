import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {PrimaryColor} from '../../config';
import Icons from 'react-native-vector-icons/MaterialIcons';
import StepIndicator from 'react-native-step-indicator';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultText from '../../components/DefaultText';
import ClaimDetails from '../../components/ClaimDetails';
import ForgetModal from '../../components/Modal/forgotpassword';
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
      forgotPassword: false,
    };
  }

  renderModel(){
   
      this.props.navigation.goBack();
  }
  render() {
    const {claimID} = this.state;
    return (
      <View style={styles.screen}>
                <ForgetModal
          isVisible={this.state.forgotPassword}
          onBackdropPress={() => this.setState({forgotPassword: false})}
          renderModel= {() => this.props.navigation.goBack()}
          hideModal={() => this.setState({forgotPassword: false})}
          iconName="person"
          title="Attention"
          subTitle="Are you sure you want to cancel claim submission?"
        />
        <View style={styles.Headercontainer}>
          <View style={styles.topContainer}>
            <Text
              onPress={() => this.setState({forgotPassword: true})}
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
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[
                      styles.textObj,
                      {color: 'black', fontSize: normalizeFont(17)},
                    ]}>
                    Claim Details
                  </Text>
                  <Text style={{color: PrimaryColor}}>Required</Text>
                </View>

                <View style={{flex: 1}}>
                  <View
                    style={{
                      flex: 0.7,
                      backgroundColor: 'white',
                      margin: 10,
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 1},
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 2,
                    }}>
                    <ClaimDetails
                      title="Select Number"
                      value="Myself"
                      nextIcon
                    />
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
                  <View style={{flex: 0.3}} />
                </View>
              </View>
            ) : null}
          </View>
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
