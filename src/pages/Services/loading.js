import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {  Button  } from 'react-native-elements';

export default function Loading(){
    return(
        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Button 
                icon={
                    <Icon
                    name="loading"
                    size={15}
                    color="blue"
                    />  
                }
                type="clear"
                loading
            />
        </View>
    )
}