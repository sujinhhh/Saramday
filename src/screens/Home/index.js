import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Post from '../../components/Post';

const post = {
  id: 'p1',
  user: {
    id: 'u1',
    userName: 'sujin',
    imgUri:
      'https://assetsnffrgf-a.akamaihd.net/assets/m/500600110/E/art/500600110_E_lsr_xl.jpg',
  },
  description: 'haha',
  song: 'He will make us strong',
  songImage:
    'https://assetsnffrgf-a.akamaihd.net/assets/m/502017146/univ/art/502017146_univ_lsr_lg.jpg',
  likes: 0,
  comments: 0,
  shares: 0,
  videoUri:
    'https://d34ji3l0qn3w2t.cloudfront.net/3aafd23a-b130-4272-9778-fc804b716aec/1/pk_E_040_r720P.mp4',
};

const Home = () => {
  return (
    <View>
      <Post post={post} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
