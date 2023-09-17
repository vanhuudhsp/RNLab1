import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Excerise1 from './src/Excersise1';
import Excerise2 from './src/Excersise2';


const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'ex1', title: 'Excersise 1', focusedIcon: 'ab-testing', unfocusedIcon: 'heart-outline'},
    { key: 'ex2', title: 'Excersise 2', focusedIcon: 'ab-testing', unfocusedIcon: 'heart-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ex1: Excerise1,
    ex2: Excerise2,                                                           
  });     
           
  return (
    <SafeAreaProvider>
       <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
   
  );
};

export default App;