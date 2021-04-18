//Feed ou Home

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import image from '../../public/images/logo.png'

import ListFeedItem from '../components/ListFeedItem';

 const Feed = () => (
    <ScrollView>
           <ListFeedItem
            key={1} 
            newsUrl={'test'}  
            newsImage={{src: image}}
            newsTitle={'Hello World'}  
            newsDescription={'teste '}
            />
           <ListFeedItem/>
    </ScrollView>  

 )

  export default Feed

  //https://www.youtube.com/watch?v=wc4jFStaR2c