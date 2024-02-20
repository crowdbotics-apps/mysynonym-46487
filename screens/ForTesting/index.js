javascript;
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Image, ScrollView, Dimensions, Text } from 'react-native';
const images = ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3'];
const windowWidth = Dimensions.get('window').width;

const ImageSliderScreen = () => {
  const [active, setActive] = useState(0);

  const change = ({
    nativeEvent
  }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

    if (slide !== active) {
      setActive(slide);
    }
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.scrollViewWrapper}>
        <ScrollView pagingEnabled horizontal onScroll={change} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          {images.map((image, index) => <Image key={index} source={{
          uri: image
        }} style={styles.image} />)}
        </ScrollView>
        <View style={styles.pagination}>
          {images.map((i, k) => <Text key={k} style={k == active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>)}
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  scrollViewWrapper: {
    width: windowWidth,
    height: 300 // Adjust the height as needed

  },
  scrollView: {
    width: windowWidth,
    height: 300 // Adjust the height as needed

  },
  image: {
    width: windowWidth,
    height: 300,
    resizeMode: 'cover'
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },
  pagingText: {
    color: '#888',
    margin: 3
  },
  pagingActiveText: {
    color: '#fff',
    margin: 3
  }
});
export default ImageSliderScreen;