import {Text, View, StyleSheet} from 'react-native';

import {useQuery} from '@apollo/client';
import {GET_FILM_DETAILS} from '../gql/queries';
import React from 'react';
import base64 from 'react-native-base64';
import Loading from './Loading';

export default function FilmDetail({route, navigation}) {
  console.log('Decoded String', route.params);
  const {itemId} = route.params;
  const films = base64.decode(itemId);
  console.log('Films : ', films.split(':')[1]);
  const filmId = films.split(':')[1];

  const {data, loading, error} = useQuery(GET_FILM_DETAILS, {
    variables: {filmId},
  });

  if (loading) {
    return <Loading />;
  } else {
    console.log(data);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Title: **{data.film.title}**</Text>
      <Text style={styles.textStyle}>Director: **{data.film.director}**</Text>
      <Text style={styles.textStyle}>Producers: **{data.film.producers.join(',')}**</Text>
      <Text style={styles.textStyle}>Description:{'\n'}**{data.film.openingCrawl}**</Text>
      <Text style={styles.textStyle}>Release Date: **{data.film.releaseDate}**</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    padding: 10,
  },
  container: {flex: 1, justifyContent: 'flex-start', padding: 20},
});