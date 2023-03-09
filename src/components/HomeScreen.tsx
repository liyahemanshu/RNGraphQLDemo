import {useQuery} from '@apollo/client';
import {
  Text,
  Platform,
  UIManager,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { AccordionList} from 'react-native-accordion-list-view';
import React, {useEffect} from 'react';
import Loading from './Loading';
import {GET_ALL_FILMS} from '../gql/queries';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

const FilmHeader = ({ item, navigation }) => {
    console.log('ID: ', item.id);
    return (
      <View
        style={styles.container}>
        <Text style={styles.titleStyle}>{item.title}</Text>
        <View style={styles.subtitleStyle} />
        <Button
          style={styles.buttonStyle}
          title="Details"
          onPress={() => navigation.navigate('Film Detail', {itemId: item.id})}
        />
        <View />
      </View>
    );
  }

const FilmSpeciesDetail = ({ item }) => {
    console.log(item.director);
    return (
      
        item.speciesConnection.species.map((element, idx) => (
          <View key={idx} style={styles.filmDetailStyle}>
            <Text> -> Name: {element.name}</Text>
            <Text> -> Classification: {element.classification}</Text>
          </View>
        ))
      
    );
  }


export default function HomeScreen({navigation}) {
  const {data, loading, error} = useQuery(GET_ALL_FILMS, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first', // Used for subsequent executions
  });

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    console.log('data: ', data);
  }

  return (
    <SafeAreaView>
      <SafeAreaView>
        <View style={styles.container}>
          <AccordionList
            
            data={data.allFilms.films}
            customTitle={item => <FilmHeader key={item} item={item} navigation={ navigation} />}
            customBody={item => <FilmSpeciesDetail key={ item.id} item={ item} />}
            animationDuration={400}
            expandMultiple={true}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
  },
  buttonStyle: {
    fontSize: 15
  },
  filmDetailStyle: {
    flex: 1, padding: 10
  },
  titleStyle: { fontSize: 16, padding: 10 },
  subtitleStyle: {flexDirection: 'row', alignItems: 'flex-end'}
});
