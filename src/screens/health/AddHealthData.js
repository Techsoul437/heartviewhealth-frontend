import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';
import { useTheme } from '../../theme/ThemeContext';
import { RFValue } from 'react-native-responsive-fontsize';
import CommonHeader from '../../components/CommonHeader';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colour';
import CommonTextInput from '../../components/CommonTextInput';
import CommonDatePickerInput from '../../components/CommonDatePickerInput';
import CommonButton from '../../components/CommonButton';
import ImagesPath from '../../constants/ImagesPath';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

const AddHealthData = ({ route }) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { healthData } = route?.params || {};

  useContext(LanguageContext);
  const [sugar, setSugar] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [date, setDate] = useState(null);
  const [labName, setLabName] = useState('');
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
          title={healthData ? i18n.t('scan_Report') : i18n.t('Add_Health_Data')}
          subTitle={
            healthData ? i18n.t('scan_Report_Desc') : i18n.t('add_Helth_Desc')
          }
        />
      </TouchableOpacity>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {healthData && (
            <TouchableOpacity>
              <View
                style={[
                  styles.shadowDocument,
                  { shadowColor: theme.shadowColor },
                ]}
              >
                <View
                  style={[
                    styles.documentContainer,
                    {
                      backgroundColor: theme.innerBackground,
                      borderColor: theme.inputBorder,
                    },
                  ]}
                >
                  <View style={styles.innerDocument}>
                    <View
                      style={[
                        styles.perimssionContainer,
                        {
                          backgroundColor: COLORS.lightGreen.slice(0, 7) + '20',
                        },
                      ]}
                    >
                      <Image
                        source={ImagesPath.document}
                        style={[
                          styles.permssionIcon,
                          { tintColor: COLORS.lightGreen },
                        ]}
                      />
                    </View>
                    <View>
                      <Text
                        style={[styles.documentName, { color: theme.text }]}
                      >
                        Phone Verification.png
                      </Text>
                      <Text
                        style={[
                          styles.documentSize,
                          { color: COLORS.cyanGray },
                        ]}
                      >
                        96.3 KB
                      </Text>
                    </View>
                  </View>
                  <Image source={ImagesPath.correct} style={styles.correct} />
                </View>
              </View>
            </TouchableOpacity>
          )}

          <View
            style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
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
              <Text style={[styles.heading, { color: theme.text }]}>
                {i18n.t('provideHealthDetails')}
              </Text>
              <CommonTextInput
                label={i18n.t('bloodSugarLevel')}
                placeholder="ex. 95"
                value={sugar}
                onChangeText={text => {
                  setSugar(text);
                }}
              />
              <CommonTextInput
                label={i18n.t('bloodPressureLevel')}
                placeholder="ex. 85"
                value={bloodPressure}
                onChangeText={text => {
                  setBloodPressure(text);
                }}
              />
              <CommonDatePickerInput
                label={i18n.t('testDate')}
                placeholder={i18n.t('testDate')}
                value={date}
                onChange={date => {
                  setDate(date);
                }}
              />
              <CommonTextInput
                label={i18n.t('labName')}
                placeholder={i18n.t('enterLabName')}
                value={labName}
                onChangeText={text => {
                  setLabName(text);
                }}
              />
            </View>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <View
                style={[
                  styles.shadowButton,
                  { shadowColor: theme.shadowColor },
                ]}
              >
                <View
                  style={[
                    styles.Button,
                    {
                      backgroundColor: theme.innerBackground,
                      borderColor: theme.inputBorder,
                      width: width / 2.3,
                    },
                  ]}
                >
                  <Text style={[styles.cancel, { color: theme.text }]}>
                    {i18n.t('cancel')}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <CommonButton
              label={i18n.t('confirmAndSave')}
              btnStyles={{ width: width / 2.3 }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddHealthData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
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
    borderRadius: RFValue(15),
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(12),
    borderWidth: 1,

    // gap: RFValue(10),
    // justifyContent:'center'
  },
  heading: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(14),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: RFValue(15),
    // alignItems:'center'
  },
  shadowButton: {
    // borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    // marginTop: RFValue(20),
    // marginHorizontal: 10,
  },

  Button: {
    borderRadius: 10,
    paddingVertical: RFValue(12),
    // paddingHorizontal: RFValue(12),
    width: RFValue(150),
    alignItems: 'center',
    borderWidth: 1,
    gap: RFValue(10),
  },
  cancel: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(12),
    textAlign: 'center',
  },
  shadowDocument: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(20),
  },
  documentContainer: {
    borderRadius: RFValue(15),
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(12),
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: RFValue(10),
  },
  permssionIcon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },
  perimssionContainer: {
    // padding:10,
    height: 40,
    width: 40,
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerDocument: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: RFValue(10),
  },
  documentName: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
  },
  documentSize: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(11),
  },
  correct: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
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
