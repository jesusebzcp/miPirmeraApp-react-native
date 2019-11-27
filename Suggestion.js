import React from 'react';

import { View, Text, Image,  StyleSheet} from 'react-native';



const Suggestion = (props) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.left}>
            <Image
                style={styles.cover}
                source={require('./assets/camera.jpg')}
            />
 <View style={styles.genero}><Text style={styles.generoText}>Accion</Text></View>
            </View>
           
            <View style={styles.right}>
            <Text style={styles.title} >Avenger</Text>
            <Text style={styles.year} >Avenger</Text>
            <Text style={styles.rating} >Avenger</Text>

            </View>

        </View> );
}

const styles = StyleSheet.create({
           container:{
               flexDirection: 'row'

           },
           right:{
             paddingLeft: 10,
             justifyContent: 'space-between'
           },
           cover:{
            width: 150,
            height: 100,
            resizeMode: 'contain',
          
           },
           title:{
                fontSize: 18,
                color: '#44546b'
           },
           year:{
               backgroundColor: "#d500f9",
               paddingVertical: 4 ,
               paddingHorizontal: 6,
               color: "white",
               fontSize: 11,
               borderRadius: 5,
               fontWeight:"bold",
               overflow: "hidden",
               alignSelf: 'flex-start'

           },
           rating:{
               color: '#6b6b6b',
               fontSize: 14,
               fontWeight: 'bold'
           },
           genero:{
               position: 'absolute',
               top: 0,
               left: 0,
               backgroundColor: 'black',
            
           },
           generoText:{
               color: 'white',
               paddingHorizontal: 20,
               paddingVertical: 5,
               fontSize: 10,
           
           }
           

})
 
export default Suggestion;