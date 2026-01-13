import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/ThemeContext';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagesPath from '../../constants/ImagesPath';
import CommonHeader from '../../components/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import CommonTextInput from '../../components/CommonTextInput';
import CommonDropdown from '../../components/CommonDropdown';
import CommonDatePickerInput from '../../components/CommonDatePickerInput';
import GradientButton from '../../components/GradientButton';
import CommonTimePickerInput from '../../components/CommonTimePickerInput';

const AddDoctorAppointment = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  useContext(LanguageContext);
  const [schedule, setSchedule] = useState('');
  const [customDate, setCustomDate] = useState('');
  const [time, setTime] = useState(null);
  const [drName,setDrName] = useState('') 
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
          title={i18n.t('addDoctorAppointment')}
          subTitle={i18n.t('addDoctorNote')}
        />
      </TouchableOpacity>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
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
              <CommonTextInput
                label={i18n.t('doctorOrHospitalName')}
                placeholder={i18n.t('doctorOrHospitalName')}
                value={drName}
                onChangeText={text => {
                  setDrName(text);
                }}
              />

              <CommonDropdown
                label={i18n.t('interval')}
                value={schedule}
                setValue={val => {
                  setSchedule(val);
                  // setCountryError('');
                }}
                items={[
                  { label: [i18n.t('threeMonths')], value: '3 Months' },
                  { label: [i18n.t('thirtyMonths')], value: '30 Months' },
                  { label: [i18n.t('customDates')], value: 'Custom Dates' },
                ]}
                placeholder={i18n.t('selectInterval')}
                //   error={countryError}
              />
              {schedule == 'Custom Dates' && (
                <CommonDatePickerInput
                  label={i18n.t('customDates')}
                  value={customDate}
                  placeholder={i18n.t('customDates')}
                  onChange={date => {
                    setCustomDate(date);
                    //   setDobError('');
                  }}
                  //   error={dobError}
                />
              )}
              <CommonTimePickerInput
                label={i18n.t('time')}
                value={time}
                placeholder={i18n.t('time')}
                onChange={selectedTime => setTime(selectedTime)}
                
              />
              <GradientButton
                title="Save"
                onPress={() => navigation.goBack()}
                style={{ marginBottom: RFValue(12) }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddDoctorAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
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
});
