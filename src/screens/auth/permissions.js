import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Alert,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../../constants/Fonts';
import ImagesPath from '../../constants/ImagesPath';
import { COLORS } from '../../constants/Colour';
import GradientButton from '../../components/GradientButton';
import {
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
import { useNavigation } from '@react-navigation/native';

const Permisstion = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  /* ---------- LOCATION ---------- */
  const requestLocationPermission = async () => {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      return true;
    }

    if (result === RESULTS.BLOCKED) {
      Alert.alert(
        'Location Permission Required',
        'Please enable location permission from settings',
        [{ text: 'Open Settings', onPress: openSettings }],
      );
    }
    return false;
  };

  /* ---------- PHOTO ---------- */
  const requestPhotoPermission = async () => {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : Platform.Version >= 33
        ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      return true;
    }

    if (result === RESULTS.BLOCKED) {
      Alert.alert(
        'Photo Permission Required',
        'Please enable photo permission from settings',
        [{ text: 'Open Settings', onPress: openSettings }],
      );
    }
    return false;
  };

  /* ---------- ALLOW ALL ---------- */
  const handleAllowPermissions = async () => {
    const locationGranted = await requestLocationPermission();
    const photoGranted = await requestPhotoPermission();

    if (locationGranted && photoGranted) {
      Alert.alert('Success', 'All permissions granted');
      navigation.navigate('Main');
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.header, { color: theme.text }]}>
        Add Permissions
      </Text>
      <Text style={[styles.headerNote, { color: theme.text }]}>
        To provide you with accurate health insights and emergency support, we
        need access to the following:
      </Text>
      <TouchableOpacity>
        <View
          style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
        >
          <View
            style={[
              styles.innerContainer,
              {
                backgroundColor: theme.innerBackground,
                borderColor: theme.inputBorder,
              },
            ]}
          >
            <View
              style={[
                styles.perimssionContainer,
                { backgroundColor: COLORS.lightGreen.slice(0, 7) + '20' },
              ]}
            >
              <Image
                source={ImagesPath.location}
                style={[styles.permssionIcon, { tintColor: COLORS.lightGreen }]}
              />
            </View>
            <View style={{ paddingRight: RFValue(60) }}>
              <Text style={[styles.lebal, { color: theme.text }]}>
                ECG Access
              </Text>
              <Text style={[styles.value, { color: theme.text }]}>
                To view, record, and analyze heart activity, and to assist
                during heart-related alerts.
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[styles.shadowWrapper, { shadowColor: theme.shadowColor }]}
        >
          <View
            style={[
              styles.innerContainer,
              {
                backgroundColor: theme.innerBackground,
                borderColor: theme.inputBorder,
              },
            ]}
          >
            <View
              style={[
                styles.perimssionContainer,
                { backgroundColor: COLORS.green + '20' },
              ]}
            >
              <Image
                source={ImagesPath.gallery}
                style={[styles.permssionIcon, { tintColor: COLORS.green }]}
              />
            </View>
            <View style={{ paddingRight: RFValue(70) }}>
              <Text style={[styles.lebal, { color: theme.text }]}>
                Photo Access
              </Text>
              <Text style={[styles.value, { color: theme.text }]}>
                To upload lab reports and add a profile photo.
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.noteContainer}>
        <Image
          source={ImagesPath.lock}
          style={[styles.permssionIcon, { tintColor: COLORS.darkBlue }]}
        />
        <View>
          <Text style={[styles.note, { color: theme.text,marginRight:50 }]}>
            Your data is securely stored and used only for these purposes.
          </Text>
          <Text style={[styles.noteDesc, { color: theme.text,marginRight:50}]}>
            You can change or revoke these permissions anytime in Settings.
          </Text>
        </View>
      </View>

      <GradientButton
        title="Allow Permissions >"
        onPress={handleAllowPermissions}
        style={{ marginTop: 16 }}
      />
      {/* <GradientButton
        title="Skip for Now"
        style={{ marginBottom: 12, marginTop: 12 }}
      /> */}
      <TouchableOpacity>
        <View style={[styles.shadowButton, { shadowColor: theme.shadowColor }]}>
          <View
            style={[
              styles.Button,
              {
                backgroundColor: theme.innerBackground,
                borderColor: theme.inputBorder,
              },
            ]}
          >
            <Text style={[styles.skip, { color: theme.text }]}>
              Skip for Now
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Permisstion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
  },
  header: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(20),
  },
  headerNote: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(13),
    marginTop: RFValue(10),
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
    borderRadius: RFValue(20),
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(12),
    flexDirection: 'row',
    borderWidth: 1,
    gap: RFValue(10),
  },
  permssionIcon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },
  perimssionContainer: {
    // padding:10,
    height: 40,
    width: 40,
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lebal: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(14),
  },
  value: {
    fontFamily: FONTS.LIGHT,
    fontSize: RFValue(12),
  },
  note: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(12),
    // marginTop: RFValue(15),
  },
  noteDesc: {
    fontFamily: FONTS.LIGHT,
    fontSize: RFValue(10),
    // marginTop:RFValue(15)
  },
  skip: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(14),
    textAlign: 'center',
  },
  shadowButton: {
    // borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginTop: RFValue(20),
    // marginHorizontal: 10,
  },

  Button: {
    borderRadius: 10,
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(12),

    borderWidth: 1,
    gap: RFValue(10),
  },
  noteContainer: {
    backgroundColor: COLORS.blue,
    borderWidth: 1,
    borderColor: COLORS.darkBlue,
    marginTop: RFValue(15),
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: RFValue(10),
    borderRadius: RFValue(10),
    gap: RFValue(5),
  },
});
