import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Title from '../common/Title';
import SubTitle from '../common/SubTitle';
import {timeDifference} from '../../utils/timeDifference';

const BlockCard = ({style, imageStyle, item}) => {
  const navigation = useNavigation();

  const {title, description, urlToImage, publishedAt} = item;

  const timeStamp = timeDifference(new Date(), new Date(publishedAt));

  const cardClickHandler = () => {
    navigation.navigate('NewsDetails', {item});
  };

  return (
    <TouchableWithoutFeedback onPress={cardClickHandler}>
      <View style={[styles.container, style]}>
        <Image
          source={
            urlToImage && urlToImage.length > 5
              ? {uri: urlToImage}
              : require('../../../assets/defaultNewsImage.jpg')
          }
          style={[styles.image, imageStyle]}
        />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <Text style={styles.lightContent}> {timeStamp}</Text>

          <SubTitle>{description}</SubTitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
  lightContent: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#4e4d4d',
  },
});

export default BlockCard;
