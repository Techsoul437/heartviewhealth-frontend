import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { COLORS } from '../constants/Colour';
import ImagesPath from '../constants/ImagesPath';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../constants/Fonts';
import { LanguageContext } from '../constants/LanguageContext';
import i18n from '../assets/i18n';

const NoInternetScreen = ({ onRetry }) => {
  const { theme } = useTheme();
   useContext(LanguageContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={ImagesPath.noInternet} style={styles.noInternet} />
      <Text style={[styles.title, { color: theme.text }]}>
        {i18n.t('noInternetTitle')}
      </Text>
      <Text style={[styles.subtitle, { color: theme.text }]}>
       {i18n.t('noInternetSubtitle')}
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={onRetry}
      >
        <Text style={[styles.buttonText, { color: COLORS.white }]}>{i18n.t('retryButton')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: RFValue(24),
    fontFamily: FONTS.BOLD,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: RFValue(15),
    fontFamily: FONTS.REGULAR,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: RFValue(10),
  },
  buttonText: {
    fontSize: RFValue(16),
    fontFamily:FONTS.MEDIUM
  },
  noInternet: {
    height: RFValue(150),
    width: RFValue(150),
    resizeMode: 'contain',
  },
});

export default NoInternetScreen;
