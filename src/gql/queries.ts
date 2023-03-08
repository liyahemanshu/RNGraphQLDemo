import {gql} from '@apollo/client';

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;

export const GET_ALL_FILMS = gql`
  query AllFilms {
    allFilms {
      films {
        id
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
          }
        }
      }
    }
  }
`;

export const GET_FILM_DETAILS = gql`
  query Film($filmId: ID) {
    film(filmID: $filmId) {
      created
      director
      id
      producers
      releaseDate
      title
      openingCrawl
    }
  }
`;

export const COUNTRY_QUERY = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      countries {
        name
      }
    }
  }
`;
