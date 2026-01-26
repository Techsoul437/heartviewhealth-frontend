import React, { useState, useContext } from 'react';
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

const SupportScreen = ({ navigation }) => {
  const { theme } = useTheme();
  useContext(LanguageContext);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    { question: i18n.t('faq_connect_ecg'), answer: i18n.t('faq_connect_ecg_ans') },
    { question: i18n.t('faq_critical_alert'), answer: i18n.t('faq_critical_alert_ans') },
    { question: i18n.t('faq_log_health_signals'), answer: i18n.t('faq_log_health_signals_ans') },
    { question: i18n.t('faq_share_data_doctor'), answer: i18n.t('faq_share_data_doctor_ans') },
    { question: i18n.t('faq_add_edit_family'), answer: i18n.t('faq_add_edit_family_ans') },
    { question: i18n.t('faq_risk_levels'), answer: i18n.t('faq_risk_levels_ans') },
    { question: i18n.t('faq_medication_reminders'), answer: i18n.t('faq_medication_reminders_ans') },
    { question: i18n.t('faq_data_secure'), answer: i18n.t('faq_data_secure_ans') },
    { question: i18n.t('faq_use_offline'), answer: i18n.t('faq_use_offline_ans') },
    { question: i18n.t('faq_delete_account'), answer: i18n.t('faq_delete_account_ans') },
  ];

  const Section = ({ title, children }) => (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>{title}</Text>
      {children}
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
          title={i18n.t('support_title')}
          subTitle={i18n.t('support_subtitle')}
        />
      </TouchableOpacity>

      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Contact Info */}
        <Section title={i18n.t('contact_us')}>
          <Text style={[styles.description, { color: theme.gray }]}>
            {i18n.t('contact_email')}: support@heartview.app{'\n'}
            {i18n.t('contact_phone')}: +91 78965 78965 HEART-VIEW
          </Text>
        </Section>

        <Section title={i18n.t('support_hours')}>
          <Text style={[styles.description, { color: theme.gray }]}>
            {i18n.t('phone_support')}: Within 24 hours{'\n'}
            {i18n.t('email_response')}: Within 24 hours
          </Text>
        </Section>

        <Section title={i18n.t('medical_emergency')}>
          <Text style={[styles.description, { color: theme.gray }]}>
           {i18n.t('medical_emergency_msg')}
          </Text>
        </Section>

        {/* FAQ Accordion */}
        <Section title={i18n.t('faq')}>
          {faqs.map((faq, index) => (
            <View key={index} style={styles.faqItem}>
              <TouchableOpacity
                onPress={() => toggleExpand(index)}
                style={styles.questionContainer}
                activeOpacity={0.7}
              >
                <Text style={[styles.faqQuestion, { color: theme.text }]}>{faq.question}</Text>
                <Text style={[styles.expandIcon, { color: theme.text }]}>
                  {expandedIndex === index ? '-' : '+'}
                </Text>
              </TouchableOpacity>
              {expandedIndex === index && (
                <Text style={[styles.faqAnswer, { color: theme.gray }]}>{faq.answer}</Text>
              )}
            </View>
          ))}
        </Section>

        {/* App Version */}
        <View>
            <Text style={[styles.appVersion,{color:theme.text}]}>{i18n.t('app_version')}</Text>
          <Text style={[styles.descriptionVersion, { color: theme.gray }]}>
            HeartView Version 1.0.0{'\n'}© 2025 HeartView Inc. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SupportScreen;

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
    fontSize: RFValue(12),
    lineHeight: RFValue(20),
  },
  descriptionVersion:{
     fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
    lineHeight: RFValue(20),
    textAlign:'center'
  },
  faqItem: {
    marginBottom: RFValue(10),
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingBottom: RFValue(8),
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: RFValue(12),
    flex: 1,
  },
  faqAnswer: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
    marginTop: RFValue(4),
    lineHeight: RFValue(20),
  },
  expandIcon: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: RFValue(18),
    marginLeft: RFValue(10),
  },
  appVersion:{
    fontFamily:FONTS.SEMIBOLD,
    fontSize:RFValue(14),
    textAlign:'center'
  }
});
