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
import CommonHeader from '../../components/CommonHeader';
import ImagesPath from '../../constants/ImagesPath';

const TermsOfService = ({ navigation }) => {
  const { theme } = useTheme();
  useContext(LanguageContext);

  // Section Component
  const Section = ({ title, children }) => (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>{title}</Text>
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
          title={i18n.t('terms_of_service')}
          subTitle={i18n.t('terms_subtitle')}
        />
      </TouchableOpacity>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Section title={i18n.t('terms_intro')}>
          {/* {i18n.t('terms_intro')} */}
        </Section>

        <Section title={i18n.t('acceptance_of_terms')}>
          {i18n.t('acceptance_of_terms_desc')}
        </Section>

        <Section title={i18n.t('medical_disclaimer')}>
          {i18n.t('medical_disclaimer_desc')}
        </Section>

        <Section title={i18n.t('user_accounts')}>
          {i18n.t('user_accounts_desc')}
        </Section>

        <Section title={i18n.t('acceptable_use')}>
          {i18n.t('acceptable_use_desc')}
        </Section>

        <Section title={i18n.t('health_data_privacy')}>
          {i18n.t('health_data_privacy_desc')}
        </Section>

        <Section title={i18n.t('ecg_integration')}>
          {i18n.t('ecg_integration_desc')}
        </Section>

        <Section title={i18n.t('intellectual_property')}>
          {i18n.t('intellectual_property_desc')}
        </Section>

        <Section title={i18n.t('limitation_liability')}>
          {i18n.t('limitation_liability_desc')}
        </Section>

        <Section title={i18n.t('service_modifications')}>
          {i18n.t('service_modifications_desc')}
        </Section>

        <Section title={i18n.t('termination')}>
          {i18n.t('termination_desc')}
        </Section>

        <Section title={i18n.t('governing_law')}>
          {i18n.t('governing_law_desc')}
        </Section>

        <Section title={i18n.t('changes_to_terms')}>
          {i18n.t('changes_to_terms_desc')}
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

export default TermsOfService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(16),
  },
  scrollContent: {
    paddingBottom: RFValue(24),
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
  section: {
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
