import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 20,
  },

  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  decription: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 5,
  },

  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  songImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },
  profilePictureContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },

  stateLebel: {
    color: '#fff',
    paddingVertical: 5,
    fontWeight: '600',
    marginTop: 5,
  },
});

export default styles;
