import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import Video from 'react-native-video';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = () => {
  const [paused, setPaused] = useState(false);
  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          onError={(e) => console.log(e)}
          style={styles.video}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <View>
            <Image
              style={styles.profilePictureContainer}
              source={require('../../assets/chan.png')}
            />
          </View>
          <View style={styles.iconContainer}>
            <View>
              <AntDesign name={'heart'} size={40} color="white" />
            </View>
            <Text style={styles.stateLebel}>Side</Text>
          </View>
          <View style={styles.iconContainer}>
            <View>
              <FontAwesome name={'commenting'} size={40} color="white" />
            </View>

            <Text style={styles.stateLebel}>Side</Text>
          </View>
          <View style={styles.iconContainer}>
            <View>
              <Fontisto name={'share-a'} size={35} color="white" />
            </View>
            <Text style={styles.stateLebel}>Side</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.handle}>User name</Text>
          <Text style={styles.decription}>Description</Text>
          <View style={styles.songRow}>
            {/* icon */}
            <Entypo name={'beamed-note'} size={24} color="white" />
            {/* name */}
            <Text style={styles.songName}>He will make us strong</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
