import { gql } from "@apollo/client";

export const ANIME_DETAILS_TEST_QUERY = gql`
query { 
    Media ( type: ANIME) { 
      id
      title {
        romaji
        english
        native
      }
    }
  }
`


const ANIME_DETAILS = gql`
  fragment AnimeDetails on Media {
    title {
      native,
      english
    },
    format,
    genres,
    startDate {
        year,
        month,
        day
    },
    externalLinks {
        type,
        url
    }
  }
`;

export const ANIME_QUERY = gql`
query { 
    Media ( type: ANIME) { 
      ...AnimeDetails
    }
  }
  ${ANIME_DETAILS}
`;

export const PAGINATED_ANIME_QUERY = gql`
query ($page: Int) { 
    Page(page: $page, perPage: 20) {
        pageInfo {
            total,
            currentPage,
            lastPage,
            hasNextPage,
            perPage
        }
        media(type: ANIME, seasonYear: 2020, format: MOVIE, genre: "action", sort: TITLE_ENGLISH) { 
            ...AnimeDetails
        }
    }
  }
  ${ANIME_DETAILS}
`;


