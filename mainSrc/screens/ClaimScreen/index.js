import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
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
import DefaultText from '../../components/DefaultText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import strings from '../../api/helperServices/language';
const {width, height} = Dimensions.get('screen');
const normalizeFont = size => {
  return size * (width * 0.0025);
};

class ClaimScreen extends Component {
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
          year: 2020,
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
        },
      ],

      dataSourceAr: [
        {
          id: 0,
          date: 'Apr 2',
          status: 'تمت معالجتها',
          claimType: 'مباشرة',
          provider: 'مركز طه الطبي',
          serviceType: 'العيادات الخارجية',
          claimedAmount: 0,
          claimReference: 'C00121241198/1',
          year: 2020,
        },
        {
          id: 1,
          date: 'Mar 29',
          status: 'غير مستعمل',
          claimType: 'مباشرة',
          provider: 'مركز صيدلية طه',
          serviceType: 'العيادات الخارجية',
          claimedAmount: 0,
          claimReference: 'C00121241198/1',
        },
      ],
    };
  }

  renderItem = item => {
    let dataItem = item.item;
    const {language} = this.props;
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFont(26),
            color: PrimaryColor,
            paddingBottom: hp('1'),
          }}>
          {dataItem.year}
        </Text>

        <View style={styles.renderItem}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{dataItem.date}</Text>
          </View>
          <View style={{width: 2, height: '80%', backgroundColor: '#ccc'}} />
          <View style={{flex: 0.8}}>
            <View style={styles.valueContainer}>
              <View
                style={[
                  styles.topView,
                  {
                    backgroundColor:
                      dataItem.status == 'Processed' ? PrimaryColor : '#ccc',
                  },
                ]}
              />
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color:
                    dataItem.status === 'Processed' ? PrimaryColor : '#ccc',
                }}>
                {dataItem.status}
              </Text>
            </View>
            <View style={{flex: 0.9}}>
              <View style={styles.valueContain}>
                <View style={styles.keyValue}>
                  <Icons
                    size={hp('2.5')}
                    style={{alignSelf: 'center'}}
                    name="assignment"
                    color="#000"
                  />
                  <Text style={{paddingLeft: 5}}>
                    {' '}
                    {strings({key: 'ClaimType', language})}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.8,
                    justifyContent: 'center',
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      textAlign: 'right',
                      color: 'grey',
                      fontFamily: 'Roboto-Light',
                    }}>
                    {dataItem.claimType}
                  </Text>
                </View>
              </View>
              <View style={styles.valueContain}>
                <View style={styles.keyValue}>
                  <Icons
                    size={hp('2.5')}
                    style={{alignSelf: 'center'}}
                    name="store"
                    color="#000"
                  />
                  <Text style={{paddingLeft: 5}}>
                    {' '}
                    {strings({key: 'Provider', language})}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.8,
                    justifyContent: 'center',
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      textAlign: 'right',
                      color: 'grey',
                      fontFamily: 'Roboto-Light',
                    }}>
                    {dataItem.provider}
                  </Text>
                </View>
              </View>
              <View style={styles.valueContain}>
                <View style={styles.keyValue}>
                  <Icons
                    size={hp('2.5')}
                    style={{alignSelf: 'center'}}
                    name="assignment"
                    color="#000"
                  />
                  <Text style={{paddingLeft: 5}}>
                    {strings({key: 'ServiceType', language})}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.8,
                    justifyContent: 'center',
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      textAlign: 'right',
                      color: 'grey',
                      fontFamily: 'Roboto-Light',
                    }}>
                    {dataItem.serviceType}
                  </Text>
                </View>
              </View>
              <View style={styles.valueContain}>
                <View style={styles.keyValue}>
                  <Icons
                    size={hp('2.5')}
                    style={{alignSelf: 'center'}}
                    name="payment"
                    color="#000"
                  />
                  <Text style={{paddingLeft: 5}}>
                    {strings({key: 'ClaimedAmount', language})}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.8,
                    justifyContent: 'center',
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      textAlign: 'right',
                      color: 'grey',
                      fontFamily: 'Roboto-Light',
                    }}>
                    {dataItem.claimedAmount}
                  </Text>
                </View>
              </View>
              <View style={styles.valueContain}>
                <View style={styles.keyValue}>
                  <Icons
                    size={hp('2.5')}
                    style={{alignSelf: 'center'}}
                    name="payment"
                    color="#000"
                  />
                  <Text style={{paddingLeft: 5}}>
                    {strings({key: 'ClaimedReference', language})}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.8,
                    justifyContent: 'center',
                    paddingRight: 10,
                  }}>
                  <Text
                    style={{
                      textAlign: 'right',
                      color: 'grey',
                      fontFamily: 'Roboto-Light',
                    }}>
                    {dataItem.claimReference}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  render() {
    const {language} = this.props;
    return (
      <View style={styles.screen}>
        <Header
          Back
          Claims
          navigation={this.props.navigation}
          Heading={strings({key: 'claim', language})}
        />
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.headerView}>
            <View style={{flex: 0.8}}>
              <Text style={styles.BeneficiaryText}>
                {strings({key: 'Beneficiary', language})}
              </Text>
            </View>

            <View style={styles.RightView}>
              <Text style={[styles.textObj, {paddingRight: hp('1')}]}>
                {strings({key: 'Myself', language})}
              </Text>
              <Icons
                size={hp('2.5')}
                style={{alignSelf: 'center'}}
                name="arrow-forward"
                color="white"
              />
            </View>
          </View>

          <View
            style={{
              flex: 0.9,
              justifyContent: 'space-between',
              backgroundColor: '#F7F7F7',
            }}>
            <View
              style={[
                styles.middleContainer,
                {
                  margin: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              ]}>
                  <TouchableOpacity
                onPress={() => this.props.navigation.navigate('searchWithFilters')}
                >
              <Icons
                size={hp('3')}
                style={{alignSelf: 'center'}}
                name="search"
                color="#ccc"
              />
              </TouchableOpacity>
              <View>
              
                <TextInput
                  placeholder="Claim external e.g PB000001"
                  placeholderTextColor="#ccc"
                  style={{fontSize: normalizeFont(16), paddingLeft: 10}}
                />
              </View>
            </View>

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
                    : this.state.dataSourceAr
                }
                keyExtractor={(item, index) => item.id}
                renderItem={itemDtata => this.renderItem(itemDtata)}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SubmitClaim')}
              activeOpacity={0.9}
              style={{
                backgroundColor: PrimaryColor,
                height: 50,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <DefaultText style={{color: 'white', fontSize: 20}}>
                <Text style={{fontSize: 30}}>+</Text>
                {''} <Text>{strings({key: 'SUBMITCLAIM', language})}</Text>
              </DefaultText>
            </TouchableOpacity>
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
    paddingBottom: hp('2'),
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
  // Redux Store --> Component
  return {
    language: state.language.defaultLanguage,
  };
};

export default connect(mapStateToProps)(ClaimScreen);
