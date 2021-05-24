import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Title from '../common/Title';
import SubTitle from '../common/SubTitle';
import {timeDifference} from '../../utils/timeDifference';

const FlatCard = ({item}) => {
  const navigation = useNavigation();

  const {title, description, urlToImage, publishedAt} = item;
  const timeStamp = timeDifference(new Date(), new Date(publishedAt));

  const cardClickHandler = () => {
    navigation.navigate('NewsDetails', {item});
  };

  return (
    <TouchableWithoutFeedback onPress={cardClickHandler}>
      <View style={styles.container}>
        <Image source={{uri: urlToImage}} style={styles.image} />
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
  },
  image: {
    flex: 0.35,
    height: '100%',
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
  lightContent: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#4e4d4d',
  },
});

export default FlatCard;
