import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import RootNavigator from './src/navigation/RootNavigator';
import NoInternetScreen from './src/screens/NoInternetScreen';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import { LanguageProvider } from './src/constants/LanguageContext';

const AppContent = () => {
  const { theme } = useTheme();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Listen for connection changes
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  const handleRetry = () => {
    NetInfo.fetch().then(state => setIsConnected(state.isConnected));
  };

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={theme.background}
        barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
      />

      <NavigationContainer>
        {isConnected ? (
          <RootNavigator />
        ) : (
          <NoInternetScreen onRetry={handleRetry} />
        )}
      </NavigationContainer>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider> 
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
