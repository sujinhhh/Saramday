import React from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post';

import posts from '../../../data/posts';

const Home = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 70}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
