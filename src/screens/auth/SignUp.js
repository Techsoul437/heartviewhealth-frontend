// import {
//   Image,
//   KeyboardAvoidingView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Alert
// } from 'react-native';
// import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useTheme } from '../../theme/ThemeContext';
// import { FONTS } from '../../constants/Fonts';
// import { RFValue } from 'react-native-responsive-fontsize';
// import GradientButton from '../../components/GradientButton';
// import { COLORS } from '../../constants/Colour';
// import CommonTextInput from '../../components/CommonTextInput';
// import { useNavigation } from '@react-navigation/native';
// import CommonOtpInput from '../../components/CommonOtpScreen';
// import ImagesPath from '../../constants/ImagesPath';
// import auth from '@react-native-firebase/auth';

// const SignUp = () => {
//   const { theme } = useTheme();
//   const navigation = useNavigation();
//   const [value, setValue] = useState('');
//   const [error, setError] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpError, setOtpError] = useState('');
//   const [showOtp, setShowOtp] = useState(false);
//   const [confirm, setConfirm] = useState(null);

//   const signUpContinue =async () => {
   
//     if (!value.trim()) {
//       setError('Phone number or email is required');
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[6-9]\d{9}$/;

//     if (value.includes('@')) {
//       if (!emailRegex.test(value)) {
//         setError('Please enter a valid email address');
//         return;
//       }

//       // ✅ API call (email)
//       console.log('API PARAM:', {
//         type: 'email',
//         value: value,
//       });
//     }
//     // 👉 Phone case
//     else {
//       if (!phoneRegex.test(value)) {
//         setError('Please enter a valid 10 digit mobile number');
//         return;
//       }
//      await sendOtp(value);

//     }

   
//   };

//   const sendOtp = async (phoneNumber) => {
//   try {
//     // Make sure phone number has country code, e.g., +91 for India
//     const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber : '+91' + phoneNumber;

//     const confirmation = await auth().signInWithPhoneNumber(formattedNumber);
//     setConfirm(confirmation);
//     Alert.alert('OTP Sent!');
//      setError('');

//     setShowOtp(true);
//     //  navigation.replace('Profile');
//   } catch (error) {
//     console.log('OTP Error:', error);
//     Alert.alert('Error sending OTP', error.message);
//   }
// };

//   const onVerifyOtp =async () => {
//     if (otp.length !== 6) {
//       setOtpError('Please enter valid 6 digit OTP');
//       return;
//     }
//     try {
//       if (confirm) {
//         const userCredential = await confirm.confirm(otp);
//         console.log("User:", userCredential.user);

//         // Step 3: Get Firebase Token
//         const token = await userCredential.user.getIdToken();
//         console.log("Firebase Token:", token);
//         // Alert.alert("Logged in!", `Token: ${token}`);
//       }
//     } catch (error) {
//       console.log(error);
//       Alert.alert("Invalid OTP");
//     }

//     navigation.replace('Profile');
//   };



//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           keyboardShouldPersistTaps="handled"
//           contentContainerStyle={{ flexGrow: 1 }}
//         >
//           <View style={{ flex: 1, justifyContent: 'space-between' }}>
//             <View>
//               <View style={styles.logo}></View>
//               <Text style={[styles.header, { color: theme.text }]}>
//                 HeartViewHealth
//               </Text>
//               <Text style={[styles.innerheader, { color: theme.text }]}>
//                 See your heart. Stay ahead.
//               </Text>
//             </View>

//             <View
//               style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
//             >
//               <View
//                 style={[
//                   styles.innerContainer,
//                   { backgroundColor: theme.innerBackground },
//                 ]}
//               >
//                 <TouchableOpacity
//                   style={styles.headerBack}
//                   onPress={() => navigation.goBack()}
//                 >
//                   <Image
//                     source={ImagesPath.leftArrow}
//                     style={styles.leftIcon}
//                   />
//                   <Text style={[styles.back, { color: theme.text }]}>Back</Text>
//                 </TouchableOpacity>
//                 <Text style={[styles.loginText, { color: theme.text }]}>
//                   Sign Up
//                 </Text>
//                 <Text style={[styles.loginNote, { color: theme.text }]}>
//                   Verify your phone number to create an account
//                 </Text>
//                 <CommonTextInput
//                   label="Phone Number / Email"
//                   placeholder="Enter your Phone Number / Email"
//                   value={value}
//                   onChangeText={text => {
//                     setValue(text);
//                     setError('');
//                   }}
//                   error={error}
//                   keyboardType="email-address"
//                   autoCapitalize="none"
//                 />
//                 <Text style={[styles.otpNote, { color: theme.text }]}>
//                   6-digit OTP has been sent to this number
//                 </Text>

//                 {!showOtp && (
//                   <GradientButton
//                     title="Verify & Continue"
//                     onPress={() => signUpContinue()}
//                     style={{ marginBottom: 12 }}
//                   />
//                 )}

//                 {showOtp && (
//                   <>
//                     <CommonOtpInput
//                       label="Enter OTP"
//                       digits={6}
//                       onChange={val => {
//                         setOtp(val);
//                         setOtpError(''); // error clear
//                         console.log('OTP:', val);
//                       }}
//                       error={otpError}
//                     />

//                     <GradientButton
//                       title="Verify & Continue"
//                       onPress={onVerifyOtp}
//                       style={{ marginBottom: 12, marginTop: 12 }}
//                     />
//                   </>
//                 )}

//                 <TouchableOpacity>
//                   <Text style={[styles.signup, { color: COLORS.darkGray }]}>
//                     Didn't receive code?{' '}
//                     <Text style={[styles.signup, { color: COLORS.lightGreen }]}>
//                       Resend OTP
//                     </Text>{' '}
//                   </Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{ marginBottom: 10 }}>
//                   <Text style={[styles.signup, { color: COLORS.darkGray }]}>
//                     By continuing, you agree to HeartView's{' '}
//                     <Text style={[styles.signup, { color: COLORS.lightGreen }]}>
//                       Terms Privacy Policy
//                     </Text>{' '}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </KeyboardAvoidingView>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   logo: {
//     height: 70,
//     width: 70,
//     // borderWidth:1,
//     alignSelf: 'center',
//     marginTop: RFValue(20),
//   },
//   header: {
//     fontFamily: FONTS.BOLD,
//     fontSize: RFValue(20),
//     textAlign: 'center',
//     marginTop: RFValue(10),
//   },
//   innerheader: {
//     fontFamily: FONTS.REGULAR,
//     fontSize: RFValue(14),
//     textAlign: 'center',
//     marginTop: RFValue(5),
//   },
//   shadowWrapper: {
//     borderRadius: 16,
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 5,
//     elevation: 3,
//     marginTop: RFValue(20),
//   },
//   innerContainer: {
//     borderTopStartRadius: RFValue(35),
//     borderTopEndRadius: RFValue(35),
//     paddingTop: RFValue(16),
//     paddingHorizontal: RFValue(20),
//   },
//   loginText: {
//     fontFamily: FONTS.BOLD,
//     fontSize: RFValue(20),
//     marginBottom: RFValue(12),
//   },
//   loginNote: {
//     fontFamily: FONTS.REGULAR,
//     fontSize: RFValue(14),
//     marginBottom: RFValue(12),
//   },
//   otpNote: {
//     fontFamily: FONTS.REGULAR,
//     fontSize: RFValue(12),
//     marginBottom: RFValue(12),
//   },
//   signup: {
//     fontFamily: FONTS.REGULAR,
//     fontSize: RFValue(12),
//     marginBottom: RFValue(8),
//     textAlign: 'center',
//   },
//   headerBack: {
//     flexDirection: 'row',
//     marginBottom: RFValue(12),
//     alignItems: 'center',
//     gap: RFValue(4),
//   },
//   leftIcon: {
//     height: RFValue(10),
//     width: RFValue(10),
//     resizeMode: 'contain',
//   },
//   back: {
//     fontFamily: FONTS.REGULAR,
//     fontSize: RFValue(12),
//   },
// });


import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import { FONTS } from '../../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import GradientButton from '../../components/GradientButton';
import { COLORS } from '../../constants/Colour';
import CommonTextInput from '../../components/CommonTextInput';
import CommonOtpInput from '../../components/CommonOtpScreen';
import ImagesPath from '../../constants/ImagesPath';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [confirm, setConfirm] = useState(null);

  

  // SignUp / Login continue
  const signUpContinue = async () => {
    setError(''); // Clear previous errors

    if (!value.trim()) {
      setError('Phone number or email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (value.includes('@')) {
      // ✅ Email flow
      if (!emailRegex.test(value)) {
        setError('Please enter a valid email address');
        return;
      }
      if (!password.trim()) {
        setError('Password is required for email signup');
        return;
      }

      try {
        const userCredential = await auth().createUserWithEmailAndPassword(value, password);
        console.log('User signed up (email):', userCredential.user);

        const token = await userCredential.user.getIdToken();
        console.log('Firebase Token:', token);
        Alert.alert('Signed Up!', `Token: ${token}`);

        navigation.replace('Profile');
      } catch (error) {
        console.log('Email signup error:', error);
        Alert.alert('Signup Error', error.message);
      }
    } else {
      // ✅ Phone flow
      if (!phoneRegex.test(value)) {
        setError('Please enter a valid 10 digit mobile number');
        return;
      }
      await sendOtp(value);
    }
  };

  // Send OTP for phone number
  const sendOtp = async (phoneNumber) => {
    try {
      const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber : '+91' + phoneNumber;
      const confirmation = await auth().signInWithPhoneNumber(formattedNumber);
      setConfirm(confirmation);
      setShowOtp(true);
      setError('');
      Alert.alert('OTP Sent!');
    } catch (error) {
      console.log('OTP Error:', error);
      Alert.alert('Error sending OTP', error.message);
    }
  };
  // Verify OTP for phone login
  const onVerifyOtp = async () => {
    if (otp.length !== 6) {
      setOtpError('Please enter valid 6 digit OTP');
      return;
    }

    try {
      if (confirm) {
        const userCredential = await confirm.confirm(otp);
        console.log('User:', userCredential.user);

        const token = await userCredential.user.getIdToken();
        console.log('Firebase Token:', token);
        Alert.alert('Logged in!', `Token: ${token}`);

        navigation.replace('Profile');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Invalid OTP');
    }
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
              <Text style={[styles.header, { color: theme.text }]}>HeartViewHealth</Text>
              <Text style={[styles.innerheader, { color: theme.text }]}>
                See your heart. Stay ahead.
              </Text>
            </View>

            <View style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}>
              <View style={[styles.innerContainer, { backgroundColor: theme.innerBackground }]}>
                <TouchableOpacity style={styles.headerBack} onPress={() => navigation.goBack()}>
                  <Image source={ImagesPath.leftArrow} style={styles.leftIcon} />
                  <Text style={[styles.back, { color: theme.text }]}>Back</Text>
                </TouchableOpacity>

                <Text style={[styles.loginText, { color: theme.text }]}>Sign Up</Text>
                <Text style={[styles.loginNote, { color: theme.text }]}>
                  Verify your phone number or email to create an account
                </Text>

                <CommonTextInput
                  label="Phone Number / Email"
                  placeholder="Enter your Phone Number / Email"
                  value={value}
                  onChangeText={(text) => {
                    setValue(text);
                    setError('');
                  }}
                  error={error}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                {/* Password input only for email */}
                {value.includes('@') && (
                  <CommonTextInput
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                      setError('');
                    }}
                    error={error}
                    secureTextEntry
                  />
                )}

                {/* OTP note */}
                {showOtp && (
                  <Text style={[styles.otpNote, { color: theme.text }]}>
                    6-digit OTP has been sent to this number
                  </Text>
                )}

                {/* Verify button */}
                {!showOtp && (
                  <GradientButton
                    title="Verify & Continue"
                    onPress={signUpContinue}
                    style={{ marginBottom: 12 }}
                  />
                )}

                {/* OTP input */}
                {showOtp && (
                  <>
                    <CommonOtpInput
                      label="Enter OTP"
                      digits={6}
                      onChange={(val) => {
                        setOtp(val);
                        setOtpError('');
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
                    <Text style={[styles.signup, { color: COLORS.lightGreen }]}>Resend OTP</Text>{' '}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginBottom: 10 }}>
                  <Text style={[styles.signup, { color: COLORS.darkGray }]}>
                    By continuing, you agree to HeartView's{' '}
                    <Text style={[styles.signup, { color: COLORS.lightGreen }]}>
                      Terms & Privacy Policy
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
  container: { flex: 1 },
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
