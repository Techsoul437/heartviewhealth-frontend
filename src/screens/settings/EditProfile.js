import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../../constants/Fonts';
import CommonTextInput from '../../components/CommonTextInput';
import CommonDatePickerInput from '../../components/CommonDatePickerInput';
import CommonRadioGroup from '../../components/CommonRadioGroup';
import CommonDropdown from '../../components/CommonDropdown';
import GradientButton from '../../components/GradientButton';
import { COLORS } from '../../constants/Colour';
import ImagesPath from '../../constants/ImagesPath';

const EditProfile = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('abc');
  const [email, setEmail] = useState('abc@gmail.com');
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState('male');
  const [country, setCountry] = useState(null);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [dobError, setDobError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [genderError, setGenderError] = useState('');

  const onContinue = () => {
    navigation.goBack();
    let valid = true;

    if (!fullName.trim()) {
      setNameError('Please enter full name');
      valid = false;
    }

    if (!dob) {
      setDobError('Please select date of birth');
      valid = false;
    }

    if (!gender) {
      setGenderError('Please select gender');
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Please enter email address');
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter valid email');
      valid = false;
    }

    if (!country) {
      setCountryError('Please select country');
      valid = false;
    }

    if (!valid) return;

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, marginBottom: 50 }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
            >
              <View
                style={[
                  styles.innerContainer,
                  { backgroundColor: theme.innerBackground },
                ]}
              >
                <TouchableOpacity
                  style={styles.headerBack}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    source={ImagesPath.leftArrow}
                    style={styles.leftIcon}
                  />
                  <Text style={[styles.back, { color: theme.text }]}>Back</Text>
                </TouchableOpacity>
                <Text style={[styles.profileText, { color: theme.text }]}>
                  Edit your profile
                </Text>
                <CommonTextInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChangeText={text => {
                    setFullName(text);
                    setNameError('');
                  }}
                  error={nameError}
                />

                <CommonDatePickerInput
                  label="Date of Birth"
                  value={dob}
                  placeholder="Your date of birth"
                  onChange={date => {
                    setDob(date);
                    setDobError('');
                  }}
                  error={dobError}
                />

                <CommonRadioGroup
                  label="Gender"
                  value={gender}
                  options={[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Other', value: 'other' },
                  ]}
                  onChange={val => {
                    setGender(val);
                    setGenderError('');
                  }}
                  error={genderError}
                />

                <CommonTextInput
                  label="Email Address"
                  placeholder="Enter your email address"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                    setEmailError('');
                  }}
                  error={emailError}
                />

                <CommonDropdown
                  label="Country"
                  value={country}
                  setValue={val => {
                    setCountry(val);
                    setCountryError('');
                  }}
                  items={[
                    { label: 'India', value: 'india' },
                    { label: 'USA', value: 'usa' },
                    { label: 'UK', value: 'uk' },
                    { label: 'Canada', value: 'Canada' },
                  ]}
                  placeholder="Select your country"
                  error={countryError}
                />

                <GradientButton
                  title="Save Changes"
                  onPress={onContinue}
                  style={{ marginBottom: RFValue(12), marginTop: RFValue(4) }}
                />

                {/* <TouchableOpacity style={{ marginBottom: 10 }}>
                  <Text style={[styles.signup, { color: COLORS.darkGray }]}>
                    By continuing, you agree to HeartView's{' '}
                    <Text style={[styles.signup, { color: COLORS.lightGreen }]}>
                      Terms Privacy Policy
                    </Text>{' '}
                  </Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  shadowWrapper: {
    // borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(20),
    marginHorizontal: 10,
  },

  innerContainer: {
    borderRadius: RFValue(35),
    paddingTop: RFValue(16),
    paddingHorizontal: RFValue(20),
  },
  profileText: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(20),
    marginBottom: RFValue(12),
  },
  signup: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
    marginBottom: RFValue(8),
    textAlign: 'center',
  },
   headerBack: {
    flexDirection: 'row',
    marginBottom: RFValue(12),
    alignItems: 'center',
    gap: RFValue(4),
  },
  leftIcon: {
    height: RFValue(10),
    width: RFValue(10),
    resizeMode: 'contain',
  },
  back: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
  },
});
