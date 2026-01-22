// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Dimensions,
//   Platform,
// } from 'react-native';
// import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LineChart } from 'react-native-gifted-charts';
// import { RFValue } from 'react-native-responsive-fontsize';
// import { useTheme } from '../../theme/ThemeContext';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import ImagesPath from '../../constants/ImagesPath';
// import { COLORS } from '../../constants/Colour';
// import { FONTS } from '../../constants/Fonts';
// import i18n from '../../assets/i18n';
// import CommonHeader from '../../components/CommonHeader';
// import Slider from '@react-native-community/slider';

// const { width } = Dimensions.get('window');

// const SLIDER_WIDTH = 300;
// const ARROW_WIDTH = 22;
// const ARROW_HEIGHT = 22;

// const HealthDetail = ({ value = 67 }) => {
//   const { theme } = useTheme();
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { item } = route.params;

//   const [selectedDay, setSelectedDay] = useState('7 Days');
//   const arrowLeft = (value / 100) * SLIDER_WIDTH - ARROW_WIDTH / 2;

//   const chartData = {
//     '7 Days': [94, 96, 98, 92, 95, 97, 95],
//     '30 Days': [92, 94, 95, 96, 97, 98, 96],
//     '90 Days': [90, 92, 94, 96, 98, 97, 95],
//   };

//   const lineData = chartData[selectedDay].map(value => ({
//     value,
//   }));

//   return (
//     <SafeAreaView
//       style={[styles.container, { backgroundColor: theme.background }]}
//     >
//       <TouchableOpacity
//         style={styles.header}
//         onPress={() => navigation.goBack()}
//       >
//         <Image
//           source={ImagesPath.leftArrow}
//           style={[styles.leftIcon, { tintColor: theme.text }]}
//         />
//         <CommonHeader
//           title={i18n.t(item.name)}
//           subTitle={i18n.t('trackReadings')}
//         />
//       </TouchableOpacity>

//       {/* Tabs */}
//       <View style={[styles.tabs]}>
//         {['7 Days', '30 Days', '90 Days'].map(day => (
//           <TouchableOpacity
//             key={day}
//             onPress={() => setSelectedDay(day)}
//             style={[
//               styles.tab,
//               {
//                 backgroundColor:
//                   selectedDay === day
//                     ? COLORS.lightGreen
//                     : theme.innerBackground,
//                 width: width / 3.5,
//                 borderColor: theme.inputBorder,
//               },
//             ]}
//           >
//             <Text
//               style={{
//                 color: selectedDay === day ? COLORS.white : theme.inputBorder,
//                 fontFamily: FONTS.REGULAR,
//                 fontSize: RFValue(14),
//               }}
//             >
//               {day}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View
//         style={[
//           styles.rangeCard,
//           {
//             backgroundColor: theme.innerBackground,
//             borderColor: theme.inputBorder,
//           },
//         ]}
//       >
//         <Text style={[styles.rangeTitle, { color: theme.text }]}>
//           Normal Range
//         </Text>
//         <Text style={[styles.rangeText, { color: theme.gray }]}>
//           70 - 100 mg/dL (Fasting)
//         </Text>
//         <Text style={[styles.rangeText, { color: theme.gray }]}>
//           Less than 140 mg/dL (2 hours after eating)
//         </Text>
//       </View>

//       <View
//         style={[
//           styles.rangeCard,
//           {
//             backgroundColor: theme.innerBackground,
//             borderColor: theme.inputBorder,
//           },
//         ]}
//       >
//         <Text style={styles.title}>{value}th Percentile</Text>

//         <View style={styles.sliderContainer}>
//           {/* Arrow overlapping slider */}
//           <Image
//             source={ImagesPath.upArrow}
//             style={[styles.arrow, { left: arrowLeft }]}
//           />

//           <View style={styles.trackWrapper}>
//             <Slider
//               style={styles.slider}
//               minimumValue={0}
//               maximumValue={100}
//               value={value}
//               disabled
//               minimumTrackTintColor="transparent"
//               maximumTrackTintColor="transparent"
//               thumbTintColor="transparent"
//             />
//           </View>
//         </View>

//         <View style={styles.labels}>
//           <Text style={styles.label}>0</Text>
//           <Text style={styles.label}>100</Text>
//         </View>
//       </View>
//       <View
//         style={[
//           styles.chartCard,
//           {
//             backgroundColor: theme.innerBackground,
//             borderColor: theme.inputBorder,
//           },
//         ]}
//       >
//         <LineChart
//           data={lineData}
//           width={Platform.OS == 'ios' ? 250 : 220}
//           height={150}
//           color={COLORS.lightGreen}
//           showDataPoint
//           dataPointsColor1={COLORS.lightGreen}
//           dataPointsRadius1={6}
//           isAnimated
//           noOfSections={4}
//           yAxisTextStyle={{ color: theme.text }}
//           hideRules={true}
//           xAxisColor={theme.inputBorder}
//           yAxisColor={theme.inputBorder}
//           areaChart
//           startFillColor={COLORS.lightGreen}
//           endFillColor={COLORS.lightGreen}
//           startOpacity={0.3}
//           endOpacity={0.05}
//         />

//         <View style={styles.chartFooter}>
//           <Text style={styles.footerText}>
//             Avg: <Text style={styles.bold}>95 mg/dL</Text>
//           </Text>
//           <Text style={styles.footerText}>
//             Range: <Text style={styles.bold}>92 - 98</Text>
//           </Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default HealthDetail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: RFValue(15),
//   },
//   tabs: {
//     flexDirection: 'row',
//     // gap: RFValue(10),
//     marginVertical: RFValue(25),
//     justifyContent: 'space-between',
//   },
//   tab: {
//     paddingVertical: RFValue(6),
//     paddingHorizontal: RFValue(15),
//     borderRadius: RFValue(8),
//     alignItems: 'center',
//     borderWidth: 1,
//   },
//   chartCard: {
//     borderRadius: RFValue(12),
//     padding: RFValue(15),
//     borderWidth: 1,
//   },
//   chartFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: RFValue(10),
//   },
//   footerText: {
//     fontSize: RFValue(11),
//     color: COLORS.gray,
//   },
//   bold: {
//     fontFamily: FONTS.BOLD,
//     color: COLORS.white,
//     fontSize: RFValue(11),
//   },
//   rangeCard: {
//     borderRadius: RFValue(12),
//     padding: RFValue(15),
//     marginBottom: RFValue(15),
//     borderWidth: 1,
//   },
//   rangeTitle: {
//     fontFamily: FONTS.BOLD,
//     fontSize: RFValue(12),
//     marginBottom: RFValue(5),
//   },
//   rangeText: {
//     fontSize: RFValue(11),
//     marginTop: RFValue(3),
//   },
//   actions: {
//     flexDirection: 'row',
//     gap: RFValue(10),
//     marginTop: RFValue(20),
//   },
//   primaryBtn: {
//     flex: 1,
//     backgroundColor: COLORS.green,
//     paddingVertical: RFValue(12),
//     borderRadius: RFValue(10),
//     alignItems: 'center',
//   },
//   outlineBtn: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: COLORS.green,
//     paddingVertical: RFValue(12),
//     borderRadius: RFValue(10),
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: RFValue(6),
//   },
//   btnText: {
//     fontFamily: FONTS.BOLD,
//     fontSize: RFValue(12),
//     color: COLORS.white,
//   },
//   scanIcon: {
//     width: RFValue(16),
//     height: RFValue(16),
//     tintColor: COLORS.green,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: RFValue(10),
//   },
//   leftIcon: {
//     height: RFValue(20),
//     width: RFValue(20),
//     resizeMode: 'contain',
//   },

//   title: {
//     color: 'white',
//     fontSize: 14,
//     marginBottom: 14,
//     fontWeight: '600',
//   },
//   sliderContainer: {
//     width: SLIDER_WIDTH,
//     position: 'relative',
//   },
//   trackWrapper: {
//     width: SLIDER_WIDTH,
//     height: 10, // 👈 track thickness
//     borderRadius: 10, // 👈 radius
//     backgroundColor: '#4CAF50',
//     justifyContent: 'center',
//   },
//   slider: {
//     width: SLIDER_WIDTH,
//     height: 40,
//   },
//   arrow: {
//     position: 'absolute',
//     width: ARROW_WIDTH,
//     height: ARROW_HEIGHT,
//     resizeMode: 'contain',
//     top: -10, // 👈 KEY: slider upar half overlap
//     transform: [{ rotate: '180deg' }], // niche point kare
//     zIndex: 10,
//   },
//   labels: {
//     width: SLIDER_WIDTH,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   label: {
//     color: '#aaa',
//     fontSize: 12,
//   },
// });


import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-gifted-charts';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImagesPath from '../../constants/ImagesPath';
import { COLORS } from '../../constants/Colour';
import { FONTS } from '../../constants/Fonts';
import i18n from '../../assets/i18n';
import CommonHeader from '../../components/CommonHeader';
import Slider from '@react-native-community/slider';

const { width } = Dimensions.get('window');

/* 🔹 Slider constants */
const SLIDER_WIDTH = width - RFValue(60);
const INDICATOR_WIDTH = RFValue(32);

const HealthDetail = ({ value = 67 }) => {
  const { theme } = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  const [selectedDay, setSelectedDay] = useState('7 Days');

  const indicatorLeft =
    (value / 100) * SLIDER_WIDTH - INDICATOR_WIDTH / 2;

  const chartData = {
    '7 Days': [94, 96, 98, 92, 95, 97, 95],
    '30 Days': [92, 94, 95, 96, 97, 98, 96],
    '90 Days': [90, 92, 94, 96, 98, 97, 95],
  };

  const lineData = chartData[selectedDay].map(v => ({ value: v }));

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* Header */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={ImagesPath.leftArrow}
          style={[styles.leftIcon, { tintColor: theme.text }]}
        />
        <CommonHeader
          title={i18n.t(item.name)}
          subTitle={i18n.t('trackReadings')}
        />
      </TouchableOpacity>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['7 Days', '30 Days', '90 Days'].map(day => (
          <TouchableOpacity
            key={day}
            onPress={() => setSelectedDay(day)}
            style={[
              styles.tab,
              {
                backgroundColor:
                  selectedDay === day
                    ? COLORS.lightGreen
                    : theme.innerBackground,
                width: width / 3.5,
                borderColor: theme.inputBorder,
              },
            ]}
          >
            <Text
              style={{
                color:
                  selectedDay === day
                    ? COLORS.white
                    : theme.inputBorder,
                fontFamily: FONTS.REGULAR,
                fontSize: RFValue(14),
              }}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Normal Range Card */}
      <View
        style={[
          styles.rangeCard,
          {
            backgroundColor: theme.innerBackground,
            borderColor: theme.inputBorder,
          },
        ]}
      >
        <Text style={[styles.rangeTitle, { color: theme.text }]}>
          Normal Range
        </Text>
        <Text style={[styles.rangeText, { color: theme.gray }]}>
          70 - 100 mg/dL (Fasting)
        </Text>
        <Text style={[styles.rangeText, { color: theme.gray }]}>
          Less than 140 mg/dL (2 hours after eating)
        </Text>
      </View>

      {/* Percentile Slider Card */}
      <View
        style={[
          styles.rangeCard,
          {
            backgroundColor: theme.innerBackground,
            borderColor: theme.inputBorder,
          },
        ]}
      >
        <Text style={styles.title}>You vs People Like You</Text>

        <View style={styles.sliderContainer}>
          {/* Indicator (Text + Arrow) */}
          <View
            style={[
              styles.indicator,
              { left: indicatorLeft },
            ]}
          >
            <Text style={styles.indicatorText}>{value}</Text>
            <Image
              source={ImagesPath.sortDownArrow}
              style={styles.arrow}
            />
          </View>

          {/* Track */}
          <View style={styles.trackWrapper}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={value}
              disabled
              minimumTrackTintColor="transparent"
              maximumTrackTintColor="transparent"
              thumbTintColor="transparent"
            />
          </View>
        </View>

        <View style={styles.labels}>
          <Text style={styles.label}>0</Text>
          <Text style={styles.label}>100</Text>
        </View>
      </View>

      {/* Chart */}
      <View
        style={[
          styles.chartCard,
          {
            backgroundColor: theme.innerBackground,
            borderColor: theme.inputBorder,
          },
        ]}
      >
        <LineChart
          data={lineData}
          width={Platform.OS === 'ios' ? 250 : 220}
          height={150}
          color={COLORS.lightGreen}
          showDataPoint
          dataPointsColor1={COLORS.lightGreen}
          dataPointsRadius1={6}
          isAnimated
          noOfSections={4}
          yAxisTextStyle={{ color: theme.text }}
          hideRules
          xAxisColor={theme.inputBorder}
          yAxisColor={theme.inputBorder}
          areaChart
          startFillColor={COLORS.lightGreen}
          endFillColor={COLORS.lightGreen}
          startOpacity={0.3}
          endOpacity={0.05}
        />

        <View style={styles.chartFooter}>
          <Text style={styles.footerText}>
            Avg: <Text style={styles.bold}>95 mg/dL</Text>
          </Text>
          <Text style={styles.footerText}>
            Range: <Text style={styles.bold}>92 - 98</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HealthDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(10),
  },

  leftIcon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },

  tabs: {
    flexDirection: 'row',
    marginVertical: RFValue(25),
    justifyContent: 'space-between',
  },

  tab: {
    paddingVertical: RFValue(6),
    paddingHorizontal: RFValue(15),
    borderRadius: RFValue(8),
    alignItems: 'center',
    borderWidth: 1,
  },

  rangeCard: {
    borderRadius: RFValue(12),
    padding: RFValue(15),
    marginBottom: RFValue(15),
    borderWidth: 1,
  },

  rangeTitle: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(12),
    marginBottom: RFValue(5),
  },

  rangeText: {
    fontSize: RFValue(11),
    marginTop: RFValue(3),
  },

  title: {
    color: COLORS.white,
    fontSize: RFValue(14),
    marginBottom: RFValue(16),
    fontFamily: FONTS.BOLD,
  },

  sliderContainer: {
    width: SLIDER_WIDTH,
    position: 'relative',
    marginTop:20
  },

  indicator: {
    position: 'absolute',
    top: -RFValue(31),
    width: INDICATOR_WIDTH,
    alignItems: 'center',
    zIndex: 10,
  },

  indicatorText: {
    color: COLORS.white,
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(12),
    marginBottom: RFValue(2),
  },

  arrow: {
    width: RFValue(18),
    height: RFValue(18),
    resizeMode: 'contain',
    // transform: [{ rotate: '180deg' }],
  },

  trackWrapper: {
    width: SLIDER_WIDTH,
    height: RFValue(10),
    borderRadius: RFValue(10),
    backgroundColor: COLORS.lightGreen,
    justifyContent: 'center',
  },

  slider: {
    width: SLIDER_WIDTH,
    height: 40,
  },

  labels: {
    width: SLIDER_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: RFValue(10),
  },

  label: {
    color: COLORS.gray,
    fontSize: RFValue(12),
  },

  chartCard: {
    borderRadius: RFValue(12),
    padding: RFValue(15),
    borderWidth: 1,
  },

  chartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: RFValue(10),
  },

  footerText: {
    fontSize: RFValue(11),
    color: COLORS.gray,
  },

  bold: {
    fontFamily: FONTS.BOLD,
    color: COLORS.white,
    fontSize: RFValue(11),
  },
});
