import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONTS } from '../../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import ImagesPath from '../../constants/ImagesPath';
import GradientButton from '../../components/GradientButton';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.title, { color: theme.text }]}>
        Preventive heart health{`\n`}monitoring & reminders
      </Text>

      <View style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}>
        <View
          style={[
            styles.innerContainer,
            { backgroundColor: theme.innerBackground },
          ]}
        >
          <View style={styles.row}>
            <Image
              source={ImagesPath.palm}
              style={[styles.onboardingIcon, { tintColor: theme.text }]}
            />
            <Text style={[styles.text, { color: theme.text }]}>
              Manual health tracking
            </Text>
          </View>

          <View style={styles.row}>
            <Image
              source={ImagesPath.scanLine}
              style={[styles.onboardingIcon, { tintColor: theme.text }]}
            />
            <Text style={[styles.text, { color: theme.text }]}>
              Lab report OCR analysis
            </Text>
          </View>

          <View style={styles.row}>
            <Image
              source={ImagesPath.pill}
              style={[styles.onboardingIcon, { tintColor: theme.text }]}
            />
            <Text style={[styles.text, { color: theme.text }]}>
              Personalized medication reminders
            </Text>
          </View>

          <View style={styles.row}>
            <Image
              source={ImagesPath.smartWatch}
              style={[styles.onboardingIcon, { tintColor: theme.text }]}
            />
            <Text style={[styles.text, { color: theme.text }]}>
              Seamless wearable device synchronization
            </Text>
          </View>

          <View style={styles.row}>
            <Image
              source={ImagesPath.heartBeat}
              style={[styles.onboardingIcon, { tintColor: theme.text }]}
            />
            <Text style={[styles.text, { color: theme.text }]}>
              Optional ECG device integration
            </Text>
          </View>

          <View style={styles.row}>
            <Image
              source={ImagesPath.adults}
              style={[styles.onboardingIcon, { tintColor: theme.text }]}
            />
            <Text style={[styles.text, { color: theme.text }]}>
              Only users aged 18 years and above may use this app.
            </Text>
          </View>

          <GradientButton
            title="GETSTART"
            onPress={() => navigation.replace('Login')}
            
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: RFValue(16),
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(22),
    textAlign: 'center',
    marginVertical: RFValue(20),
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
    borderRadius: RFValue(35),
    paddingTop: RFValue(16),
    paddingHorizontal: RFValue(30),
  },

  text: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(16),
    marginBottom: RFValue(6),
    flexShrink: 1,
  },
  onboardingIcon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: RFValue(10),
    gap: RFValue(8),
  },
});
