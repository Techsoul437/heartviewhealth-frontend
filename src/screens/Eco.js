import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeContext';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../constants/Fonts';
import { LanguageContext } from '../constants/LanguageContext';
import i18n from '../assets/i18n';

const ECO = () => {
  const { theme } = useTheme();
  useContext(LanguageContext);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.headerText, { color: theme.text }]}>
        {i18n.t('title')}
      </Text>
      <Text style={[styles.subText, { color: theme.text }]}>
        {i18n.t('subtitle')}
      </Text>
      <Text style={[styles.subText, { color: theme.text }]}>
       {i18n.t('description')}
      </Text>
    </SafeAreaView>
  );
};

export default ECO;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(20),
  },
  subText: {
    fontFamily: FONTS.R,
    fontSize: RFValue(14),
    marginTop: RFValue(10),
  },
});
