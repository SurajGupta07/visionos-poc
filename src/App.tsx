import React from 'react';
import { LogBox, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Home } from './screens/Home';

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView style={styles.container}>
      <Home />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
