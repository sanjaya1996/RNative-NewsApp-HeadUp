import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {timeDifference} from '../utils/timeDifference';

const {height, width} = Dimensions.get('window');

const NewsDetails = ({news}) => {
  const {title, urlToImage, description, content, author, publishedAt} = news;

  const timeStamp = timeDifference(new Date(), new Date(publishedAt));

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: urlToImage}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {title}
          <Text style={styles.lightContent}>
            {' '}
            {author} {timeStamp}
          </Text>
        </Text>
        <Text style={styles.content}>{description}</Text>
        <Text style={styles.content}>{content}</Text>
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
  },
  lightContent: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#4e4d4d',
  },
});

export default NewsDetails;
