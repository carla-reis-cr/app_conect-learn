import React from 'react';
import { View, Text, Image  } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]

export default function Post(){
    return(
        <View>
            <Card>
                <Card.Title>HELLO WORLD</Card.Title>

                <Card.Image 
                size={600}
                    source={require('../../../public/images/logo_feevale.jpg')}>
                    </Card.Image>

  <Text style={{marginBottom: 10}}>
      Conteudo do post, tentar limitar e criar algumas lógicas para quando o usuário informar uma imagem e texto, ou apenas texto, pensar se vamos modularizar ou como será feito!
    </Text>
    <Button
      icon={<Icon name='code' color='#ffffff' />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
</Card>
        </View>
    )
}