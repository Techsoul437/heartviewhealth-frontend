import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useTheme } from '../../theme/ThemeContext';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colour';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';

const HealthLineChart = () => {
  const { theme } = useTheme();
  useContext(LanguageContext);
  const bloodSugarData = [
    { value: 95, label: 'Mon' },
    { value: 110, label: 'Tue' },
    { value: 135, label: 'Wed' },
    { value: 150, label: 'Thu' },
    { value: 180, label: 'Fri' },
    { value: 160, label: 'Sat' },
    { value: 120, label: 'Sun' },
  ];

  const bloodPressureData = [
    { value: 118, label: 'Mon' },
    { value: 122, label: 'Tue' },
    { value: 130, label: 'Wed' },
    { value: 135, label: 'Thu' },
    { value: 145, label: 'Fri' },
    { value: 138, label: 'Sat' },
    { value: 125, label: 'Sun' },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}>
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor: theme.innerBackground,
              borderColor: theme.inputBorder,
            },
          ]}
        >
          <Text style={[styles.title, { color: theme.text }]}>
            {i18n.t('bloodPressure')}
          </Text>
          <Text style={[styles.range, { color: theme.text }]}>
            120-130/80-85 mmhg
          </Text>

          <LineChart
            data={bloodPressureData}
            height={200}
            width={Platform.OS == 'ios' ? 260 : 240}
            spacing={45}
            thickness={3}
            color="#11A8A0"
            maxValue={160}
            noOfSections={5}
            rulesType="dotted"
            rulesColor={COLORS.gray}
            dashWidth={1}
            dashGap={5}
            showVerticalLines
            showDataPoint
            dataPointsColor1="#11A8A0"
            dataPointsRadius1={6}
            areaChart
            startFillColor="#11A8A0"
            endFillColor="#11A8A0"
            startOpacity={0.3}
            endOpacity={0.05}
            isAnimated
            animationDuration={1200}
            animateOnDataChange
            animationEasing="easeOut"
            yAxisOffset={0}
            initialSpacing={15}
            xAxisThickness={1}
            yAxisThickness={1}
            xAxisColor="#D0D0D0"
            yAxisColor="transparent"
            hideRules={false}
            xAxisLabelTextStyle={{
              color: theme.text,
              fontFamily: FONTS.REGULAR,
              fontSize: RFValue(12),
            }}
            yAxisTextStyle={{
              color: theme.text,
              fontFamily: FONTS.REGULAR,
              fontSize: RFValue(12),
            }}
            curved
          />
          <View style={styles.line} />
          <View style={styles.statusContiner}>
            <Text style={[styles.status, { color: theme.text }]}>Status</Text>
            <Text style={[styles.status, { color: '#11A8A0' }]}>Normal</Text>
          </View>
        </View>
      </View>

      <View style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}>
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor: theme.innerBackground,
              borderColor: theme.inputBorder,
            },
          ]}
        >
          <Text style={[styles.title, { color: theme.text }]}>
            {i18n.t('sugar')}
          </Text>
          <Text style={[styles.range, { color: theme.text }]}>90-100mg/dL</Text>

          <LineChart
            data={bloodSugarData}
            height={200}
           width={Platform.OS == 'ios' ? 260 : 240}
            spacing={45}
            thickness={3}
            color="#F5A43E"
            maxValue={220}
            noOfSections={5}
            rulesType="dotted"
            rulesColor={COLORS.gray}
            dashWidth={1}
            dashGap={5}
            showVerticalLines
            showDataPoint
            dataPointsColor1="#F5A43E"
            dataPointsRadius1={6}
            areaChart
            startFillColor="#F5A43E"
            endFillColor="#F5A43E"
            startOpacity={0.3}
            endOpacity={0.05}
            isAnimated
            animationDuration={1200}
            animateOnDataChange
            animationEasing="easeOut"
            yAxisOffset={0}
            initialSpacing={15}
            xAxisThickness={1}
            yAxisThickness={1}
            xAxisColor="#D0D0D0"
            yAxisColor="transparent"
            hideRules={false}
            xAxisLabelTextStyle={{
              color: theme.text,
              fontFamily: FONTS.REGULAR,
              fontSize: RFValue(12),
            }}
            yAxisTextStyle={{
              color: theme.text,
              fontFamily: FONTS.REGULAR,
              fontSize: RFValue(12),
            }}
            curved
          />
          <View style={styles.line} />
          <View style={styles.statusContiner}>
            <Text style={[styles.status, { color: theme.text }]}>Status</Text>
            <Text style={[styles.status, { color: '#F5A43E' }]}>
              Borderline
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HealthLineChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F9F9F9',
    // padding: 16,
  },
  title: {
    fontSize: RFValue(20),
    fontFamily: FONTS.BOLD,
    marginTop: 20,
    marginBottom: 10,
  },
  range: {
    fontSize: RFValue(12),
    fontFamily: FONTS.REGULAR,
    marginBottom: 10,
  },
  shadowWrapper: {
    // borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(20),
    // marginHorizontal: 10,
  },

  innerContainer: {
    borderRadius: RFValue(15),
    paddingBottom: RFValue(16),
    paddingHorizontal: RFValue(20),
    borderWidth: 1,
  },
  line: {
    borderTopWidth: 1,
    borderColor: COLORS.gray,
    marginTop: 20,
    // height:10
  },
  statusContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  status: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
  },
});
