
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style={{ paddingTop: StatusBar.currentHeight || 0 }}>
        <StatusBar barStyle="dark-content" />
       <HomeScreen />
    </View>
  );
};

export default App;
