import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import Video from 'react-native-video';
import ImagesPath from '../constants/ImagesPath';
import { useNavigation, StackActions } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/video/SplashVideo.mp4')}
        style={styles.video}
        resizeMode='contain'
        muted={false}
        ignoreSilentSwitch="ignore"
        repeat={false}
        controls={false}
        playInBackground={false}
        playWhenInactive={false}
        onLoad={() => {
          console.log('Video loaded');
        }}
        onEnd={() => {
          navigation.replace('Onboarding');
        }}
        onError={e => {
          navigation.replace('Onboarding');
        }}
      />
     </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    width: width,
    height: height,
  },
});
