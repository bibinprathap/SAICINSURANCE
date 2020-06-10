import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActionSheetIOS,
  Platform,
  ImageBackground,
  Image,
} from 'react-native';
import Panel from '../Panel';
import {PrimaryColor, assetColor} from '../../config';
import ClaimDetails from '../ClaimDetails';
import DefaultText from '../DefaultText';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import CameraImage from '../../assets/src_assets_camera.png';
import GalleryImage from '../../assets/src_assets_gallery.png';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

var BUTTONS = ['Iraqi dinar', 'US dollar', 'Other', 'Cancel'];
var CANCEL_INDEX = 3;

class ClaimDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.onPress = Platform.OS === 'ios' && this.showActionSheet.bind(this);
    this.pickSingle = this.pickSingle.bind(this);
    this.state = {
      image: null,
      images: null,
      pickerModal: false,
    };
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

  showActionSheet = () => {
    console.log('hello');
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Take Photo', 'Photo Library', 'Browser', 'Cancel'],
        cancelButtonIndex: 3,
        // destructiveButtonIndex: DESTRUCTIVE_INDEX,
      },
      buttonIndex => {
        console.log(buttonIndex, 'buttonIndex');
        if (buttonIndex === 0) {
          this.pickSingleWithCamera(false);
        } else if (buttonIndex === 1) {
          this.pickSingle(false);
        }
      },
    );
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

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderPickerModal()}
        <Panel header="Needed Documents" maxItem={250}>
          <View style={{margin: 10, backgroundColor: 'white', flex: 1}}>
            <DefaultText style={{fontSize: normalizeFont(16)}}>
              Claim Details{' '}
              <Text style={{color: PrimaryColor, fontSize: normalizeFont(20)}}>
                *
              </Text>
            </DefaultText>
            <DefaultText style={{fontSize: normalizeFont(16)}}>
              Invoice{' '}
              <Text style={{color: PrimaryColor, fontSize: normalizeFont(20)}}>
                *
              </Text>
            </DefaultText>
            <DefaultText
              style={{
                paddingTop: 10,
                color: PrimaryColor,
                fontSize: normalizeFont(16),
              }}>
              Plaese note that other documents might be needed depending on the
              claim service type. policy terms & conditions, and health care
              providers country. Other documents can be
            </DefaultText>
          </View>
        </Panel>
        <Panel header="Uploaded Documents" maxItem={250}>
          <ImageBackground
            source={this.props.image}
            style={{margin: 10, backgroundColor: 'white', flex: 1}}>
            {Platform.OS === 'android' ? (
              <TouchableOpacity
                onPress={() => this.setState({pickerModal: true})}
                // onPress={Platform.OS === 'android' && this.showActionSheet}
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
            ) : (
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
        </Panel>
        <Panel header="Add Documents" maxItem={250}>
          <View style={{margin: 10, backgroundColor: 'white', flex: 1}} />
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

export default ClaimDetailScreen;
