import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {timeDifference} from '../utils/timeDifference';

const {height, width} = Dimensions.get('window');

const NewsDetails = ({news}) => {
  const {title, urlToImage, description, content, author, publishedAt, url} =
    news;

  const timeStamp = timeDifference(new Date(), new Date(publishedAt));

  const openUrlHandler = async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={
          urlToImage && urlToImage.length > 5
            ? {uri: urlToImage}
            : require('../../assets/defaultNewsImage.jpg')
        }
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {title}
          <Text style={styles.lightContent}>
            {' '}
            {author} {timeStamp}
          </Text>
        </Text>
        <Text style={styles.content}>{description}</Text>
        <View>
          <Text style={{...styles.content, marginBottom: 0}}>
            Read more on:
          </Text>
          <TouchableOpacity onPress={openUrlHandler}>
            <Text style={styles.link}>{url}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#4e4d4d',
    marginBottom: 10,
  },
  lightContent: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#4e4d4d',
  },
  link: {
    color: 'black',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default NewsDetails;
