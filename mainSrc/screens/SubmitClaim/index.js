import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {PrimaryColor, assetColor} from '../../config';
import Icons from 'react-native-vector-icons/MaterialIcons';
import StepIndicator from 'react-native-step-indicator';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ForgetModal from '../../components/Modal/forgotpassword';
import AppApi from '../../api/real';
import DefaultText from '../../components/DefaultText';
import ClaimDetails from '../../components/Claim/ClaimDetails';
import PaymentMethod from '../../components/Claim/PaymentMethod';
import NeededDocuments from '../../components/Claim/NeededDocuments';
import Confirmation from '../../components/Claim/confirmation';
import CancelClaimModal from '../../components/Modal/ClaimCancelModal';
import CameraImage from '../../assets/src_assets_camera.png';
import Modal from 'react-native-modal';
import GalleryImage from '../../assets/src_assets_gallery.png';
import {connect} from 'react-redux';
import strings from '../../api/helperServices/language';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

const api = new AppApi();

const labels = [
  'Claim Details',
  'Needed Documents',
  'Payment Method',
  'Confirmation',
];

const labelsAr = [
  'تفاصيل المطالبة',
  'المستندات المطلوبة',
  'طريقة الدفع او السداد',
  'التأكيد',
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

let Today;

class Screen extends Component {
  constructor(props) {
    super(props);
    var today = new Date().toISOString().split('T')[0];
    var td = today
      .split('/')
      .reverse()
      .join('/');
    var tdd = td
      .split('/')
      .reverse()
      .join('/');
    Today = tdd
      .split('-')
      .reverse()
      .join('/');

    this.state = {
      claimID: 'P/01/1307/2019/9640',
      currentPosition: 0,
      cancelModal: false,
      forgotPassword: false,
      selectNumber: '200',
      countryName: '',
      serviceType: 'Dental',
      serviceDate: Today,
      claimAccount: '',
      currencyValue: 'IQD',

      addNotes: '',
      image: null,
      pickerModal: false,
      myCountry: '',
      iBAN: '',
      swiftBIC: '',
      accountNumber: '',
      bankName: '',
      bankAddress: '',
      accountName: '',
      myCurrency: '',
      branchName: '',
      cityName: '',
      phoneNumber: '',
      emailName: '',
      serviceData: [
        {
          "ID": 0,
          "Ename": "None"
        },
      ],
      currencyData: [
        {
          "ID": 5,
        "Country": "Iraq",
        "CurrencyCode": "IQD"
        },
      ],
      countriesData:
      [
        {
          "ID": 1,
          "EName": "IRAQ"
        },
      ]
    };
  }

  handleLanguage = (langValue) => {
    this.setState({selectNumber: langValue});
}
onSelectedType = (typeValue) => {
  this.setState({serviceType: typeValue});
}
onCurrencyChange = (Value) => {
  this.setState({currencyValue: Value});
}
onCountriesChange = (country) => {
  this.setState({myCountry: country});
}

  async componentDidUpdate() {
    //const data = await api.getServiceType();
    //console.log(data, 'data');
  }

  Providers = async() => { 
    try {
  const    data = await api.getProviders();
  this.setState({
    loading: false,
    providerData: data
  })
    } catch (error) {
      console.log(error); 
    }
  };
  ServiceTypeservice = async() => { 
    try {
  const    data = await api.getServiceType();
  this.setState({
    loading: false,
    serviceData: data
  })
    } catch (error) {
      console.log(error); 
    }
  };
  Currency = async() => { 
    try {
  const    data = await api.getCurrency();
  this.setState({
    loading: false,
    currencyData: data
  })
    } catch (error) {
      console.log(error); 
    }
  };

  Countries = async() => { 
    try {
  const    data = await api.getCountries();
  this.setState({
    loading: false,
    countriesData: data
  })
    } catch (error) {
      console.log(error); 
    }
  };
  

  componentDidMount() {

    this.Providers();
    this.ServiceTypeservice();
    this.Currency();
    this.Countries();
    
  }
  renderModel(){
   
    this.props.navigation.goBack();
}

  pickSingleWithCamera(cropping, mediaType = 'photo') {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then(image => {
        console.log('received image', image);
        this.setState({
          pickerModal: false,
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch(e => console.log(e));
  }

  pickSingle(cropit, circular = false, mediaType) {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    })
      .then(image => {
        this.setState({
          pickerModal: false,
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  continueAction = () => {
    const {
      selectNumber,
      countryName,
      serviceType,
      serviceDate,
      claimAccount,
      currencyValue,
      addNotes,
      currentPosition,
      myCountry,
      iBAN,
      swiftBIC,
      accountNumber,
      accountName,
      myCurrency,
      branchName,
      cityName,
      phoneNumber,
      emailName,
      bankName,
      bankAddress,
    } = this.state;
    if (currentPosition === 0) {
      if (
        serviceType === '' ||
        serviceDate === '' ||
        claimAccount === '' ||
        currencyValue=== ''
      ) {
        alert('Complete your claim details');
        return;
      }
    }

    if (currentPosition === 1) {
      if (this.state.image === null) {
        alert('Upload Image before continue');
        return;
      }
    }

    if (currentPosition === 2) {
      if (
        myCountry.trim() === '' ||
        swiftBIC.trim() === '' ||
        iBAN.trim() === '' ||
        accountNumber.trim() === '' ||
        accountName.trim() === '' ||
        myCurrency.trim() === '' ||
        branchName.trim() === '' ||
        cityName.trim() === '' ||
        phoneNumber.trim() === '' ||
        accountName.trim() === '' ||
        emailName.trim() === '' ||
        bankName.trim() === '' ||
        bankAddress.trim() === ''
      ) {
        alert('Complete your payment Details before continue');
        return;
      }

      if (!this.validateEmail(this.state.emailName)) {
        alert('invalid Email');
        return;
      }
    }

    if (this.state.currentPosition !== 3) {
      this.setState({currentPosition: this.state.currentPosition + 1});
    }
  };

  renderPickerModal() {
    const {pickerModal} = this.state;
    return (
      <Modal
        isVisible={pickerModal}
        style={{
          justifyContent: 'flex-end',
        }}
        onBackdropPress={() => this.setState({pickerModal: false})}
        onBackButtonPress={() => this.setState({pickerModal: false})}
        backdropColor="black"
        backdropOpacity={0.5}>
        <View
          style={{
            backgroundColor: 'white',
            height: 200,
            width: '100%',
            borderRadius: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => this.pickSingleWithCamera()}
            activeOpacity={0.9}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={CameraImage} style={{width: 100, height: 100}} />
            <Text style={{fontFamily: 'Roboto-Bold', paddingTop: 15}}>
              Camera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.pickSingle()}
            activeOpacity={0.9}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={GalleryImage} style={{width: 100, height: 100}} />
            <Text style={{fontFamily: 'Roboto-Bold', paddingTop: 15}}>
              Gallery
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  render() {
    const {claimID} = this.state;
    const {language} = this.props;
    return (
      <View style={styles.screen}>
        {this.renderPickerModal()}
        <ForgetModal
          isVisible={this.state.cancelModal}
          onBackdropPress={() => this.setState({cancelModal: false})}
          renderModel= {() => this.props.navigation.goBack()}
          hideModal={() => this.setState({cancelModal: false})}
          iconName="person"
          title="Attention"
          subTitle="Are you sure you want to cancel claim submission?"
        />
        <View style={styles.Headercontainer}>
          <View style={styles.topContainer}>
            <Text
              onPress={() => this.setState({cancelModal: true})}
              style={styles.textObj}>
              {strings({key: 'Cancel', language})}
            </Text>
            <Text style={[styles.textObj, {color: '#000'}]}>
              {' '}
              {strings({key: 'Save', language})}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.textObj,
                {textAlign: 'center', fontSize: normalizeFont(17)},
              ]}>
              {strings({key: 'SubmitReimbursementClaims', language})}
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
              <Text style={styles.textObj}>
                {' '}
                {strings({key: 'PolicyNumber', language})}
              </Text>
              <View
                style={{
                  flex: 0.65,
                  flexDirection: 'row',
                }}>
                <Text style={[styles.textObj, {paddingHorizontal: hp('1')}]}>
                  {claimID}
                </Text>
                {this.state.currentPosition !== 3 && (
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        currentPosition: this.state.currentPosition + 1,
                      })
                    }>
                    <Icons
                      size={hp('2.5')}
                      name="arrow-forward"
                      color="white"
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={{flex: 1}}>
              <StepIndicator
                onPress={item => this.setState({currentPosition: item})}
                style={{width: '100%'}}
                customStyles={customStyles}
                currentPosition={this.state.currentPosition}
                labels={language === 'English' ? labels : labelsAr}
                stepCount={4}
              />
            </View>
          </View>
          <View style={{flex: 1, backgroundColor: '#F7F7F7', padding: 10}}>
            {this.state.currentPosition == 0 ? (
              <ClaimDetails
                selectNumberValue={this.state.selectNumber}
                onSelectNumber={this.handleLanguage}
                countryValue={this.state.countryName}
                countyValueChange={text => this.setState({countryName: text})}
                serviceType={this.state.serviceType}
                serviceTypeChange={this.onSelectedType}
                serviceData={this.state.serviceData}
                serviceDate={this.state.serviceDate}
                serviceDateChange={date => this.setState({serviceDate: date})}
                claimAccount={this.state.claimAccount}
                claimAccountChange={text => this.setState({claimAccount: text})}
                currencyValue={this.state.currencyValue}
                currencyValueChange={this.onCurrencyChange}
                currencyData={this.state.currencyData}
                addNotes={this.state.addNotes}
                addNotesChange={text => this.setState({addNotes: text})}
              />
            ) : this.state.currentPosition === 1 ? (
              <NeededDocuments
                image={this.state.image}
                showActionSheet={() => this.setState({pickerModal: true})}
              />
            ) : this.state.currentPosition === 2 ? (
              <PaymentMethod
                myCountry={this.state.myCountry}
                myCountryValueChange={this.onCountriesChange}
                countriesData={this.state.countriesData}
                iBAN={this.state.iBAN}
                iBANValueChange={text => this.setState({iBAN: text})}
                swiftBIC={this.state.swiftBIC}
                swiftBICValueChange={text => this.setState({swiftBIC: text})}
                accountNumber={this.state.accountNumber}
                accountValueChange={text =>
                  this.setState({accountNumber: text})
                }
                accountName={this.state.accountName}
                accountNameChange={text => this.setState({accountName: text})}
                bankName={this.state.bankName}
                bankNameChange={text => this.setState({bankName: text})}
                bankAddress={this.state.bankAddress}
                bankAddressChange={text => this.setState({bankAddress: text})}
                currencyValue={this.state.currencyValue}
                currencyValueChange={this.onCurrencyChange}
                currencyData={this.state.currencyData}
                branchName={this.state.branchName}
                branchNameChange={text => this.setState({branchName: text})}
                cityName={this.state.cityName}
                cityNameChange={text => this.setState({cityName: text})}
                phoneNumber={this.state.phoneNumber}
                phoneNumberChange={text => this.setState({phoneNumber: text})}
                emailName={this.state.emailName}
                emailChange={text => this.setState({emailName: text})}
              />
            ) : (
              <Confirmation
                selectMember={this.state.selectNumber}
                selectMemberChange={text => this.setState({selectNumber: text})}
                countyValue={this.state.countryName}
                countyValueChange={text => this.setState({countryName: text})}
                serviceType={this.state.serviceType}
                serviceTypeChange={text => this.setState({serviceType: text})}
                serviceDate={this.state.serviceDate}
                serviceDateChange={date => this.setState({serviceDate: date})}
                claimAccount={this.state.claimAccount}
                claimAccountChange={text => this.setState({claimAccount: text})}
                currencyValue={this.state.currencyValue}
                currencyValueChange={text =>
                  this.setState({currencyValue: text})
                }
                addNotes={this.state.addNotes}
                addNotesChange={text => this.setState({addNotes: text})}
                image={this.state.image}
                myCountry={this.state.myCountry}
                myCountryValueChange={text => this.setState({myCountry: text})}
                iBAN={this.state.iBAN}
                iBANValueChange={text => this.setState({iBAN: text})}
                swiftBIC={this.state.swiftBIC}
                swiftBICValueChange={text => this.setState({swiftBIC: text})}
                accountNumber={this.state.accountNumber}
                accountValueChange={text =>
                  this.setState({accountNumber: text})
                }
                accountName={this.state.accountName}
                accountNameChange={text => this.setState({accountName: text})}
                bankName={this.state.bankName}
                bankNameChange={text => this.setState({bankName: text})}
                bankAddress={this.state.bankAddress}
                bankAddressChange={text => this.setState({bankAddress: text})}
                branchName={this.state.branchName}
                branchNameChange={text => this.setState({branchName: text})}
                cityName={this.state.cityName}
                cityNameChange={text => this.setState({cityName: text})}
                phoneNumber={this.state.phoneNumber}
                phoneNumberChange={text => this.setState({phoneNumber: text})}
                emailName={this.state.emailName}
                emailChange={text => this.setState({emailName: text})}
                showActionSheet={() => this.setState({pickerModal: true})}
              />
            )}
          </View>
          <TouchableOpacity
            onPress={() => this.continueAction()}
            activeOpacity={0.9}
            style={{
              backgroundColor: PrimaryColor,
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {this.state.currentPosition === 3 ? (
              <DefaultText style={{color: 'white', fontSize: 20}}>
                {strings({key: 'Submit', language})}
              </DefaultText>
            ) : (
              <DefaultText style={{color: 'white', fontSize: 20}}>
                {strings({key: 'Continue', language})}
              </DefaultText>
            )}
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

const mapStateToProps = state => {
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(Screen);
