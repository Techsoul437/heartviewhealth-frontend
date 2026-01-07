import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import { FONTS } from '../../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import GradientButton from '../../components/GradientButton';
import { COLORS } from '../../constants/Colour';
import CommonTextInput from '../../components/CommonTextInput';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
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
                <Text style={[styles.loginText, { color: theme.text }]}>
                  Login
                </Text>
                <Text style={[styles.loginNote, { color: theme.text }]}>
                  Verify your phone number to create an account
                </Text>
                <CommonTextInput
                  label="Phone Number/Email Id"
                  placeholder="Enter your Phone Number/Email Id"
                  // value={email}
                  // onChangeText={setEmail}
                />

                <GradientButton
                  title="Verify & Continue"
                  onPress={() => navigation.replace('Main')}
                  style={{ marginBottom: 12 }}
                />
                <TouchableOpacity onPress={()=>navigation.replace('SignUp')}>
                  <Text style={[styles.signup, { color: COLORS.darkGray }]}>
                    Don’t have an account?{' '}
                    <Text style={[styles.signup, { color: COLORS.lightGreen }]}>
                      Sign up
                    </Text>{' '}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
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

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 70,
    width: 70,
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
    paddingHorizontal: RFValue(30),
  },
  loginText: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(20),
    marginBottom: RFValue(22),
  },
  loginNote: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(14),
    marginBottom: RFValue(12),
  },
  signup: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
    marginBottom: RFValue(12),
    textAlign: 'center',
  },
});
