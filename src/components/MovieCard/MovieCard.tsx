import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Video from 'react-native-video';
import { movieData } from '../../utils/constants';
import { IMovieCardProps } from './types';

export const MovieCard: React.FC<IMovieCardProps> = props => {
  const { pause, control } = props;
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        width,
        height: height / 2.15,
      }}>
      <Video
        paused={pause}
        source={{
          uri: movieData.url,
          title: movieData.title,
          subtitle: movieData.subTitle,
          description: movieData.description,
        }}
        style={styles.video}
        controls={control}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{movieData.title}</Text>
        <Text style={styles.description}>{movieData.description}</Text>
        <Text style={styles.tags}>{movieData.tags.join(' | ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
  title: {
    fontSize: 60,
    fontWeight: '700',
    color: '#FFF',
  },
  description: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFF',
  },
  tags: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFF',
  },
});
