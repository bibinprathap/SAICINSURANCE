import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Image,
} from 'react-native';
import Panel from '../Panel';
import {PrimaryColor, assetColor} from '../../config';
import {connect} from 'react-redux';
import DefaultText from '../DefaultText';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import uploadHelper from '../../api/helperServices/upload';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import CameraImage from '../../assets/src_assets_camera.png';
import GalleryImage from '../../assets/src_assets_gallery.png';
import strings from '../../api/helperServices/language';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

class ClaimDetailScreen extends Component {
  constructor(props) {
    super(props);

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
        //const uri =image.path.indexOf('file')==-1? `file://${image.path}`:image.path;
        // const uri =imagePicker.uri;
        const uri = image.path.replace('file://', '');
        const formData = {
          ClaimId: '7',
          CreatedBy: '2',
          DocType: '1',
          customUploadId: `u-${new Date().getTime()}`,
        };
        formData.uploadId = formData.customUploadId;
        // this.props.dispatch(
        //   infoChanged(formData.documentType, formData.customUploadId),
        // );
        uploadHelper
          .startUpload(uri, formData, 'api/SaveFile', '')
          .then(res => {
            console.log('res', res);
            // alertsHelper.hideAlert();
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

        // const uri = `file://${image.path}`;

        //  const uri =image.path.indexOf('file')==-1? `file://${image.path}`:image.path;
        // const uri =imagePicker.uri;
        const uri = image.path.replace('file://', '');
        const formData = {
          ClaimId: '7',
          CreatedBy: '2',
          DocType: '1',
          customUploadId: `u-${new Date().getTime()}`,
        };
        formData.uploadId = formData.customUploadId;
        // this.props.dispatch(
        //   infoChanged(formData.documentType, formData.customUploadId),
        // );
        uploadHelper
          .startUpload(uri, formData, 'api/SaveFile', '')
          .then(res => {
            console.log('res', res);
            // alertsHelper.hideAlert();
          });
      })
      .catch(e => {
        console.log(e);
      });
  }

  renderPickerModal() {
    const {pickerModal} = this.state;
    const {language} = this.props;
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
              {strings({key: 'Camera', language})}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.pickSingle()}
            activeOpacity={0.9}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={GalleryImage} style={{width: 100, height: 100}} />
            <Text style={{fontFamily: 'Roboto-Bold', paddingTop: 15}}>
              {strings({key: 'Gallery', language})}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  render() {
    const {language} = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderPickerModal()}
        <Panel
          header={strings({key: 'NeededDocuments', language})}
          maxItem={250}>
          <View style={{margin: 10, backgroundColor: 'white', flex: 1}}>
            <DefaultText style={{fontSize: normalizeFont(16)}}>
              {strings({key: 'ClaimDetails', language})}
              <Text style={{color: PrimaryColor, fontSize: normalizeFont(20)}}>
                *
              </Text>
            </DefaultText>
            <DefaultText style={{fontSize: normalizeFont(16)}}>
              {strings({key: 'Invoice', language})}
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

        <View>{this.props.children}</View>
        {/* <Panel
          header={strings({key: 'UploadedDocuments', language})}
          maxItem={this.props.Maxlength}>
         
          <ImageBackground
            source={this.state.image}
            style={{margin: 10, backgroundColor: 'white', flex: 1}}>
            {Platform.OS === 'android' ? (
              <TouchableOpacity
                onPress={() => this.setState({pickerModal: true})}
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
        {/* <Panel header="Add Documents" maxItem={250}>
          <View style={{margin: 10, backgroundColor: 'white', flex: 1}} />
        </Panel> */}
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

const mapStateToProps = state => {
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(ClaimDetailScreen);
