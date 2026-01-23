import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import React, { useContext } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '../../theme/ThemeContext';
import ImagesPath from '../../constants/ImagesPath';
import { LanguageContext } from '../../constants/LanguageContext';
import i18n from '../../assets/i18n';

// const { width } = Dimensions.get('window');

const HealthCard = () => {
  const { theme } = useTheme();
  useContext(LanguageContext);

  const healthMetrics = [
    {
      key: 'bloodPressure',
      title: 'bloodPressure',
      value: '120/80',
      icon: ImagesPath.pulse,
      color: '#4DA3FF',
    },
    {
      key: 'sugar',
      title: 'sugar',
      value: '95',
      unit: 'mg/dL',
      icon: ImagesPath.drop,
      color: '#F5B041',
    },
    {
      key: 'heartRate',
      title: 'heartRate',
      value: '72',
      unit: 'bpm',
      icon: ImagesPath.heart,
      color: '#2ECC71',
    },
  ];

 const { width } = useWindowDimensions();
const isTablet = width >= 768;

const spacing = 16;
const containerMaxWidth = isTablet ? 800 : width;
const cardWidth = (containerMaxWidth - spacing * 4) / 3;

  return (
    <View style={styles.container}>
      {healthMetrics.map((item, index) => (
        <View
          key={item.key}
          style={[
            styles.card,
            {
              width: cardWidth,
              marginRight: index === healthMetrics.length - 1 ? 0 : spacing,
              backgroundColor: theme.innerBackground,
              borderColor: theme.inputBorder,
              shadowColor: theme.shadowColor,
            },
          ]}
        >
          <View
            style={[
              styles.iconWrapper,
              { backgroundColor: item.color + '20' },
            ]}
          >
            <Image
              source={item.icon}
              style={[styles.icon, { tintColor: item.color }]}
            />
          </View>

          <Text style={[styles.title, { color: theme.text }]}>
            {i18n.t(item.title)}
          </Text>

          <Text style={[styles.value, { color: theme.text }]}>
            {item.value}
          </Text>

          {item.unit && <Text style={[styles.unit, { color: theme.text }]}>{item.unit}</Text>}
        </View>
      ))}
    </View>
  );
};

export default HealthCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: RFValue(15),
    
  },
  card: {
    borderWidth: 1,
    borderRadius: RFValue(14),
    padding: RFValue(12),
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  iconWrapper: {
    height: RFValue(36),
    width: RFValue(36),
    borderRadius: RFValue(18),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(10),
  },
  icon: {
    height: RFValue(18),
    width: RFValue(18),
    resizeMode: 'contain',
  },
  title: {
    fontSize: RFValue(12),
    marginBottom: RFValue(6),
    textAlign: 'center',
  },
  value: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  unit: {
    fontSize: RFValue(11),
    fontWeight: '400',
  },
});
