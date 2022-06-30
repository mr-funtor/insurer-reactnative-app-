import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigations/RootNavigator'

//redux
import { store } from './redux/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
