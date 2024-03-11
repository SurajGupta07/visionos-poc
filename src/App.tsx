import React from 'react';
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Home } from './screens/Home';

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView>
      <Home />
    </GestureHandlerRootView>
  );
}

export default App;
