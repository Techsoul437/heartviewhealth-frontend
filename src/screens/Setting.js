import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '../theme/ThemeContext';
import { LanguageContext } from '../constants/LanguageContext';
import { FONTS } from '../constants/Fonts';

const Setting = () => {
  const { theme, toggleTheme } = useTheme();
  const { setLanguage } = useContext(LanguageContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      {/* Appearance */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Appearance
      </Text>

      <TouchableOpacity style={styles.item} onPress={toggleTheme}>
        <Text style={[styles.itemText, { color: theme.text }]}>
          {theme.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </Text>
      </TouchableOpacity>

      {/* Language */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Language
      </Text>

      <TouchableOpacity
        style={styles.item}
        onPress={() => setLanguage('en')}
      >
        <Text style={[styles.itemText, { color: theme.text }]}>
          English
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => setLanguage('hi')}
      >
        <Text style={[styles.itemText, { color: theme.text }]}>
          हिन्दी
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RFValue(20),
  },

  sectionTitle: {
    fontSize: RFValue(14),
    fontFamily: FONTS.MEDIUM,
    marginTop: RFValue(20),
    marginBottom: RFValue(10),
    opacity: 0.7,
  },

  item: {
    paddingVertical: RFValue(14),
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },

  itemText: {
    fontSize: RFValue(16),
    fontFamily: FONTS.REGULAR,
  },
});
