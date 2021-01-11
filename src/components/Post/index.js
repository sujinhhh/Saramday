import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Video from 'react-native-video';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {
  const [paused, setPaused] = useState(false);
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({...post, likes: post.likes + likesToAdd});
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: post.videoUri,
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
              source={{uri: post.user.imgUri}}
            />
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
            <View>
              <AntDesign
                name={'heart'}
                size={40}
                color={isLiked ? 'red' : 'white'}
              />
            </View>
            <Text style={styles.stateLebel}>{post.likes}</Text>
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <View>
              <FontAwesome name={'commenting'} size={40} color="white" />
            </View>

            <Text style={styles.stateLebel}>{post.comments}</Text>
          </View>
          <View style={styles.iconContainer}>
            <View>
              <Fontisto name={'share-a'} size={35} color="white" />
            </View>
            <Text style={styles.stateLebel}>{post.shares}</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>{post.user.userName}</Text>
            <Text style={styles.decription}>{post.description}</Text>
            <View style={styles.songRow}>
              {/* icon */}
              <Entypo name={'beamed-note'} size={24} color="white" />
              {/* name */}
              <Text style={styles.songName}>{post.song}</Text>
            </View>
          </View>
          <Image style={styles.songImage} source={{uri: post.songImage}} />
        </View>
      </View>
    </View>
  );
};

export default Post;
