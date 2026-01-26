import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';
import { useTheme } from '../../theme/ThemeContext';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colour';
import CommonHeader from '../../components/CommonHeader';
import ImagesPath from '../../constants/ImagesPath';

const PrivacyPolicy = ({ navigation }) => {
  const { theme } = useTheme();
  useContext(LanguageContext);

  const Section = ({ title, children }) => (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        {title}
      </Text>
      <Text style={[styles.description, { color: theme.gray }]}>
        {children}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <TouchableOpacity
        style={styles.headerTop}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Image
          source={ImagesPath.leftArrow}
          style={[styles.leftIcon, { tintColor: theme.text }]}
        />
        <CommonHeader
          title={i18n.t('privacy_policy')}
          subTitle={i18n.t('privacy_policy_subtitle')}
        />
      </TouchableOpacity>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Section title={i18n.t('introduction')}>
          {i18n.t('privacy_intro_desc')}
        </Section>

        <Section title={i18n.t('data_collection')}>
          {i18n.t('data_collection_desc')}
        </Section>

        <Section title={i18n.t('device_information')}>
          {i18n.t('device_information_desc')}
        </Section>

        <Section title={i18n.t('data_usage')}>
          {i18n.t('data_usage_desc')}
        </Section>

        <Section title={i18n.t('data_security')}>
          {i18n.t('data_security_desc')}
        </Section>

        <Section title={i18n.t('data_sharing')}>
          {i18n.t('data_sharing_desc')}
        </Section>

        <Section title={i18n.t('children_privacy')}>
          {i18n.t('children_privacy_desc')}
        </Section>

        <Section title={i18n.t('contact_us')}>
          {i18n.t('contact_us_desc')}
          {'\n\n'}
          Email: privacy@heartview.app
          {'\n'}
          Phone: +1 (800) HEART-VIEW
        </Section>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(16),
  },
  scrollContent: {
    paddingBottom: RFValue(20),
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(10),
    marginVertical: RFValue(12),
  },
  leftIcon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },
  sectionContainer: {
    marginTop: RFValue(14),
  },
  sectionTitle: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: RFValue(15),
    marginBottom: RFValue(6),
  },
  description: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(13),
    lineHeight: RFValue(20),
  },
});
