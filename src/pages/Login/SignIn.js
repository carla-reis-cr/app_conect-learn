import React, { useState } from 'react';
import { View, Text , TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input, Button, SocialIcon } from 'react-native-elements';

//componentes próprios
import Logo from '../../components/Logo'

export default function SignIn({navigation}){
    const [display, setDisplay] = useState('none');
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(null);

    return(

        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>    
        <View style={{borderRadius:6, width:280,}}>
            <Logo />
            <Input
            placeholder='Email'
            leftIcon={
                <Icon
                name='at'
                size={15}
                color='black'
                />
            }
            //errorStyle={{ color: 'red' }}
            //errorMessage='ENTER A VALID ERROR HERE'
            onChangeText={text=>setUser(text)}
            />
            <Input 
            placeholder="Informe a senha" 
            secureTextEntry={true} 
            leftIcon={
                <Icon
                name='key'
                size={15}
                color='black'
                />
            }
            onChangeText={text=>setPassword(text)}
            />

            <Button
            icon={
                <Icon
                name="login"
                size={15}
                color="white"
                />
            }
            title=" Entrar"
            onPress={() =>navigation.navigate('Home')}
            />
            <View style={{ alignSelf: 'center', position:'relative', marginTop:6, fontWeight: 'normal'}}>
                <Text style={{ alignSelf: 'center', marginTop:6, fontWeight: 'normal'}}>Sem conta? 
                </Text>
                <Text 
                    style={{fontWeight:'bold', color:'#6495ED'}}
                    onPress={()=>navigation.navigate('Register')}>Cadastre-se agora
                </Text>
            </View>
            <View>
                <View style={{ alignSelf: 'center', marginTop:30, display:'flex', flexDirection:'row'}}>
                    <SocialIcon
                    type="facebook"
                    botton
                    /> 
                    <SocialIcon
                    type="instagram"
                    botton
                    /> 
                    <SocialIcon
                    type="twitter"
                    botton
                    />                      
                </View>
            </View>
        </View>
        </View>

    )
}