import React from 'react';
import { View, Text } from 'react-native';

import Post from './Post';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Post />
      </View>
    );
  }
  