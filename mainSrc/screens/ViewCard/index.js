import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Header from '../../components/Header';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {PrimaryColor} from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import strings from '../../api/helperServices/language';
import DefaultText from '../../components/DefaultText';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};
const cards = {
  text: 'Card One',
  name: 'One',
  image: require('./img/swiper-2.png'),
};
var windowSize = Dimensions.get('window');
class VewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 0,
          date: 'Apr 2',
          status: 'Processed',
          claimType: 'Direct',
          provider: 'Taha Medical Center',
          serviceType: 'Out-Patient',
          claimedAmount: 0,
          claimReference: 'C00121241198/1',
          name: 'BIBIN PRATHAP ABRAHAM PRATAP',
          image: require('./img/swiper-2.png'),
        },
        {
          id: 1,
          date: ' Mar 29',
          status: 'Not Used',
          claimType: 'Direct',
          provider: 'Taha Pharmacy Center',
          serviceType: 'Out-Patient',
          claimedAmount: 0,
          claimReference: 'C00121241198/1',
          name: 'MYSELF',
          image: require('./img/swiper-3.png'),
        },
      ],

      dataSourceAR: [
        {
          id: 0,
          date: 'Apr 2',
          status: 'تمت معالجتها',
          claimType: 'مباشرة',
          provider: 'مركز طه الطبي',
          serviceType: 'العيادات الخارجية',
          claimedAmount: 0,
          claimReference: 'C00121241198/1',
          name: 'BIBIN PRATHAP ABRAHAM PRATAP',
          image: require('./img/swiper-2.png'),
        },
        {
          id: 1,
          date: ' Mar 29',
          status: 'غير مستعمل',
          claimType: 'مباشرة',
          provider: 'مركز صيدلية طه',
          serviceType: 'العيادات الخارجية',
          claimedAmount: 0,
          claimReference: 'C00121241198/1',
          name: 'MYSELF',
          image: require('./img/swiper-3.png'),
        },
      ],
    };
  }

  renderItem = item => {
    let dataItem = item.item;
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: normalizeFont(14),
              color: '#000000',
              paddingBottom: hp('1'),
            }}>
            {dataItem.name}
          </Text>
          <Icons
            size={hp('2.5')}
            style={{position: 'absolute', right: 0}}
            name="file-download"
            color={PrimaryColor}
          />
        </View>
        <Image
          style={{height: 320, width: windowSize.width, flex: 1}}
          source={dataItem.image}
        />
      </View>
    );
  };
  render() {
    const {language} = this.props;
    return (
      <View style={styles.screen}>
        <Header
          Back
          navigation={this.props.navigation}
          Heading={strings({key: 'ViewECard', language})}
        />
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.headerView}>
            <View style={{flex: 0.8}}>
              <Text style={styles.BeneficiaryText}>
                {strings({key: 'PolicyNumber', language})}
              </Text>
            </View>

            <View style={styles.RightView}>
              <Text style={[styles.textObj, {paddingRight: hp('1')}]}>
                GRX-5835
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 0.9,
              justifyContent: 'space-between',
              backgroundColor: '#F7F7F7',
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#F7F7F7',
                paddingHorizontal: hp('2'),
                paddingTop: 10,
              }}>
              <FlatList
                data={
                  language === 'English'
                    ? this.state.dataSource
                    : this.state.dataSourceAR
                }
                keyExtractor={(item, index) => item.id}
                renderItem={itemDtata => this.renderItem(itemDtata)}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: PrimaryColor,
  },
  headerView: {
    flex: 0.1,
    backgroundColor: PrimaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: hp('1'),
  },
  BeneficiaryText: {
    color: '#fff',
    paddingLeft: 15,
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  RightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.3,
    paddingRight: hp('1'),
  },
  textObj: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  headerIcon: {
    flex: 1,
    flexDirection: 'row',
  },
  changePolicy: {
    paddingHorizontal: hp('1.5'),
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Roboto-Bold',
  },
  middleContainer: {
    height: hp('6'),
    backgroundColor: 'white',
    marginTop: hp(-'3'),
    marginHorizontal: hp('2'),
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
    borderRadius: 5,
    elevation: 4,
    paddingLeft: 5,
  },
  renderItem: {
    height: hp('28'),
    width: '97%',
    backgroundColor: '#fff',
    margin: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  dateText: {
    textAlign: 'center',
    color: PrimaryColor,
    fontSize: normalizeFont(30),
  },
  valueContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  topView: {
    height: hp('1'),
    width: hp('1'),

    borderRadius: hp('1'),
    marginRight: hp('1'),
  },
  valueContain: {
    height: hp('4.5'),
    width: '100%',
    marginBottom: 5,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  keyValue: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: PrimaryColor,
  },
  middleText: {
    textAlign: 'center',
    color: PrimaryColor,
    fontFamily: 'Roboto-Medium',
  },
  renderContainer: {
    height: hp('13'),
    width: '33%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageView: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: hp('7'),
    height: hp('7'),
    borderRadius: hp('4'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreContainer: {
    height: hp('10'),
    width: hp('20'),
    marginRight: hp('1'),
    justifyContent: 'space-around',
    paddingLeft: hp('1'),
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row',
    paddingRight: 10,
    elevation: 4,
  },
  moreNextView: {
    flex: 0.3,
    paddingTop: hp('3'),
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 0.7,
    marginHorizontal: hp('2'),
    backgroundColor: 'white',
    marginTop: hp('1.5'),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 4,
  },
  providerText: {
    color: 'black',
    fontFamily: 'Roboto-Bold',
    fontSize: normalizeFont(17),
    paddingTop: hp('1'),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.1,
    paddingBottom: hp('1'),
  },
  searchContainer: {
    flex: 0.12,
    flexDirection: 'row',
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
    paddingVertical: hp('1'),
  },
  bottomContainer: {
    flex: 0.25,
    marginHorizontal: hp('2'),
    paddingHorizontal: hp('1'),
    paddingVertical: hp('1'),
  },
  moreText: {
    color: 'black',
    fontFamily: 'Roboto-Bold',
    fontSize: normalizeFont(17),
    paddingTop: hp('1'),
    paddingBottom: hp('1'),
  },
});

const mapStateToProps = state => {
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(VewCard);
