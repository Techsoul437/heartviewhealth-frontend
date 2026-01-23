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
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';
import ImagesPath from '../../constants/ImagesPath';
import CommonHeader from '../../components/CommonHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import CommonTextInput from '../../components/CommonTextInput';
import CommonRadioGroup from '../../components/CommonRadioGroup';
import CommonDropdown from '../../components/CommonDropdown';
import CommonDatePickerInput from '../../components/CommonDatePickerInput';
import GradientButton from '../../components/GradientButton';

const AddMedication = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [schedule, setSchedule] = useState('');
  const [customDate,setCustomDate] = useState('')
  const [time,setTime] =useState('')
  const [dosage,setDosage] = useState('')
  const [medicineName,setMedicineName] = useState('')

  console.log("schedule",schedule)
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
          title={i18n.t('addMedication')}
          subTitle={i18n.t('addMedicationDecs')}
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
                label={i18n.t('medicineName')}
                placeholder={i18n.t('medicineName')}
                value={medicineName}
                onChangeText={text => {
                  setMedicineName(text);
                }}
              />
              <CommonTextInput
                label={i18n.t('dosage')}
                placeholder={i18n.t('dosageNumber')}
                value={dosage}
                onChangeText={text => {
                  setDosage(text);
                }}
              />
              <CommonRadioGroup
                label={i18n.t('time')}
                options={[
                  { label: [i18n.t('morning')], value: 'morning' },
                  { label: [i18n.t('afternoon')], value: 'afternoon' },
                  { label: [i18n.t('night')], value: 'night' },
                ]}
                  value={time}
                  onChange={val => {
                    setTime(val);
                    // setBloodPressureError('');
                  }}
                  // error={bloodPressureError}
              />
              <CommonDropdown
                label={i18n.t('repeatSchedule')}
                value={schedule}
                setValue={val => {
                  setSchedule(val);
                  // setCountryError('');
                }}
                items={[
                  { label: [i18n.t('everyDay')], value: 'Every Day' },
                  { label: [i18n.t('alternateDays')], value: 'Alternate Days' },
                  { label: [i18n.t('customDates')], value: 'Custom Dates' },
                ]}
                placeholder={i18n.t('selectSchedule')}
                //   error={countryError}
              />

              {schedule == [i18n.t('customDates')] && (
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
              <GradientButton
                  title={i18n.t('save')}
                  onPress={()=>navigation.goBack()}
                  style={{ marginBottom: RFValue(12) }}
                />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddMedication;

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
