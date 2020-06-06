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
} from 'react-native';
import Panel from '../Panel';
import {PrimaryColor, assetColor} from '../../config';
import ClaimDetails from '../ClaimDetails';
import DefaultText from '../DefaultText';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
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
        console.log('received image', image);
        this.setState({
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
          //   this.pickSingleWithCamera(false);
        } else if (buttonIndex === 1) {
          this.pickSingle(false);
        }
      },
    );
  };
  render() {
    return (
      <View>
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
            source={this.state.image}
            style={{margin: 10, backgroundColor: 'white', flex: 1}}>
            <TouchableOpacity
              onPress={this.showActionSheet}
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
          </ImageBackground>
        </Panel>
        <Panel header="Add Documents" maxItem={250}>
          <View style={{margin: 10, backgroundColor: 'white', flex: 1}} />
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
