import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import { FONTS } from '../../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import GradientButton from '../../components/GradientButton';
import { COLORS } from '../../constants/Colour';
import CommonTextInput from '../../components/CommonTextInput';
import { useNavigation } from '@react-navigation/native';
import CommonOtpInput from '../../components/CommonOtpScreen';
import ImagesPath from '../../constants/ImagesPath';

const SignUp = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const signUpContinue = () => {
    navigation.replace('Profile');
    if (!value.trim()) {
      setError('Phone number or email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (value.includes('@')) {
      if (!emailRegex.test(value)) {
        setError('Please enter a valid email address');
        return;
      }

      // ✅ API call (email)
      console.log('API PARAM:', {
        type: 'email',
        value: value,
      });
    }
    // 👉 Phone case
    else {
      if (!phoneRegex.test(value)) {
        setError('Please enter a valid 10 digit mobile number');
        return;
      }

      // ✅ API call (phone)
      console.log('API PARAM:', {
        type: 'phone',
        value: value,
      });
    }

    setError('');

    setShowOtp(true);
  };

  const onVerifyOtp = () => {
  if (otp.length !== 6) {
    setOtpError('Please enter valid 6 digit OTP');
    return;
  }

  navigation.replace('Profile');
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
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
              <View style={styles.logo}></View>
              <Text style={[styles.header, { color: theme.text }]}>
                HeartViewHealth
              </Text>
              <Text style={[styles.innerheader, { color: theme.text }]}>
                See your heart. Stay ahead.
              </Text>
            </View>

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
                <Text style={[styles.loginText, { color: theme.text }]}>
                  Sign Up
                </Text>
                <Text style={[styles.loginNote, { color: theme.text }]}>
                  Verify your phone number to create an account
                </Text>
                <CommonTextInput
                  label="Phone Number / Email"
                  placeholder="Enter your Phone Number / Email"
                  value={value}
                  onChangeText={text => {
                    setValue(text);
                    setError('');
                  }}
                  error={error}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Text style={[styles.otpNote, { color: theme.text }]}>
                  6-digit OTP has been sent to this number
                </Text>

                {!showOtp && (
                  <GradientButton
                    title="Verify & Continue"
                    onPress={() => signUpContinue()}
                    style={{ marginBottom: 12 }}
                  />
                )}

                {showOtp && (
                  <>
                    <CommonOtpInput
                      label="Enter OTP"
                      digits={6}
                      onChange={val => {
                        setOtp(val);
                        setOtpError(''); // error clear
                        console.log('OTP:', val);
                      }}
                      error={otpError}
                    />

                    <GradientButton
                      title="Verify & Continue"
                      onPress={onVerifyOtp}
                      style={{ marginBottom: 12, marginTop: 12 }}
                    />
                  </>
                )}

                <TouchableOpacity>
                  <Text style={[styles.signup, { color: COLORS.darkGray }]}>
                    Didn't receive code?{' '}
                    <Text style={[styles.signup, { color: COLORS.lightGreen }]}>
                      Resend OTP
                    </Text>{' '}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginBottom: 10 }}>
                  <Text style={[styles.signup, { color: COLORS.darkGray }]}>
                    By continuing, you agree to HeartView's{' '}
                    <Text style={[styles.signup, { color: COLORS.lightGreen }]}>
                      Terms Privacy Policy
                    </Text>{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 70,
    width: 70,
    // borderWidth:1,
    alignSelf: 'center',
    marginTop: RFValue(20),
  },
  header: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(20),
    textAlign: 'center',
    marginTop: RFValue(10),
  },
  innerheader: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(14),
    textAlign: 'center',
    marginTop: RFValue(5),
  },
  shadowWrapper: {
    borderRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(20),
  },
  innerContainer: {
    borderTopStartRadius: RFValue(35),
    borderTopEndRadius: RFValue(35),
    paddingTop: RFValue(16),
    paddingHorizontal: RFValue(20),
  },
  loginText: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(20),
    marginBottom: RFValue(12),
  },
  loginNote: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(14),
    marginBottom: RFValue(12),
  },
  otpNote: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
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
