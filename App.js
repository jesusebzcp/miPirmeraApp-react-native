import React, {Fragment} from 'react';
import {Text, View, StatusBar} from 'react-native';
import Home from './src/pages/home';
import Header from './src/components/Header';
import SuggestionList from './src/components/SuggestionList';









const App = () => {



  return (  
    <Fragment>
    <Home >
     <View style={{ marginTop: StatusBar.currentHeight }}>
      <Header/>
 
 
     <Text>Suscribete</Text>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <SuggestionList/>
  
        </View>
        
        
    </Home>
    </Fragment>
  );
}
 
export default App;


