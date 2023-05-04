import { gql } from '@apollo/client';

const GET_BAZAR = gql`
  query getBazar{
    bazars{
        name
        description
        price
    }
  }
`;

export {GET_BAZAR}