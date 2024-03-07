import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Home } from './screens/Home';
import { LogBox } from 'react-native';

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Home />
    </GestureHandlerRootView>
  );
}

export default App;
