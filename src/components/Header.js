import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';



const Header = () => {
    return ( 
        <Fragment>
        <View style={styles.container}>
       <Image 
       source={require('../../assets/logo.png')}
       style={styles.logo}
                          />
        </View>
        </Fragment>
     
     );
}
const styles = StyleSheet.create({
    logo:{
        width: 80,
        height: 30,
        resizeMode: 'contain',

        
  
    },
    container:{
           paddingVertical: 10,
          paddingHorizontal: 12
          
    }


    
    
})

 
export default Header;