import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import { RFValue } from 'react-native-responsive-fontsize';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';
import CommonHeader from '../../components/CommonHeader';
import ImagesPath from '../../constants/ImagesPath';
import { COLORS } from '../../constants/Colour';
import { FONTS } from '../../constants/Fonts';
import { useNavigation } from '@react-navigation/native';

const UploadScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  useContext(LanguageContext);
 
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={ImagesPath.leftArrow}
          style={[styles.leftIcon, { tintColor: theme.text }]}
        />
        <CommonHeader
          title={i18n.t('scan_Report')}
          subTitle={i18n.t('scan_Report_Desc')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
        onPress={() =>
          navigation.navigate('AddHealthData', {
            healthData: {
              bloodSugar: 95,
              bloodPressure: 85,
              date: '2024-12-28',
              labName: 'City Medical Lab',
            },
          })
        }
      >
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor: theme.innerBackground,
              borderColor: theme.inputBorder,
            },
          ]}
        >
          <Image source={ImagesPath.upload} style={[styles.uploadIcon]} />
          <Text style={[styles.uploadReport, { color: theme.text }]}>
            {i18n.t('Upload_Report')}
          </Text>
          <Text style={[styles.uploadnote, { color: COLORS.cyanGray }]}>
            {i18n.t('uploadnote')}
          </Text>
          <Text style={[styles.uploadnote2, { color: COLORS.cyanGray }]}>
            {i18n.t('uploadnote2')}
          </Text>
        </View>
      </TouchableOpacity>
      <View />
    </SafeAreaView>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
    justifyContent: 'space-between',
  },
  shadowWrapper: {
    // borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(20),
    // marginHorizontal: 10,
  },

  innerContainer: {
    borderRadius: RFValue(20),
    paddingVertical: RFValue(25),
    // paddingHorizontal: RFValue(12),
    borderWidth: 1,
    borderStyle: 'dashed',
    gap: RFValue(10),
    // justifyContent:'center'
    alignItems: 'center',
  },
  uploadIcon: {
    height: RFValue(45),
    width: RFValue(45),
    resizeMode: 'contain',
    tintColor: COLORS.softGray,
  },
  uploadReport: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(14),
  },
  uploadnote: {
    fontFamily: FONTS.LIGHT,
    fontSize: RFValue(12),
  },
  uploadnote2: {
    fontFamily: FONTS.LIGHT,
    fontSize: RFValue(11),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(10),
  },
  leftIcon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },
});
