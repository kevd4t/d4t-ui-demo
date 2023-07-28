import { gql } from '@apollo/client'

export const GET_STATIONS = gql`
query {
  characters {
    results {
      id
      name
      status
    }
  }
}
`
