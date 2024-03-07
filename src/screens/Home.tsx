import React from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import Video from 'react-native-video';

export const Home = () => {
  const { width, height } = useWindowDimensions();
  console.log(width, height);

  return (
    <ScrollView>
      <View
        style={{
          width,
          height: height - 200,
        }}>
        <Video
          paused={true}
          source={{
            uri: 'https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8',
            title: 'Big Buck Bunny',
            subtitle:
              'Big Buck Bunny (code-named Project Peach) is a 2008 animated comedy short film featuring animals of the forest, made by the Blender Institute',
            description:
              'An enormous, fluffy, and utterly adorable rabbit is heartlessly harassed by the ruthless, loud, bullying gang of a flying squirrel, who is determined to squash his happiness.',
          }}
          style={styles.video}
          controls={true}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
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
});
