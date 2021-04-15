import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Input, Button } from 'react-native-elements';


export default function Register({navigation}){
    return(
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Avatar
            rounded
            source={{
                uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            size='xlarge'
            />
           <Input
            placeholder='Nome'
            leftIcon={
                <Icon
                name='account'
                size={15}
                color='black'
                />
            }
            />
            <Input
            placeholder='Email'
            leftIcon={
                <Icon
                name='at'
                size={15}
                color='black'
                />
            }
            />
            <Input 
            placeholder="Password" 
            secureTextEntry={true} 
            leftIcon={
                <Icon
                name='key'
                size={15}
                color='black'
                />
            }
            />
            <Button
            icon={
                <Icon
                name="account-plus"
                size={15}
                color="white"
                />
            }
            title=" Cadastrar"
            onPress={()=>navigation.navigate('Home')}
            />
        </View>
    )
}