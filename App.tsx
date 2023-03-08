import React from 'react';

import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilmDetail from './src/components/FilmDetail';
import HomeScreen from './src/components/HomeScreen';

const Stack = createNativeStackNavigator();

// Initialize Apollo Client
const client = new ApolloClient({
  //Not Given Graphql url is redirecting to below url. Checked in Browser. So need to use below url. Given url not working in app so using new url
  // uri: 'https://studio.apollographql.com/public/star-wars-swapi/explorer?variant=current',
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Films'}}
          />
          <Stack.Screen name="Film Detail" component={FilmDetail} />
        </Stack.Navigator>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </NavigationContainer>
    </ApolloProvider>
  );
}

