import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
//component deparador vertical

const Separator = (props) => {
    return (
              <View style={[
                styles.separator,
                {
                    borderTopColor: props.color || "#eaeaea"
                }
            ]}>

  
          </View>

      );
}
const styles = StyleSheet.create({
    separator:{
        borderTopWidth: 1,
      marginHorizontal: 10
    }
})
 
export default Separator;