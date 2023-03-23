import React from 'react';
import AppNavigator from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
