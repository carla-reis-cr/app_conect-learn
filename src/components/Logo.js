//Logo para ser usado na aplicação
import React from 'react';
import { View, Image, StyleSheet  } from 'react-native';

import logo from '../../public/images/logo.png'

 const Logo = () => {
    return( 
    <View style={styles.container}>
        <Image
        style={styles.logo}
        source={{
          uri:
          logo,
        }}
      />
    </View>
     );
}     

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      alignItems: 'center', 
      justifyContent: 'center'
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

  export default Logo;