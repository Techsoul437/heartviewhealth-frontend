import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={theme.background}
        barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
